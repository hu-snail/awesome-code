import escapeHtml from 'escape-html'

let index = 0
export const headingPlugin = (md) => {
    md.renderer.rules.heading_open = (tokens, i, options, env, self) => {
        const token = tokens[i]
        index++
        tokens[i].attrJoin("id", "heading-" + index)
        tokens[i].attrJoin("class", "md-title")
        return self.renderToken(tokens, i, options)
        
    }
}