interface ContactItem {
  name: string
  url: string
  urlText?: string
}

const CONTACT_ITEMS: ContactItem[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/alif-yasa',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/alifyasa',
  },
  {
    name: 'email',
    url: 'mailto://contact@alifyasa.dev',
  },
].sort((a, b) => a.name.localeCompare(b.name))

export default CONTACT_ITEMS
