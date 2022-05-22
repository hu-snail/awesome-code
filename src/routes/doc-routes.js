import { h } from "vue";
import Markdown from "@/components/Markdown.vue";

import { html as GetStarted } from "../../markdown/get-started.md";
import { html as Install } from "../../markdown/install.md";
import { html as Intro } from "../../markdown/intro.md";

const md = (string) => h(Markdown, { content: string, key: string });
const IntroDoc = md(Intro);
const GetStartedDoc = md(GetStarted);
const InstallDoc = md(Install);

import ButtonDoc from "@/views/doc/button/index.vue";

const docMenus = {
  文档: [
    { path: "intro", component: IntroDoc, name: "介绍" },
    { path: "install", component: InstallDoc, name: "安装" },
    { path: "get-started", component: GetStartedDoc, name: "快速使用" },
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