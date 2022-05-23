<template>
    <div class="app-container">
        <HeaderCompontent />
        <div class="main-wrapper">
            <SideBar/>
            <div class="doc-wrapper">
                <Main />
                <div class="anchor-content">
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import HeaderCompontent from './navbar/index.vue'
import SideBar from './sidebar/index.vue'
import Main from './main/index.vue'
</script>

<style lang="scss" scoped>
.app-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    .main-wrapper {
        display: flex;
        position: relative;
        top: var(--header-height);
        .doc-wrapper{
            display: flex;
            flex-wrap: nowrap;
            padding: 32px 24px 56px 56px;
            flex: 1;
        }
        .anchor-content {
            width: 128px;
        }
    }
}
</style>