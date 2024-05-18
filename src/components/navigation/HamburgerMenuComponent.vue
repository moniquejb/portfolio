<template>
  <button
    type="button"
    class="relative inline-flex items-center justify-center rounded-md p-2"
    aria-controls="mobile-menu"
    aria-expanded="false"
  >
    <svg
      :class="{ hidden: visible, block: !visible }"
      class="h-9 w-9"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 366 284"
    >
      <g>
        <g>
          <path
            :class="outlineFillClass"
            d="M348,41H18C8.1,41,0,32.9,0,23v26c0,9.9,8.1,18,18,18h330c9.9,0,18-8.1,18-18v-26c0,9.9-8.1,18-18,18Z"
          />
          <path
            :class="openFillClass"
            d="M348,0H18C8.1,0,0,8.1,0,18v5h0c0,9.9,8.1,18,18,18h330c9.9,0,18-8.1,18-18h0v-5c0-9.9-8.1-18-18-18Z"
          />
          <path
            :class="outlineFillClass"
            d="M348,149.5H18c-9.9,0-18-8.1-18-18v26c0,9.9,8.1,18,18,18h330c9.9,0,18-8.1,18-18v-26c0,9.9-8.1,18-18,18Z"
          />
          <path
            :class="openFillClass"
            d="M348,108.5H18c-9.9,0-18,8.1-18,18v5h0c0,9.9,8.1,18,18,18h330c9.9,0,18-8.1,18-18h0v-5c0-9.9-8.1-18-18-18Z"
          />
          <path
            :class="outlineFillClass"
            d="M348,258H18c-9.9,0-18-8.1-18-18v26c0,9.9,8.1,18,18,18h330c9.9,0,18-8.1,18-18v-26c0,9.9-8.1,18-18,18Z"
          />
          <path
            :class="openFillClass"
            d="M348,217H18c-9.9,0-18,8.1-18,18v5h0c0,9.9,8.1,18,18,18h330c9.9,0,18-8.1,18-18h0v-5c0-9.9-8.1-18-18-18Z"
          />
        </g>
      </g>
    </svg>
    <svg
      :class="{ hidden: !visible, block: visible }"
      class="h-8 w-8"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 272.83 301.84"
    >
      <g>
        <g>
          <path
            :class="outlineFillClass"
            d="M5.25,34.24c-2.45-2.45-4.03-5.46-4.76-8.63l.25,19.76c-1.81,6.13-.3,13.05,4.51,17.86l87.68,87.68,14.5-14.5L5.25,34.24Z"
          />
          <path
            :class="outlineFillClass"
            d="M272.12,45.48l.25-19.97c-.72,3.21-2.31,6.26-4.79,8.74l-102.18,102.18,14.5,14.5,87.68-87.68c4.79-4.79,6.3-11.66,4.53-17.77Z"
          />
          <path :class="outlineFillClass" d="M272.8,250.19h-.01c0,.09,0,.16.01.23v-.23Z" />
          <path
            :class="outlineFillClass"
            d="M264.05,267.59c-7,7-18.46,7-25.46,0l-102.18-102.18-102.18,102.18c-7,7-18.46,7-25.46,0l-3.54-3.54c-2.5-2.5-4.09-5.57-4.81-8.8l.26,20.1c-1.74,6.09-.22,12.93,4.55,17.71l3.54,3.54c7,7,18.46,7,25.46,0l102.18-102.18,102.18,102.18c7,7,18.46,7,25.46,0l3.54-3.54c4.43-4.43,6.05-10.64,4.87-16.37l.3-23.79c-.35,4.08-2.07,8.06-5.18,11.17l-3.54,3.54Z"
          />
          <path
            :class="closedFillClass"
            d="M267.59,34.24c2.48-2.48,4.07-5.53,4.79-8.74,1.31-5.83-.27-12.2-4.79-16.72l-3.54-3.54c-7-7-18.46-7-25.46,0l-102.18,102.18L34.24,5.25C27.24-1.75,15.79-1.75,8.79,5.25l-3.54,3.54C.7,13.33-.87,19.75.49,25.61c.73,3.17,2.31,6.17,4.76,8.63l102.18,102.18-14.5,14.5L5.25,238.6c-4.5,4.5-6.09,10.84-4.81,16.65.71,3.23,2.3,6.3,4.81,8.8l3.54,3.54c7,7,18.46,7,25.46,0l102.18-102.18,102.18,102.18c7,7,18.46,7,25.46,0l3.54-3.54c3.1-3.1,4.83-7.09,5.18-11.17.07-.82.07-1.64.03-2.46,0-.07,0-.15-.01-.22-.26-4.23-1.98-8.39-5.2-11.61l-87.68-87.68-14.5-14.5,102.18-102.18Z"
          />
        </g>
      </g>
    </svg>
  </button>
</template>

<script setup lang="ts">
import type { CustomFillColourName } from '@/types'

interface Props {
  visible: boolean
  outlineFillClass?: CustomFillColourName
  openFillClass?: CustomFillColourName
  closedFillClass?: CustomFillColourName
}

withDefaults(defineProps<Props>(), {
  visible: false,
  outlineFillClass: 'fill-dark',
  openFillClass: 'fill-secondary',
  closedFillClass: 'fill-tertiary'
})
</script>

<style lang="css" scoped></style>
