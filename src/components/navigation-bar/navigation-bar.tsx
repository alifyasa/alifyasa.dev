import { A, useLocation } from '@solidjs/router'
import { For, type JSXElement, createSignal } from 'solid-js'
import NAVIGATION_ITEMS from './navigation-items'

export default function NavigationBar(): JSXElement {
  const [navigationItems] = createSignal(NAVIGATION_ITEMS)
  const location = useLocation()

  const isHere = (path: string): boolean => path === location.pathname

  return (
    <div class="w-full border border-gray-200 flex overflow-scroll">
      <For each={navigationItems()}>
        {navItem => (
          <div
            class={`flex w-full ${isHere(navItem.path) ? 'bg-gray-100' : ''}`}
          >
            <A
              class="p-4 block text-center w-full hover:bg-gray-200"
              href={navItem.path}
            >
              {navItem.name}
            </A>
          </div>
        )}
      </For>
    </div>
  )
}
