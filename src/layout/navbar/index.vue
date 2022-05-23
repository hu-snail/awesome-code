<template>
    <header class="navbar">
        <div class="navbar-wrapper">
            <div class="header-wrapper">
                <div class="logo-container">
                    <h1 class="logo-title">LOGO</h1>
                </div>
                <div class="right-panel">
                    <div class="item">指南</div>
                    <div class="item">Javascript</div>
                    <div class="item">Vue</div>
                    <div class="search-box">
                        <box-icon class="icon" name='search' color="#666"></box-icon>
                        <input placeholder="搜索" type="text" class="search-input">
                    </div>
                   
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.navbar {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: var(--nav-z-index);
    &-wrapper {
        background-color: var(--bg-color);
        color: var(--text-color);
        transition: border-color var(--el-transition-duration),background-color var(--el-transition-duration-fast);
        position: relative;
        border-bottom: 1px solid var(--border-color);
        padding: 0 12px 0 24px;
        height: var(--header-height);
        top: 0;
        .header-wrapper {
            display: flex;
            justify-content: space-between;
            margin: 0 auto;
            .logo-container {
                display: flex;
                align-items: center;
                height: var(--header-height);
            }
            .right-panel {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                flex-grow: 1;
                .search-box {
                    position: relative;
                    .icon {
                        position: absolute;
                        right: 10px;
                        top: 6px;
                    }
                    .search-input {
                        background-color: var(--bg-color-page);
                        border: 0;
                        outline-style: none;
                        min-width: 180px;
                        height: var(--input-height);
                        padding: 0;
                        padding: 10px 20px;
                        box-sizing: border-box;
                        font-family: "Microsoft soft";
                        border-radius: var(--border-radius-round);
                        &:focus, &:hover {
                            background-color: var(--bg-color-page);
                            outline: 0;
                            -webkit-box-shadow: var(--docsearch-searchbox-shadow);
                            box-shadow: var(--docsearch-searchbox-shadow)
                        }
                    }
                }
                .item {
                    padding: 0 15px;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>