import { type JSXElement } from 'solid-js'
import { Link } from '../../components'

export default function Home(): JSXElement {
  return (
    <>
      <h1 class="text-3xl mb-4">Alif Yasa</h1>
      <p class="leading-relaxed mb-2">
        I'm a final-year{' '}
        <Link href="https://stei.itb.ac.id/en/undergraduate-programs/bachelor-informatics/">
          Informatics Engineering
        </Link>{' '}
        student at{' '}
        <Link href="https://www.itb.ac.id/en/">
          Bandung Institute of Technology
        </Link>
        . While my primary interests are in Automation, DevOps, and Cloud
        Computing, I've also worked with a bunch of different technologies,
        ranging from React Native to Terraform to Rust.
      </p>
      <p class="leading-relaxed">
        Feel free to{' '}
        <Link href="/contacts" openInThisTab>
          contact me
        </Link>{' '}
        if you'd like to chat more!
      </p>
    </>
  )
}
