<template>
  <div class="preview-container">
    <h2>
      {{ component.__sourceCodeTitle }}
      <button @click="hideCode" v-if="codeVisible">隐藏代码</button>
      <button @click="showCode" v-else>查看代码</button>
    </h2>
    <div class="preview-container-component">
      <component :is="component" />
    </div>

    <div class="preview-container-code" v-if="codeVisible">
      <pre class="language-html" v-html="html" />
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from "vue";
import Prism from  "prismjs";
import "prismjs/themes/prism.css";
const props = defineProps({
  component: Object,
});
const html = computed(() => {
    console.log(props.component.__sourceCode, '---', Prism)
  return Prism.highlight(
    props.component.__sourceCode,
    Prism.languages.html,
    "html"
  );
});
const showCode = () => (codeVisible.value = true);
const hideCode = () => (codeVisible.value = false);
const codeVisible = ref(false);
</script>
<style scoped>
.preview-container {
  border: 1px solid #d9d9d9;
  margin: 32px 0px 32px;
  min-width: 300px;
}
h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid #d9d9d9;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
.preview-container-component {
    padding: 16px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
.preview-container-actions {
    padding: 8px 16px;
    border-top: 1px dashed #d9d9d9;
  }
.preview-container-code {
    padding: 8px 16px;
    border-top: 1px dashed #d9d9d9;
}
.preview-container-code > pre {
    line-height: 1.1;
    font-family: Consolas, "Courier New", Courier, monospace;
    margin: 0;
    background-color: rgb(250, 250, 250);
}
</style>