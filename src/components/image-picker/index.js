/* eslint-disable no-nested-ternary */
import Taro from '@tarojs/taro'
import { View, Input, Image } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { uuid } from '../../common/utils'
import AtComponent from '../../common/component'

// 生成 jsx 二维矩阵
const generateMatrix = (files, col, showAddBtn) => {
  const matrix = []
  const length = showAddBtn ? files.length + 1 : files.length
  const row = Math.ceil(length / col)
  for (let i = 0; i < row; i++) {
    if (i === row - 1) {
      // 最后一行数据加上添加按钮
      const lastArr = files.slice(i * col)
      if (lastArr.length < col) {
        if (showAddBtn) {
          lastArr.push({ type: 'btn' })
        }
        // 填补剩下的空列
        for (let j = lastArr.length; j < col; j++) {
          lastArr.push({ type: 'blank' })
        }
      }
      matrix.push(lastArr)
    } else {
      matrix.push(files.slice(i * col, (i + 1) * col))
    }
  }
  return matrix
}

const ENV = Taro.getEnv()

export default class AtImagePicker extends AtComponent {
  constructor () {
    super(...arguments)
    this.inputId = uuid()
    this.fileInput = null
  }

  chooseFile () {
    const { files, multiple } = this.props
    switch (ENV) {
      case Taro.ENV_TYPE.WEB:
        this.fileInput.click()
        break

      case Taro.ENV_TYPE.WEAPP:
      case Taro.ENV_TYPE.ALIPAY: {
        const filePathName = {
          'ALIPAY': 'apFilePaths',
          'WEAPP': 'tempFiles'
        }[ENV]
        Taro.chooseImage({
          count: multiple ? 99 : 1
        }).then(res => {
          const targetFiles = res.tempFilePaths.map(
            (path, i) => ({
              url: path,
              file: res[filePathName][i]
            })
          )
          this.props.onChange(files.concat(targetFiles), 'add')
        }).catch(this.props.onFail)
      }
        break

      default:
        console.log('暂未支持该环境')
        break
    }
  }

  handleImgChoose (event) {
    // h5 图片监听逻辑
    const { files } = this.props
    const targetFiles = event.target.files
    if (targetFiles) {
      for (let i = 0; i < targetFiles.length; i++) {
        files.push({
          url: window.URL.createObjectURL(targetFiles[i]),
          file: targetFiles[i]
        })
      }
      this.props.onChange(files, 'add')
    }
    // fix 上传第二次不能选择同一文件
    event.target.value = ''
  }

  handleImageClick (i) {
    const { files } = this.props
    this.props.onImageClick(i, files[i])
  }

  handleRemoveImg (i) {
    const { files } = this.props
    if (ENV === Taro.ENV_TYPE.WEB) {
      window.URL.revokeObjectURL(files[i].url)
    }
    files.splice(i, 1)
    this.props.onChange(files, 'remove', i)
  }

  componentDidMount () {
    if (ENV === Taro.ENV_TYPE.WEB) {
      this.fileInput = document.getElementById(this.inputId)
    }
  }

  render () {
    const {
      className,
      customStyle,
      files,
      mode,
      multiple,
      length,
      showAddBtn
    } = this.props
    // 行数
    const matrix = generateMatrix(files, length, showAddBtn)
    console.log(matrix)
    return (
      <View
        className={
          classNames('at-image-picker', className)
        }
        style={customStyle}
      >
        <Input
          id={this.inputId}
          className='at-image-picker__file-input'
          type='file'
          accept='image/*'
          multiple={multiple ? 'multiple' : ''}
          onChange={this.handleImgChoose.bind(this)}
        />
        {
          matrix.map((row, i) => (
            <View
              key={i}
              className='at-image-picker__flex-box'
            >
              {
                row.map((item, j) => (
                  item.url
                    ? <View
                      className='at-image-picker__flex-item'
                      key={item.url}
                    >
                      <View className='at-image-picker__item'>
                        <View
                          className='at-image-picker__remove-btn'
                          onClick={this.handleRemoveImg.bind(this, (i * length) + j)}
                        ></View>
                        <Image
                          mode={mode}
                          onClick={this.handleImageClick.bind(this, (i * length) + j)}
                          className='at-image-picker__preview-img'
                          src={item.url}
                        />
                      </View>
                    </View>
                    : item.type === 'blank'
                      ? <View
                        className='at-image-picker__flex-item'
                        key={item}
                      >
                      </View>
                      : <View
                        className='at-image-picker__flex-item'
                        onClick={this.chooseFile.bind(this)}
                        key='add'
                      >
                        <View className='at-image-picker__item at-image-picker__choose-btn'>
                          <View className='add-bar'></View>
                          <View className='add-bar'></View>
                        </View>
                      </View>
                ))
              }
            </View>
          ))
        }
      </View>
    )
  }
}

AtImagePicker.defaultProps = {
  className: '',
  customStyle: '',
  files: [],
  mode: 'aspectFill',
  showAddBtn: true,
  multiple: false,
  length: 4,
  onChange: () => {},
  onImageClick: () => {},
  onFail: () => {},
}

AtImagePicker.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  customStyle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  files: PropTypes.array,
  mode: PropTypes.oneOf([
    'scaleToFill',
    'aspectFit',
    'aspectFill',
    'widthFix',
    'top',
    'bottom',
    'center',
    'left',
    'right',
    'top left',
    'top right',
    'bottom left',
    'bottom right'
  ]),
  showAddBtn: PropTypes.bool,
  multiple: PropTypes.bool,
  length: PropTypes.number,
  onChange: PropTypes.func,
  onImageClick: PropTypes.func,
  onFail: PropTypes.func,
}
