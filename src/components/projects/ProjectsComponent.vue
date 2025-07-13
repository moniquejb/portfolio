<template>
  <div class="mx-auto max-w-screen-2xl h-full p-heading-page">
    <h3 class="text-center heading-page">Projects</h3>
    <p class="py-paragraph paragraph">
      A selection of public-facing projects I've worked on since 2022. These represent only a
      portion of my work. I've also built internal dashboards, management systems, and have other
      projects still in progress. My involvement is outlined in each project description.
      <br /><br />
      I'm currently developing a white-label, configurable checkout system for my employer. It is a
      shared solution for our existing and future brands. I led the research and investigation phase, created the high-fidelity designs and prototype in Figma, and am now actively developing the frontend. The system is being built with
      <span class="font-semibold text-secondary-darker">Nuxt</span>,
      <span class="font-semibold text-secondary-darker">TypeScript</span>,
      <span class="font-semibold text-secondary-darker">Tailwind</span>, and
      <span class="font-semibold text-secondary-darker">PrimeVue</span> - a new stack I introduced.
      The need for per-brand configuration and customisation has made the build technically challenging, but also one of
      the most rewarding projects I've worked on.
    </p>

    <div class="mb-10 bg-slate-100 p-5 rounded-lg">
      <div class="font-bold self-end" :class="{ 'pb-5': showFilters }">
        <span
          class="group/filter inline-flex items-center cursor-pointer"
          @click="showFilters = !showFilters"
        >
          <span
            class="bg-dark text-white md:mb-[1px] md:ps-[1px] rounded-full aspect-square text-xs w-5 flex-center me-2 leading-none text-center sm:group-hover/filter:decoration-primary"
            >{{ selectedTags.length }}</span
          >
          <span
            class="sm:group-hover/filter:underline sm:group-hover/filter:decoration-secondary sm:group-hover/filter:decoration-2 sm:group-hover/filter:underline-offset-2 inline-flex items-center"
            :title="filterTitle"
          >
            Filter by technology</span
          >
          <SvgComponent className="w-4 ms-2" :name="!showFilters ? 'chevronDown' : 'chevronUp'"
        /></span>
      </div>
      <ul v-show="showFilters" class="flex flex-wrap gap-x-1 gap-y-2">
        <li v-for="tag in tagList" :key="`filter-${tag.id}`">
          <ButtonComponent
            @click="handleTagClick(tag.id)"
            textSizeClass="text-xs lg:text-sm/1"
            :bgClass="selectedTags.includes(tag.id) ? 'bg-secondary' : 'bg-gray-300'"
            :textClass="
              selectedTags.includes(tag.id)
                ? 'text-dark'
                : 'text-gray-500 sm:group-hover/button:text-dark'
            "
            :hoverClass="
              selectedTags.includes(tag.id)
                ? 'sm:group-hover/button:bg-secondary'
                : 'sm:group-hover/button:bg-tertiary'
            "
            :borderColor="selectedTags.includes(tag.id) ? 'dark' : 'gray'"
            >{{ tag.name }}</ButtonComponent
          >
        </li>
      </ul>
      <div
        v-show="showFilters && selectedTags.length"
        @click="selectedTags = []"
        class="group/clear inline-flex font-bold items-center mt-5 cursor-pointer"
      >
        <SvgComponent className="w-4 me-2" name="xMark" />
        <div
          class="sm:group-hover/clear:underline sm:group-hover/clear:decoration-primary sm:group-hover/clear:decoration-2 sm:group-hover/clear:underline-offset-2"
        >
          Clear all
        </div>
      </div>
    </div>
    <div class="grid gap-y-12 md:gap-y-16 grid-cols-1 pt-10">
      <div v-for="project in filteredProjects" :key="project.title" class="group/item">
        <div
          class="relative flex flex-wrap md:flex-nowrap gap-10 md:gap-8 justify-center md:justify-start"
        >
          <div class="min-w-32 sm:min-w-48 md:min-w-40 lg:min-w-52">
            <div class="relative w-full aspect-square rounded-2xl bg-dark mb-2">
              <img
                class="absolute w-full z-10 top-0 object-cover rounded-2xl aspect-square border-2 border-dark"
                :src="project.imageSrc"
                :alt="project.title"
              />
              <div class="absolute w-full z-0 top-2 bg-dark rounded-2xl aspect-square"></div>
            </div>
          </div>
          <div class="w-auto">
            <h4 class="text-3xl font-semibold text-center md:text-start">
              {{ project.title }}
            </h4>
            <div>
              <ul
                class="flex flex-wrap gap-y-[0.15rem] md:gap-y-2 my-4 justify-center md:justify-start"
              >
                <li
                  v-for="tag in project.tags"
                  :key="`${project.title}-${tag}`"
                  class="group/tag font-semibold text-secondary-darker text-center md:text-start text-sm xs:text-base"
                >
                  <span :title="tagName(tag)">{{ tagName(tag) }}</span
                  ><span class="px-1 xs:px-2 md:px-3 group-last/tag:hidden">&bull;</span>
                </li>
              </ul>
            </div>
            <p class="text-base md:text-lg whitespace-pre-line">
              {{ project.description }}
            </p>
            <div class="w-full flex flex-wrap gap-4 sm:gap-2 mt-8 justify-center md:justify-start">
              <a
                v-for="link in project.links"
                :key="link.url"
                :href="link.url"
                target="_blank"
                :disabled="link.disabled"
                :class="{ ['pointer-events-none']: link.disabled }"
                ><ButtonComponent
                  textSizeClass="text-base md:text-lg"
                  :borderColor="link.disabled ? 'gray' : 'dark'"
                  :bgClass="!link.disabled ? 'bg-tertiary' : 'bg-gray-300'"
                  :textClass="!link.disabled ? 'text-dark' : 'text-gray-500'"
                  >{{ link.text }}</ButtonComponent
                ></a
              >
            </div>
          </div>
        </div>
        <hr
          class="border-t-2 border-gray-300 border-dashed w-11/12 sm:w-5/6 mt-12 md:mt-16 col-span-6 mx-auto group-last/item:invisible"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { projects, tagList } from '@/data/projects'
import ButtonComponent from '@/components/misc/ButtonComponent.vue'
import type { ProjectTile, TagId } from '@/types/projects'
import SvgComponent from '@/components/misc/SvgComponent.vue'
import { computed, ref, watch, type Ref } from 'vue'
import { haveCommonValue } from '@/utilities'

const tagName = (id: TagId) => tagList.find((tag) => tag.id == id)?.name
const showFilters = ref(false)
const selectedTags: Ref<TagId[]> = ref([])
let filterTitle: Ref<string | undefined> = ref(undefined)
const filteredProjects = computed((): ProjectTile[] => {
  if (selectedTags.value.length) {
    return projects.filter((project) => haveCommonValue(project.tags, selectedTags.value))
  }
  return projects
})

function handleTagClick(id: TagId) {
  if (selectedTags.value.includes(id)) {
    selectedTags.value = selectedTags.value.filter((tagId) => tagId != id)
  } else {
    selectedTags.value.push(id)
  }
}

watch(showFilters, () => {
  if (!showFilters.value) {
    if (!showFilters.value && selectedTags.value.length) {
      let tagNames: string[] = []
      tagList.forEach((tag) => {
        if (selectedTags.value.includes(tag.id)) {
          tagNames.push(tag.name)
        }
      })
      filterTitle.value = `Filter by technology: ${tagNames.join(', ')}`
    } else {
      filterTitle.value = undefined
    }
  }
})
</script>

<style lang="css" scoped></style>
