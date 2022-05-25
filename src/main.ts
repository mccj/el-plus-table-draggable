import { createApp } from 'vue'
import ElementPlus from 'element-plus'

import App from './App.vue'

import 'element-plus/theme-chalk/index.css'
// import ElTableDraggable from './components/ElTableDraggable.vue'
// import ListViewer from "./components/ListViewer.vue"
// import Highlight from 'vue-highlight-component'
// // import hljs from 'highlight.js'
// import 'highlight.js/styles/codepen-embed.css'

// // hljs.registerLanguage('html', import('highlight.js/lib/languages/htmlbars'))



const app = createApp(App)
app.use(ElementPlus)
// app.component("CodeViewer", Highlight)
// app.component("ListViewer", ListViewer)
// app.component("ElTableDraggable", ElTableDraggable)

app.mount('#app')





