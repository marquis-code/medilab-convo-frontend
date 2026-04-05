<template>
  <component :is="iconComponent" v-if="iconComponent" v-bind="$attrs" />
  <span v-else class="text-xs text-red-500">[Icon: {{ name }}]</span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import * as LucideIcons from 'lucide-vue-next'

const props = defineProps<{
  name: string
}>()

const iconComponent = computed(() => {
  // Map heroicons:xxx to Lucide or similar
  const parts = props.name.split(':')
  const iconBaseName = parts[parts.length - 1]
  
  // Convert kebab-case or snake_case to PascalCase for Lucide
  const pascalName = iconBaseName
    .split(/[-_]/)
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')

  return (LucideIcons as any)[pascalName] || (LucideIcons as any)[props.name] || null
})
</script>
