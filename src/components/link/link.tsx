import { A } from '@solidjs/router'
import { type JSXElement } from 'solid-js'

interface LinkProps {
  href: string
  children: string
  openInThisTab?: boolean
  // Add other props as needed
}

const Link = (props: LinkProps): JSXElement => {
  const { href, children, openInThisTab = false, ...rest } = props

  return (
    <A
      class="underline"
      href={href}
      target={openInThisTab ? undefined : '_blank'}
      {...rest}
    >
      {children}
    </A>
  )
}

export default Link
