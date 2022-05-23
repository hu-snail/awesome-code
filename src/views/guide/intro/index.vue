<template>
 <IntroComp/>
</template>

<script setup>
import {  watchEffect } from 'vue';
import IntroComp from 'markdown/intro.md'

watchEffect(() => {
    // console.log(html, '===')
})
</script>

<style>

</style>