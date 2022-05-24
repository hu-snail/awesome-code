import { marked } from 'marked';
import hljs from 'highlight.js'

function createRenderer (content) {
    const renderer = {
        heading: (text, level) => {
            const id = text.replace(/ /g, '-')
            return `<h${level} id="${id}" class="md-title">${text}</H${level}>`;
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

    }
    marked.use({renderer})
    return marked.parse(content)
}
export default createRenderer