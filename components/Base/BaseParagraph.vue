<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps({
    text: {
        type: String
    }
})
</script>
<template>
    <p class="text-jet font-sans text-xl leading-relaxed">
        <span v-if="props.text" >
            <span v-for="word in props.text.split(' ')" :key="word">
            {{ word }}
        </span>
        </span>
        
        <slot v-else></slot>
    </p>
</template>