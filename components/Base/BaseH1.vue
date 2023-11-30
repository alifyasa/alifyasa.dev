<script setup lang="ts">
const props = defineProps({
    'color': {
        type: String,
        default: 'jet'
    }
})

const textColor = `text-${props.color}`
</script>
<template>
    <h1 :class="['font-serif text-4xl leading-loose', textColor]" aria-label="Name">
        <slot></slot>
    </h1>
</template>