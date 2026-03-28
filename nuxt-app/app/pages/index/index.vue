<script setup lang="ts">
/**
 * @description 配置不同的布局方案以及中间件
 * @param title 页面标题
 * @param layout 页面布局方案
 * @param middleware 使用的中间件
 definePageMeta({
 title: 'Home',
 layout: 'admin',
 middleware: ['auth']
 }) */
</script>

<template>
  <div>
    <IndexHero />
    <IndexSection />
  </div>
</template>
