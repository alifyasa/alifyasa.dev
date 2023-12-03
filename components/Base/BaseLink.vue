<script setup lang="ts">
const props = defineProps({
    'href': {
        type: String,
        required: true
    },
    'color': {
        type: String,
        default: 'beige'
    }
})

// https://tailwindcss.nuxtjs.org/tailwind/config#safelisting-classes
const textColor = ' text-' + props.color
const bgColor = 'bg-' + props.color
</script>

<template>
    <a :class="['group transition duration-200', textColor]" :href="props.href">
        <slot></slot>
        <span :class="['block max-w-0 group-hover:max-w-full transition-all duration-150 h-0.5', bgColor]"></span>
    </a>
</template>