<template>
  <div class="group/button relative cursor-pointer inline-block">
    <!-- invisible to keep the space of the absolute buttons -->
    <button
      class="invisible whitespace-nowrap border-2 rounded-full px-4 py-1 font-semibold select-none"
      :class="`${className} ${textSizeClass} ${buttonOutlineClass[borderColor]}`"
    >
      <slot />
    </button>
    <!-- button visually seen -->
    <div
      class="transition-colors whitespace-nowrap absolute top-0 z-10 left-1/2 -translate-x-1/2 border-2 rounded-full px-4 py-1 font-semibold select-none"
      :class="`${className} ${bgClass} ${textClass} ${hoverClass} ${textSizeClass} ${buttonOutlineClass[borderColor]}`"
    >
      <slot />
    </div>
    <!-- button rendered for 3D effect -->
    <div
      class="transition-colors whitespace-nowrap absolute top-[2px] z-0 left-1/2 -translate-x-1/2 border-2 rounded-full px-4 py-1 font-semibold select-none"
      :class="`${className} ${textSizeClass} ${buttonShadowClass[borderColor]}`"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  className?: string
  bgClass?: string
  textClass?: string
  hoverClass?: string
  textSizeClass?: string
  borderColor?: 'gray' | 'dark'
}

const props = withDefaults(defineProps<Props>(), {
  className: '',
  bgClass: 'bg-tertiary',
  textClass: 'text-dark',
  hoverClass: 'sm:group-hover/button:bg-secondary',
  textSizeClass: 'text-base lg:text-xl xl:text-lg 2xl:text-xl',
  borderColor: 'dark'
})

const buttonOutlineClass: Record<typeof props.borderColor, string> = {
  gray: 'border-gray-500 sm:group-hover/button:border-dark',
  dark: 'border-dark'
}
const buttonShadowClass: Record<typeof props.borderColor, string> = {
  gray: 'border-gray-500 bg-gray-500 text-gray-500 sm:group-hover/button:border-dark sm:group-hover/button:bg-dark sm:group-hover/button:text-dark',
  dark: 'border-dark bg-dark text-dark'
}
</script>
