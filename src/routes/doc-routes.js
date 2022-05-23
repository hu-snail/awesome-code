import GetStarted from "markdown/get-started.md";
import Intro from "markdown/intro.md";
import ButtonDoc from "@/views/doc/button/index.vue";

const docMenus = {
  指南: [
    { path: "intro", component: Intro, name: "介绍" },
    { path: "get-started", component: GetStarted, name: "快速使用" },
  ],
  Javascript: [
    { path: "button", component: ButtonDoc, name: "日期时间 DataTime" }
  ]
}

let docRoutes = [];
for (let i in docMenus) {
  docRoutes = [...docRoutes, ...docMenus[i]];
}

export { docRoutes, docMenus };