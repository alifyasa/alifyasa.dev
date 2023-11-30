<script setup lang="ts">
const props = defineProps({
    projectTitle: {
        type: String,
        required: true
    }
})
</script>
<template>
    <div class="border px-4 py-2 rounded-md border-rust">
        <BaseH2>{{ props.projectTitle }}</BaseH2>
        <BaseParagraph>Hahahahahah</BaseParagraph>
    </div>
</template>