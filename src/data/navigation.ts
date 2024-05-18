import type { NavItem } from '@/types'

export const navItems: NavItem[] = [
  {
    title: 'Home',
    route: { name: 'home' }
  },
  {
    title: 'About',
    route: { name: 'home', hash: '#about' }
  },
  {
    title: 'Projects',
    route: { name: 'home', hash: '#projects' }
  },
  {
    title: 'Contact',
    route: { name: 'home', hash: '#contact' }
  }
]
