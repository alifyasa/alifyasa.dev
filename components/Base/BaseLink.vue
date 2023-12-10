<script setup lang="ts">
const props = defineProps({
    'href': {
        type: String,
        required: true
    },
    'color': {
        type: String,
        default: 'beige'
    },
    'withoutUnderline': {
        type: Boolean,
        default: false
    },
    'openInNewTab': {
        type: Boolean,
        default: false
    }, 
})

// https://tailwindcss.nuxtjs.org/tailwind/config#safelisting-classes
const textColor = ' text-' + props.color
const bgColor = 'bg-' + props.color
</script>

<template>
    <a 
        :class="['group transition duration-200 w-fit inline-block', textColor]" 
        :href="props.href"
        :target="props.openInNewTab ? '_blank' : '_self'"
    >
        <slot></slot>
        <span v-if="!props.withoutUnderline" :class="['block max-w-0 group-hover:max-w-full transition-all duration-150 h-0.5', bgColor]"></span>
    </a>
</template>