<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Docs',
    to: '/docs/getting-started',
    active: route.path.startsWith('/docs/getting-started')
  },
  {
    label: 'Components',
    to: '/docs/components',
    active: route.path.startsWith('/docs/components')
  },
  {
    label: 'Figma',
    to: 'https://go.nuxt.com/figma-ui',
    target: '_blank'
  },
  {
    label: 'Releases',
    to: 'https://github.com/nuxt/ui/releases',
    target: '_blank'
  }
])
</script>

<template>
  <UHeader>
    <template #left>
      <UButton icon="i-lucide-airplay" />
      <div class="font-bold">
        啊坤编程导航
      </div>
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UButton variant="solid">
        登陆
      </UButton>
      <UButton variant="outline">
        注册
      </UButton>
    </template>
  </UHeader>
</template>
