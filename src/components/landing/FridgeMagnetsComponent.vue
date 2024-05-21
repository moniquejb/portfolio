<template>
  <div class="h-full w-full">
    <div class="relative h-full w-full rounded-3xl" ref="area" :key="`area-${areaKey}`">
      <div
        v-if="!firstDrag"
        class="z-50 opacity-0 absolute bottom-8 xs:bottom-12 sm:bottom-10 left-1/2 -translate-x-1/2 w-10 sm:w-14 xl:w-16 animate-fadeInOut"
      >
        <SvgComponent
          className="w-full"
          name="drag"
          innerClass="fill-gray-300"
          outlineClass="fill-gray-500"
        />
      </div>
      <div class="grid grid-cols-8 grid-rows-12 h-full">
        <div
          class="border-2 border-gray-300 rounded-tr-3xl border-dashed border-b-0 border-l-0 col-span-3 sm:col-span-2 lg:col-span-1 row-span-2 lg:row-span-3 row-start-11 lg:row-start-10 flex-center-col h-full text-center select-none"
          ref="scrap"
        >
          <SvgComponent
            className="w-4 xs:w-5 sm:w-7 xl:w-8"
            name="trash"
            innerClass="fill-gray-300"
            outlineClass="fill-gray-500"
          />
          <div class="mt-1 lg:mt-2 text-gray-500 text-[10px]/[1.3] xs:text-xs xl:text-sm">
            Drag here <br class="xs:hidden lg:block" />to discard
          </div>
        </div>
        <div
          class="border-2 border-gray-300 rounded-tl-3xl border-dashed border-b-0 border-r-0 col-span-3 sm:col-span-2 lg:col-span-1 row-span-2 lg:row-span-3 row-start-11 lg:row-start-10 col-start-6 sm:col-start-7 lg:col-start-8 h-full flex-center-col text-center select-none"
          ref="add"
        >
          <span class="group flex-center-col text-center cursor-pointer" @click="addShape">
            <SvgComponent
              className="w-4 xs:w-5 sm:w-7 xl:w-9"
              name="add"
              innerClass="fill-gray-300 sm:group-hover:fill-tertiary"
              outlineClass="fill-gray-500 sm:group-hover:fill-dark"
            />
            <div
              class="mt-1 lg:mt-2 text-gray-500 sm:group-hover:text-dark text-[10px]/[1.3] xs:text-xs xl:text-sm"
            >
              Click here <br class="xs:hidden lg:block" />to add
            </div></span
          >
        </div>
      </div>
      <template v-for="(shape, index) in shapes" :key="index">
        <LetterComponent
          v-if="!shape.isRemoved"
          :id="`shape-${shape.id}`"
          :shape="shape"
          @mousedown="startDrag($event, shape, index)"
          @touchstart="startDrag($event, shape, index)"
        />
      </template>
    </div>
    <div class="absolute top-10 right-5 sm:right-8">
      <div class="relative group cursor-pointer" @click="setInitialBoard">
        <div
          class="z-[9999] absolute top-0 bg-white flex-center w-10 sm:w-16 h-10 sm:h-20 rounded-lg border-2 sm:border-2 border-dark flex-center-col text-center select-none"
        >
          <SvgComponent
            className="w-5 xs:w-6 xl:w-7"
            name="refresh"
            innerClass="fill-gray-300 sm:group-hover:fill-secondary"
            outlineClass="fill-gray-500 sm:group-hover:fill-dark"
          />
          <div class="mt-1 text-gray-500 sm:group-hover:text-dark text-xs hidden sm:block">
            Restart
          </div>
        </div>
        <div
          class="z-[9998] absolute bg-dark top-1 flex-center w-10 sm:w-16 h-10 sm:h-20 rounded-lg border-2 sm:border-2 border-dark"
        ></div>
      </div>
    </div>
    <div class="absolute top-24 sm:top-36 right-5 sm:right-8">
      <div class="relative group cursor-pointer" @click="clearBoard">
        <div
          class="z-[9999] absolute top-0 bg-white flex-center w-10 sm:w-16 h-10 sm:h-20 rounded-lg border-2 sm:border-2 border-dark flex-center-col text-center select-none"
        >
          <SvgComponent
            className="w-5 xs:w-6 xl:w-7"
            name="clear"
            innerClass="fill-gray-300 sm:group-hover:fill-primary"
            outlineClass="fill-gray-500 sm:group-hover:fill-dark"
          />
          <div class="mt-1 text-gray-500 sm:group-hover:text-dark text-xs hidden sm:block">
            Clear
          </div>
        </div>
        <div
          class="z-[9998] absolute bg-dark top-1 flex-center w-10 sm:w-16 h-10 sm:h-20 rounded-lg border-2 sm:border-2 border-dark"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LetterComponent from '@/components/landing/LetterComponent.vue'
import { colours } from '@/data/alphabet'
import { type Shape as ShapeType } from '@/types/alphabet'
import { generateGUID } from '@/utilities'
import { getRandomColour, getRandomLetter } from '@/utilities/albhabet'
import { ref, onBeforeUnmount, onMounted, computed } from 'vue'
import SvgComponent from '@/components/misc/SvgComponent.vue'

let shapes = ref<ShapeType[]>([])
const area = ref<HTMLDivElement | null>(null)
const scrap = ref<HTMLDivElement | null>(null)
const add = ref<HTMLDivElement | null>(null)
let selectedShapeIndex: number | null = null
let offsetX = 0
let offsetY = 0
const speedFactor = 1 // Adjust this value to control the speed
let highestZIndex = ref(1)
// const activeShapes = computed(() => {
//   return shapes.value.filter((shape) => !shape.isRemoved).length
// })
const firstDrag = ref(false)
const windowHeight = ref(window.innerHeight)
const windowWidth = ref(window.innerWidth)
const areaKey = ref(1)

onMounted(() => {
  setInitialBoard()

  window.addEventListener('resize', setInitialBoard)
})

const setInitialBoard = () => {
  if (area.value) {
    areaKey.value++
    highestZIndex.value = 1
    windowHeight.value = window.innerHeight
    windowWidth.value = window.innerWidth
    const xlScreen = window.matchMedia('(min-width: 1280px)').matches
    const smScreen = window.matchMedia('(min-width: 640px) and (max-width: 1279.98px)').matches
    const multiplier = xlScreen ? 0.96 : smScreen ? 1 : 1.5
    const positionerX = xlScreen ? windowWidth.value * 0.1 : smScreen ? windowWidth.value * 0.15 : 0
    const positionerY = xlScreen
      ? handleMinHeight(windowHeight.value, 'aboveXl') * 0.08
      : smScreen
        ? handleMinHeight(windowHeight.value, 'belowXl') * 0.07
        : handleMinHeight(windowHeight.value, 'belowXl') * 0.06
    const areaWidth = area.value?.clientWidth
    const areaHeight = area.value?.clientHeight
    shapes.value = [
      {
        id: generateGUID(),
        x: areaWidth * 0.1 * multiplier + positionerX,
        y: areaHeight * 0.05 + positionerY,
        letter: 'H',
        letterColor: colours.primary,
        zIndex: highestZIndex.value
      },
      {
        id: generateGUID(),
        x: areaWidth * 0.18 * multiplier + positionerX,
        y: areaHeight * 0.07 + positionerY,
        letter: 'E',
        letterColor: colours.secondary,
        zIndex: highestZIndex.value
      },
      {
        id: generateGUID(),
        x: areaWidth * 0.25 * multiplier + positionerX,
        y: areaHeight * 0.07 + positionerY,
        letter: 'Y',
        letterColor: colours.tertiary,
        zIndex: highestZIndex.value
      },
      {
        id: generateGUID(),
        x: areaWidth * 0.32 * multiplier + positionerX,
        y: areaHeight * (!xlScreen && !smScreen ? 0.13 : 0.15) + positionerY,
        letter: 'comma',
        letterColor: colours.primary,
        zIndex: highestZIndex.value
      },
      {
        id: generateGUID(),
        x: areaWidth * 0.43 * multiplier + positionerX,
        y: areaHeight * 0.05 + positionerY,
        letter: 'I',
        letterColor: colours.secondary,
        zIndex: highestZIndex.value
      },
      {
        id: generateGUID(),
        x: areaWidth * 0.48 * multiplier + positionerX,
        y: areaHeight * 0.06 + positionerY,
        letter: 'M',
        letterColor: colours.tertiary,
        zIndex: highestZIndex.value
      },
      {
        id: generateGUID(),
        x: areaWidth * 0.04 * multiplier + positionerX,
        y: areaHeight * 0.32 + positionerY,
        letter: 'M',
        letterColor: colours.secondary,
        zIndex: highestZIndex.value
      },
      {
        id: generateGUID(),
        x: areaWidth * 0.14 * multiplier + positionerX,
        y: areaHeight * 0.35 + positionerY,
        letter: 'O',
        letterColor: colours.tertiary,
        zIndex: highestZIndex.value
      },
      {
        id: generateGUID(),
        x: areaWidth * 0.23 * multiplier + positionerX,
        y: areaHeight * 0.33 + positionerY,
        letter: 'N',
        letterColor: colours.primary,
        zIndex: highestZIndex.value
      },
      {
        id: generateGUID(),
        x: areaWidth * 0.33 * multiplier + positionerX,
        y: areaHeight * 0.34 + positionerY,
        letter: 'I',
        letterColor: colours.secondary,
        zIndex: highestZIndex.value
      },
      {
        id: generateGUID(),
        x: areaWidth * 0.39 * multiplier + positionerX,
        y: areaHeight * 0.36 + positionerY,
        letter: 'Q',
        letterColor: colours.tertiary,
        zIndex: highestZIndex.value
      },
      {
        id: generateGUID(),
        x: areaWidth * 0.49 * multiplier + positionerX,
        y: areaHeight * 0.38 + positionerY,
        letter: 'U',
        letterColor: colours.primary,
        zIndex: highestZIndex.value
      },
      {
        id: generateGUID(),
        x: areaWidth * 0.575 * multiplier + positionerX,
        y: areaHeight * 0.35 + positionerY,
        letter: 'E',
        letterColor: colours.secondary,
        zIndex: highestZIndex.value
      },
      {
        id: generateGUID(),
        x: areaWidth * 0.3 * multiplier + positionerX,
        y: areaHeight * 0.56 + positionerY,
        letter: 'smiley',
        letterColor: colours.tertiary,
        zIndex: highestZIndex.value
      }
    ]
  }
}

const startDrag = (e: MouseEvent | TouchEvent, shape: ShapeType, index: number) => {
  e.preventDefault()
  if (!firstDrag.value) {
    firstDrag.value = true
  }
  const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
  const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY
  selectedShapeIndex = index
  offsetX = clientX - shape.x
  offsetY = clientY - shape.y
  shape.isDragging = true // set the dragging flag
  shape.className = 'cursor-grabbing' // set the dragging cursor
  highestZIndex.value++ // increment z-index counter to place new shape on top
  shape.zIndex = highestZIndex.value

  window.addEventListener('mousemove', handleDrag)
  window.addEventListener('touchmove', handleDrag)
  window.addEventListener('mouseup', stopDrag)
  window.addEventListener('touchend', stopDrag)
}

const handleDrag = (e: MouseEvent | TouchEvent) => {
  e.preventDefault()
  if (selectedShapeIndex !== null && area.value && scrap.value && add.value) {
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY
    const shape = shapes.value[selectedShapeIndex] // Get the dragged shape by index in array

    const distanceX = (clientX - offsetX) * speedFactor // apply speed factor to horizontal distance
    const distanceY = (clientY - offsetY) * speedFactor // apply speed factor to vertical distance

    const shapeContainer = document.getElementById(`shape-${shape.id}`)

    // Check if the new position is within the boundaries of the area
    const areaWidth = area.value.clientWidth
    const areaHeight = area.value.clientHeight

    // Check if the new position is within the boundaries of the scrap area
    const scrapRect = scrap.value.getBoundingClientRect()
    const inScrap =
      clientX >= scrapRect.left &&
      clientX <= scrapRect.right &&
      clientY >= scrapRect.top &&
      clientY <= scrapRect.bottom

    // Check if the new position is within the boundaries of the add area
    const addRect = add.value.getBoundingClientRect()
    const inAdd =
      clientX >= addRect.left &&
      clientX <= addRect.right &&
      clientY >= addRect.top &&
      clientY <= addRect.bottom

    if (inScrap) {
      // If the shape is within scrap area, mark it as removed
      removeShape(selectedShapeIndex)
    } else {
      if (shapeContainer) {
        const shapeHeight = shapeContainer.clientHeight
        const shapeWidth = shapeContainer.clientWidth
        // Update shape position with adjusted distance if within area boundaries
        if (
          distanceX >= 0 &&
          distanceX <= areaWidth - shapeWidth &&
          distanceY >= 0 &&
          distanceY <= areaHeight - shapeHeight
        ) {
          shape.x = distanceX
          shape.y = distanceY
        }
      }
    }
  }
}

const stopDrag = () => {
  window.removeEventListener('mousemove', handleDrag)
  window.removeEventListener('touchmove', handleDrag)
  window.removeEventListener('mouseup', stopDrag)
  window.removeEventListener('touchend', stopDrag)
  if (selectedShapeIndex !== null) {
    shapes.value[selectedShapeIndex].isDragging = false // Reset the dragging flag
    shapes.value[selectedShapeIndex].className = 'cursor-grab'
  }
  selectedShapeIndex = null
}

const addShape = () => {
  if (add.value && area.value) {
    const addRect = add.value.getBoundingClientRect()
    const areaRect = area.value.getBoundingClientRect()

    // Calculate the center X coordinate of the add area considering scrolling offsets
    let centerX = addRect.left - areaRect.left + addRect.width / 2
    // Calculate the center Y coordinate of the add area considering scrolling offsets
    let centerY = addRect.top - areaRect.top + addRect.height / 2

    highestZIndex.value++

    // Create a new shape with desiprimary properties
    const newShape: ShapeType = {
      id: generateGUID(),
      x: -10000, // Set the x-coordinate to render off page
      y: -10000, // Set the y-coordinate to render off page
      letter: getRandomLetter(), // Set the letter property to whatever you want for the new shape
      letterColor: colours[getRandomColour()], // Set the letter color
      zIndex: highestZIndex.value // Set the zIndex to match other shapes
    }

    shapes.value.push(newShape) // Add the new shape to the shapes array

    setTimeout(() => {
      // set 0 timeout to make sure element rendeprimary before finding by ID
      const shapeContainer = document.getElementById(`shape-${newShape.id}`)
      if (shapeContainer) {
        // Get width and height of new shape
        const shapeHeight = shapeContainer.clientHeight
        const shapeWidth = shapeContainer.clientWidth
        // calculate center based on shape size offset
        centerX -= shapeWidth / 2
        centerY -= shapeHeight / 2
        // reassign new coordinates to center shape in 'add'
        shapes.value[shapes.value.length - 1].x = centerX
        shapes.value[shapes.value.length - 1].y = centerY
      }
    }, 0)
  }
}

const removeShape = (index: number) => {
  shapes.value[index].isRemoved = true
  stopDrag()
}

const clearBoard = () => {
  highestZIndex.value = 1
  shapes.value = []
}

const handleMinHeight = (height: number, screen: 'aboveXl' | 'belowXl') => {
  if (screen == 'belowXl') {
    return height > 850 ? height : 850
  } else {
    return height > 730 ? height : 730
  }
}

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', handleDrag)
  window.removeEventListener('touchmove', handleDrag)
  window.removeEventListener('mouseup', stopDrag)
  window.removeEventListener('touchend', stopDrag)
})
</script>

<style scoped></style>
