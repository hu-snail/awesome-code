import { marked } from 'marked';
import hljs from 'highlight.js'

function createRenderer (content) {
    let headingIndex = 0
    const renderer = {
        heading: (text, level) => {
            const id = text.replace(/ /g, '-')
            headingIndex++
            return `<h${level} id="heading-${headingIndex}" class="md-title">${text}</h${level}>`;
        },
        code: (code, language) => {
          if (!language) language = 'shell'
          if (language.startsWith('__')) {
            language = language.replace('__', '')
          }
          const isLanguageValid = !!(language && hljs.getLanguage(language))
          if (!isLanguageValid) {
            throw new Error(
              `MdRendererError: ${language} is not valid for code - ${code}`
            )
          }
          const highlighted = hljs.highlight(code, { language }).value
          const content = `<code class="code-card"><span class="lang">复制</span><pre>${highlighted}</pre></code>`
          return  content
        },
        text: (text) => {
          if (text.indexOf(':::') !== -1) {
            if (hasCustomBlock(text)) {
              return renderCustomBlock(text)
            }
            else return ''
          } else return `<p>${text}</p>`
        },

    }
    marked.use({renderer})
    return marked.parse(content)
}

function hasCustomBlock(text) {
  const isTip = text.indexOf('::: tip') !== -1
  const isWarning = text.indexOf('::: warning') !== -1
  const isDaner = text.indexOf('::: danger') !== -1
  const isDefault= text.indexOf('::: default') !== -1
  return isTip | isWarning | isDaner | isDefault 
}

function renderCustomBlock(text) {
  const textArr =  text.split('\n')
  const tipArr = textArr[0].split(' ')
  const type = tipArr[1]
  const tip = tipArr[2]
  const pTextArr = text.split(':::')
  const reg = `${type} ${tip}`
  const pText = pTextArr[1].replace(reg, '')
  return `
    <div class="${type} custom-block">
      <p class="custom-block-title">${tip}</p>
      <p>
      ${pText}
      </p>
    </div>
  `
}
export default createRenderer