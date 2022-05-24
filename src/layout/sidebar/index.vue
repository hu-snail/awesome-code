<template>
    <aside class="aside-bar">
      <div class="aside-bar-card">
        <div class="card-item">
          <div class="logo">
            <h3>LOGO</h3>
          </div>
        </div>
        <div class="card-item">
          <div class="card-item-content">
            <icon-home color="#fff"></icon-home >
            <span class="card-item-title">首页</span>
          </div>
        </div>
        <div class="card-item">
          <div class="card-item-content active">
            <icon-code color="#fff"></icon-code>
            <span class="card-item-title">组件</span>
          </div>
        </div>
        <div class="card-item">
          <div class="card-item-content">
            <icon-code-brackets color="#fff"></icon-code-brackets>
            <span class="card-item-title">Javascript</span>
          </div>
        </div>
      </div>
      <div class="aside-bar-card-content">
        <div class="head-wrapper">
          <h2 class="title">AWESOME CODE</h2>
        </div>
        <div class="menu-list">
          <div class="menu-group" v-for="(itemx, index) in docMenus" :key="index">
             <span class="menu-group-title text-overflow">
              {{ index }}
            </span>
            <router-link
              v-for="(itemy, indey) in itemx"
              :key="indey"
              class="menu-item text-overflow"
              :to="`/doc/${itemy.path}`"
              >{{ itemy.name }}</router-link
            >
          </div>
        </div>
      </div>
        <!-- <div class="menu">
          <div
            class="menu-group"
            v-for="(itemx, index) in docMenus"
            :key="index"
          >
            <span class="menu-group-title text-overflow">
              {{ index }}
            </span>
            <router-link
              v-for="(itemy, indey) in itemx"
              :key="indey"
              class="menu-item text-overflow"
              :to="`/doc/${itemy.path}`"
              >{{ itemy.name }}</router-link
            >
          </div>
        </div> -->
    </aside>
</template>

<script setup>
import { docMenus } from "@/routes/doc-routes.js";
</script>

<style lang="scss" scoped>
.aside-bar {
  display: flex;
  position: fixed;
  height: 100%;
  transition: all 250ms ease;
  overflow-y: auto;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  &-card {
    width: 100px;
    height: 100%;
    background-color: #282c34;
    .card-item {
      height: 64px;
      .logo{
        display: flex;
        justify-content: center;
        color: #fff;
      }
      &-content{
        width: 94px;
        height: 54px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        text-align: center;
        margin: 0 auto;
        color: #fff;
        justify-content: center;
        font-size: 14px;
        cursor: pointer;
        &.active {
          background-color: var(--color-primary);
        }
        &:hover {
             background-color: var(--color-primary);
        }
      } 
    }
    &-content {
      width: 220px;
      transition: all .3s cubic-bezier(.645,.045,.355,1),border 0s,color .1s,font-size 0s;
      .head-wrapper {
        border-bottom: 1px dashed var(--border-color);
        height: 60px;
        display: flex;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
        .title {
          font-size: 16px;
          font-weight: 450;
          margin: 0;
        }
      }
      .menu-list {
        padding: 10px;
        .menu-group {
        width: 100%;
      }
      .menu-group-title,
      .menu-item {
        display: flex;
        align-items: center;
        width: 100%;
        box-sizing: border-box;
      }
      .menu-group-title {
        height: 36px;
        padding-left: 32px;
        font-size: 13px;
        color: var(--text-color);
        overflow: hidden;
        box-sizing: border-box;
        &:hover {
          cursor: default;
        }
      }
      .menu-item {
        height: 44px;
        padding-left: 48px;
        color: var(--text-color);
        font-size: 14px;
        margin: 5px 0;
        &:hover {
          color: var(--color-primary);
        }
      }
      .router-link-exact-active {
         color: var(--color-primary);
        background-color: #e7f5ee;
        border-radius: 3px;
      }
      }
    }
  }
}
</style>