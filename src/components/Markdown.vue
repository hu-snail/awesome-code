<template>
  <div class="md-wrapper">
    <div class="md-container" @scroll="handleScroll">
      <h1 class="md-title">{{attributes.title}}</h1>
      <img v-if="attributes && attributes.coverImg" :src="attributes.coverImg" :alt="attributes.title" class="cover-img"/>
      <article class="md-body" v-html="content"></article>
    </div>
    <div class="anchor-content">
      <div class="sticky-box">
        <h4 class="top-title">目录</h4>
        <div class="anchor-box">
          <div
          class="anchor-item"
          v-for="(item, index) in toc"
          :key="index"
          :class="getClassName(item, index)"
          >
          <a class="anchor-item-title" :href="`#heading-${index + 1}`">
            <span v-html="decode(item.content)"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref, nextTick} from 'vue'
import { decode } from 'html-entities';

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

const activeTitle = ref('#heading-1')
const getClassName = (item, index) => {
  return `anchor-item-${item.level} ${activeTitle.value === '#heading-' + (index + 1) ? 'active' : ''}`
}

const handleScroll = (e) => {
  console.log(e)
}

</script>

<style lang="scss" scoped>
.md-wrapper {
  display: flex;
  justify-content: center;
  .md-container {
    color: var(--text-color);
    max-width: 740px;
    background-color: var(--bg-color);
    padding: 15px 20px;
    border-radius: 10px;
    overflow-y: scroll;
    .cover-img {
      width: 100%;
      border-radius: 8px;
      max-height: calc(680px / 1.78);
      object-fit: cover;
    }
  }
  .anchor-content {
     width: 240px;
    box-sizing: border-box;
    font-size: 14px;
    .sticky-box {
      width: 240px;
      border-radius: 10px;
      position: fixed;
      margin-left: 15px;
      top: 90px;
      bottom: 20px;
      background-color: var(--bg-color);
      overflow: hidden;
      .anchor-box {
        height: calc(100vh - 200px);
        overflow-y: auto;
      }
    }
    .top-title {
      padding: 10px;
      border-bottom: 1px solid #ddd;
      color: var(--text-color)
    }
    .anchor-item {
      padding: 10px 10px;
      box-sizing: border-box;
      border-left: 3px solid transparent;
      &:hover {
        background-color: var(--bg-color-page);
        border-left: 3px solid var(--color-primary);
      }
      &.active {
        .anchor-item-title {
          color: var(--color-primary);
        }
        background-color: var(--bg-color-page);
        border-left: 3px solid var(--color-primary);
      }
      &-title {
        color: var(--text-color)
      }
      &-3 {
        padding-left: 26px;
      }
      &-4 {
        padding-left: 52px;
      }

    }
    
  }
}
</style>