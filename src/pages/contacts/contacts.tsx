import { createSignal, For, type JSXElement } from 'solid-js'
import CONTACT_ITEMS from './contacts-items'
import { Link } from '../../components'

export default function Contacts(): JSXElement {
  const [contactItems] = createSignal(CONTACT_ITEMS)
  return (
    <>
      <h1 class="text-3xl mb-4">Contacts</h1>
      <For each={contactItems()}>
        {contact => (
          <div class="mb-2">
            <h2 class="text-xl">{contact.name}</h2>
            <Link href={contact.url}>{contact.urlText ?? contact.url}</Link>
          </div>
        )}
      </For>
    </>
  )
}
