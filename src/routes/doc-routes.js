import GetStarted from "@/views/guide/get-started/index.vue";
import Intro from "@/views/guide/intro/index.vue";
import ButtonDoc from "@/views/doc/button/index.vue";

const docMenus = {
  文档: [
    { path: "intro", component: Intro, name: "介绍" },
    { path: "get-started", component: GetStarted, name: "快速使用" },
  ],
  通用组件: [
    { path: "button", component: ButtonDoc, name: "按钮 Button" }
  ]
}

let docRoutes = [];
for (let i in docMenus) {
  docRoutes = [...docRoutes, ...docMenus[i]];
}

export { docRoutes, docMenus };