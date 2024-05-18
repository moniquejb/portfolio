import type { RouteLocationRaw } from 'vue-router'

export type NavItem = {
  title: string
  route: RouteLocationRaw
}

export type CustomFillColourName =
  | 'fill-primary'
  | 'fill-secondary'
  | 'fill-tertiary'
  | 'fill-dark'
  | 'fill-white'

export type SVGName =
  | 'email'
  | 'whatsapp'
  | 'logo'
  | 'trash'
  | 'add'
  | 'refresh'
  | 'clear'
  | 'drag'
  | 'chevronDown'
  | 'chevronUp'
  | 'xMark'
