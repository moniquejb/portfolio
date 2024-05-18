<template>
  <div
    :class="`absolute shape ${small(shape.letter) ? 'h-4 md:h-7 lg:h-8 2xl:h-10' : 'h-8 md:h-14 lg:h-16 2xl:h-20'}  w-auto ${shape.className || 'cursor-grab'}`"
    :style="{
      left: shape.x + 'px',
      top: shape.y + 'px',
      zIndex: shape.zIndex
    }"
    v-html="letter.svgCode"
  ></div>
</template>

<script setup lang="ts">
import { getAlphabet } from '@/data/alphabet'
import { type LetterNames, type LetterSvg, type Shape } from '@/types/alphabet'

const props = defineProps<{
  shape: Shape
}>()

const letter: LetterSvg = getAlphabet(props.shape.letter, props.shape.letterColor, '100%')

function small(letter: LetterNames): boolean {
  const smallList: LetterNames[] = ['comma']
  if (smallList.includes(letter)) {
    return true
  }
  return false
}
</script>

<style scoped>
/* .shape {
  width: calc(20px + 3vw);
  height: calc(20px + 3vw);
} */
</style>
