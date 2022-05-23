<template>
 <GetStartComp/>
</template>

<script setup>
import {  watchEffect } from 'vue';
import GetStartComp from 'markdown/get-started.md'

watchEffect(() => {
    // console.log(description, '===')
})
</script>

<style>

</style>