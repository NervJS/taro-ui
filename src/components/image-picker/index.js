/* eslint-disable no-nested-ternary */
import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import AtComponent from '../../common/component'
import { uuid } from '../../common/utils'
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
          lastArr.push({ type: 'btn', uuid: uuid() })
        }
        // 填补剩下的空列
        for (let j = lastArr.length; j < col; j++) {
          lastArr.push({ type: 'blank', uuid: uuid() })
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
  chooseFile = () => {
    const { files, multiple } = this.props
    const filePathName = {
      'ALIPAY': 'apFilePaths',
      'WEAPP': 'tempFiles',
      'WEB': 'tempFiles'
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

  handleImageClick = i => this.props.onImageClick(i, this.props.files[i])

  handleRemoveImg = i => {
    const { files } = this.props
    if (ENV === Taro.ENV_TYPE.WEB) {
      window.URL.revokeObjectURL(files[i].url)
    }
    files.splice(i, 1)
    this.props.onChange(files, 'remove', i)
  }

  render () {
    const {
      className,
      customStyle,
      files,
      mode,
      length,
      showAddBtn
    } = this.props
    // 行数
    const matrix = generateMatrix(files, length, showAddBtn)
    const rootCls = classNames('at-image-picker', className)

    return (
      <View
        className={rootCls}
        style={customStyle}
      >
        {
          matrix.map((row, i) => (
            <View
              className='at-image-picker__flex-box'
              key={i}
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
                          className='at-image-picker__preview-img'
                          mode={mode}
                          src={item.url}
                          onClick={this.handleImageClick.bind(this, (i * length) + j)}
                        />
                      </View>
                    </View>
                    : <View
                      className='at-image-picker__flex-item'
                      key={item.uuid}
                    >
                      {item.type === 'btn' && (
                        <View
                          className='at-image-picker__item at-image-picker__choose-btn'
                          onClick={this.chooseFile}
                        >
                          <View className='add-bar'></View>
                          <View className='add-bar'></View>
                        </View>
                      )}
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
  isTest: false,
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
  isTest: PropTypes.bool,
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
