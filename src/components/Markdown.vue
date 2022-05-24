<template>
  <article class="md-container" v-html="content"></article>
</template>

<script setup>
import {onMounted} from 'vue'

onMounted(() => {
  console.log(props.attributes, props.toc)
})
const props = defineProps({
  content: {
    type: String,
    required: true,
  },
  attributes: {
    type: Object
  },
  toc: {
    type: Object
  }
});
</script>