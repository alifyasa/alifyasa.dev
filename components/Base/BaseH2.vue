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
    <h1 :class="['font-serif text-3xl leading-relaxed', textColor]" aria-label="Name">
        <slot></slot>
    </h1>
</template>