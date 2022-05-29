import { createApp } from 'vue'
import ElementPlus from 'element-plus'

import App from './App.vue'

import 'element-plus/theme-chalk/index.css'
import ElTableDraggable from './components/ElTableDraggable.vue'
import ListViewer from "./components/ListViewer.vue"
import CodeViewer from "./components/CodeViewer.vue"

const app = createApp(App)
app.use(ElementPlus)
app.component("CodeViewer", CodeViewer)
app.component("ListViewer", ListViewer)
app.component("ElTableDraggable", ElTableDraggable)

app.mount('#app')