<script setup lang="ts">
const props = defineProps({
    projectTitle: {
        type: String,
        required: true
    },
    projectDescription: {
        type: String
    }
})
</script>
<template>
    <div class="border px-4 py-2 rounded-md border-rust">
        <BaseH2>{{ props.projectTitle }}</BaseH2>
        <BaseParagraph class="text-lg" v-if="props.projectDescription">{{ props.projectDescription }}</BaseParagraph>
        <BaseParagraph class="text-lg" v-else>No Description</BaseParagraph>
    </div>
</template>