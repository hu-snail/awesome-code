<template>
  <article class="md-container" v-html="content"></article>
</template>

<script setup>
const props = defineProps({
  content: {
    type: String,
    required: true,
  },
});
</script>