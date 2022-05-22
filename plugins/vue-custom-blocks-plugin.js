import path from "path";
import fs from "fs";
import { baseParse } from "@vue/compiler-core";
const vitePluginVue = {
  name: "block-title",
  transform(code, id) {
    if (
      !/\/src\/views\/doc\/.*\.preview\.vue/.test(id) ||
      !/vue&type=block-title/.test(id)
    ) {
      return;
    }
    let path = `.${id.match(/\/src\/views\/doc\/.*\.preview\.vue/)[0]}`;
    console.log(path, 'path')
    
    const file = fs.readFileSync(path).toString();
    const parsed = baseParse(file).children.find((n) => n.tag === "block-title");
    const title = parsed.children[0].content;
    const main = file.split(parsed.loc.source).join("").trim();

    return `export default function (Component) {
      Component.__sourceCode = ${JSON.stringify(main)}
      Component.__sourceCodeTitle = ${JSON.stringify(title)}
    }`.trim();
  },
};

export default vitePluginVue;