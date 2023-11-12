interface NavigationItem {
  name: string
  path: string
}

const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Experiences',
    path: '/experiences',
  },
  {
    name: 'Projects',
    path: '/projects',
  },
  {
    name: 'Contacts',
    path: '/contacts',
  },
]

export default NAVIGATION_ITEMS
