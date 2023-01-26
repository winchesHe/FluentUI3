<script setup lang="ts">
import { computed } from 'vue'
import { addUnit, isUndefined } from '@fluent-ui3/utils'
import { useNamespace } from '@fluent-ui3/hooks'
import type { CSSProperties } from 'vue'
import { iconProps } from './icon'
const props = defineProps(iconProps)
defineOptions({
  name: 'FLIcon',
})
const bem = useNamespace('icon')
const style = computed<CSSProperties>(() => {
  if (!props.size && !props.color)
    return {}

  return {
    'fontSize': isUndefined(props.size) ? undefined : addUnit(props.size),
    '--color': props.color,
  }
})
</script>

<template>
  <i :class="bem.b()" :style="style" v-bind="$attrs">
    <slot />
  </i>
</template>
