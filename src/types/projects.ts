export type ProjectTile = {
  title: string
  tags: TagId[]
  imageSrc: string
  description: string
  links: { text: string; url: string; disabled?: boolean }[]
}

export type TagItem = {
  id: TagId
  name: string
}

export type TagId =
  | 'vue-3'
  | 'vue-2'
  | 'javascript'
  | 'typescript'
  | 'bootstrap'
  | 'tailwind'
  | 'element-ui'
  | 'element-plus'
  | 'html'
  | 'css-scss'
  | 'pinia'
  | 'vuex'
  | 'oc'
  | 'liquid'
  | 'api'
  | 'socials'
  | 'webpack'
  | 'vite'
