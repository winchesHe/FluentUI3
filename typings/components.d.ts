import type Icon from '@fluent-ui3/components/icon'
// For this project development
import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    FLIcon: typeof Icon
  }
}

export {}
