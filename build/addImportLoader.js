const mdContainer = require('markdown-it-container')
const frontMatter = require('front-matter')
const highlight = require('highlight.js')

let md = require('markdown-it')

const options = {
  className: 'wrap'
}

md = md({
  html: true, // Enable HTML tags in source
  xhtmlOut: true,
  typographer: false,
  linkify: false
})
  .enable(['smartquotes'])
  .set({
    highlight (content, languageHint) {
      let highlightedContent

      highlight.configure({
        useBR: true,
        tabReplace: '    '
      })

      if (languageHint && highlight.getLanguage(languageHint)) {
        try {
          highlightedContent = highlight.highlight(languageHint, content).value
        } catch (err) {
          console.log(err)
        }
      }

      if (!highlightedContent) {
        try {
          highlightedContent = highlight.highlightAuto(content).value
        } catch (err) {
          console.log(err)
        }
      }

      // 把代码中的{}转
      highlightedContent = highlightedContent.replace(/[{}]/g, match => `{'${match}'}`)

      // 加上 hljs
      highlightedContent = highlightedContent
        .replace('<code class="', '<code class="hljs ')
        .replace('<code>', '<code class="hljs">')

      return highlight.fixMarkup(highlightedContent)
    }
  })

const formatModule = (imports, js, jsx, state, method) => {
  const moduleText = `
    ${imports}

    ${js}

    class MarkdownItReactComponent extends Nerv.Component {
        constructor(props){
            super(props);
            this.state = ${state || '{}'};
            Object.assign(this,props.methods)
        }
        handleToggleCode(flag){
            const state = {};
            state['showCode' + flag] = !this.state['showCode' + flag];
            this.setState(state);
        }
        handleCopyCode (code) {
          copy(code)
        }
        ${method || ''}
        render(){

            return (
                <div className="${options.className}">
                    ${jsx}
                </div>
            );
        }
    };

    export default MarkdownItReactComponent;`

  return moduleText
}

const formatOpening = (code, description, flag) => {
  return `  <div className="at-component__container">
    <div className="at-component__sample">
        ${code}
    </div>
    <div className="${options.className}-demo-meta" >
        <div className="at-component__code"  style={{display: this.state.showCode${flag}? '' : 'none' }}>
            `
}

const formatClosing = flag => {
  return `</div>
        <div className="at-component__code-toggle" onClick={this.handleToggleCode.bind(this, ${flag})}>
          { this.state.showCode${flag} ? '隐藏代码':'显示代码'}
        </div>
    </div>
</div>`
}

module.exports = function (source) {
  this.cacheable()
  // init options
  Object.assign(options, this.options.markdownItReact ? this.options.markdownItReact() : {})

  const {
    body,
    attributes: { imports: importMap }
  } = frontMatter(source)

  const imports = `import * as Nerv from 'nervjs';  import copy from 'copy-to-clipboard';${importMap}`

  const moduleJS = []
  let state = ''
  // 放在这里应该没有问题， 反正是顺序执行的
  let flag = ''

  md.use(mdContainer, 'demo', {
    validate: params => params.trim().match(/^demo\s*(.*)$/),
    render: (tokens, idx) => {
      // container 从开头到结尾把之间的token跑一遍，其中idx定位到具体的位置

      // 获取描述
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)

      // 有此标记代表 ::: 开始
      if (tokens[idx].nesting === 1) {
        flag = idx

        let jsx = ''
        // let state = null
        // let method = ''
        let i = 1

        // 从 ::: 下一个token开始
        let token = tokens[idx + i]

        // 如果没有到结尾
        while (token.markup !== ':::') {
          // 只认```，其他忽略
          if (token.markup === '```') {
            if (token.info === 'js') {
              // 插入到import后，component前
              moduleJS.push(token.content)
            } else if (token.info === 'jsx' || token.info === 'html') {
              // 插入render内
              jsx = token.content
            } else if (token.info === 'state') {
              // console.log(typeof )
              state = token.content.replace(/\\[a-z]/g, ' ').replace(/'/g, `"`)
            }
          }
          i++
          token = tokens[idx + i]
        }
        // 描述也执行md
        return formatOpening(jsx, md.render(m[1]), flag)
      }
      return formatClosing(flag)
    }
  })

  // md 处理过后的字符串含有 class 和 style ，需要再次处理给到react
  const content = md
    .render(body)
    .replace(/<hr>/g, '<hr />')
    .replace(/<br>/g, '<br />')
    .replace(/class=/g, 'className=')
  return formatModule(imports, moduleJS.join('\n'), content, state)
}
