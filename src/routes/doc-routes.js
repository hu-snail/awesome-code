import { h } from 'vue'
import Markdown from "@/components/Markdown.vue";

import  { html as GetStarted } from "../../markdown/get-started.md";
import { html as Intro } from "../../markdown/intro.md";
import ButtonDoc from "@/views/doc/button/index.vue";


const md = (string) => h(Markdown, { content: string, key: string });
const IntroDoc = md(Intro);
const GetStartedDoc = md(GetStarted);

const docMenus = {
  指南: [
    { path: "intro", component: IntroDoc, name: "介绍" },
    { path: "get-started", component: GetStartedDoc, name: "快速使用" },
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