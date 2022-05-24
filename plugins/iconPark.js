import { Edit, Search, Home, Code, CodeBrackets } from '@icon-park/vue-next'

export default {
  install(app) {
    app.component('IconEdit', Edit)
    app.component('IconSearch', Search)
    app.component('IconHome', Home)
    app.component('IconCode', Code)
    app.component('IconCodeBrackets', CodeBrackets)
  }
}