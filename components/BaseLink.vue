<script setup lang="ts">
const props = defineProps({
    'href': {
        type: String,
        required: true
    }
})
</script>

<template>
    <a class="group transition duration-200" :href="props.href">
        <slot></slot>
        <span class="block max-w-0 group-hover:max-w-full transition-all duration-150 h-0.5 bg-beige"></span>
    </a>
</template>