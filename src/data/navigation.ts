import type { NavItem } from '@/types'

export const navItems: NavItem[] = [
  {
    title: 'Home',
    route: { name: 'home' }
  },
  {
    title: 'Projects',
    route: { name: 'home', hash: '#projects' }
  },
  {
    title: 'About',
    route: { name: 'home', hash: '#about' }
  },
  {
    title: 'Contact',
    route: { name: 'home', hash: '#contact' }
  }
]
