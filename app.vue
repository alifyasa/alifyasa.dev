<template>
  <div class="min-h-screen min-w-full">
    <nav class="bg-rust py-4 px-6 sticky top-0">
      <ul class="font-serif text-2xl text-beige flex">
        <li class="w-fit mr-auto">
          <BaseLink href="/">Home</BaseLink>
        </li>
        <li class="w-fit mr-6">
          <BaseLink href="/">Projects</BaseLink>
        </li>
        <li class="w-fit">
          <BaseLink href="/">Contacts</BaseLink>
        </li>
      </ul>
    </nav>
    <div class="px-4 py-8 max-w-3xl mx-auto">
      <NuxtPage />
    </div>
  </div>
</template>
