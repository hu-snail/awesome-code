<template>
    <aside class="aside-bar">
        <div class="menu">
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
        </div>
    </aside>
</template>

<script setup>
import { docMenus } from "@/routes/doc-routes.js";
</script>

<style lang="scss" scoped>
.aside-bar {
    width: 270px;
    padding: 16px;
    transition: all 250ms ease;
    overflow-y: auto;
    border-right: 1px solid var(--border-color);
    .menu,
      .menu-group {
        width: 100%;
      }

      .menu-group-title,
      .menu-item {
        display: flex;
        align-items: center;
        width: 100%;
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

        &:hover {
          color: #18a058 !important;
        }
      }

      .router-link-exact-active {
        color: #18a058 !important;
        background-color: #e7f5ee;
        border-radius: 3px;
      }
}
</style>