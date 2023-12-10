<script setup lang="ts">
const props = defineProps({
    projectTitle: {
        type: String,
        required: true
    },
    projectDescription: {
        type: String
    },
    projectGithubUrl: {
        type: String
    }
})
</script>
<template>
    <div class="border px-4 pt-2 pb-4 rounded-md border-rust shadow-md">
        
        <BaseH2>{{ props.projectTitle }}</BaseH2>

        <BaseParagraph class="text-md" v-if="props.projectDescription">{{ props.projectDescription }}</BaseParagraph>
        <BaseParagraph class="text-md" v-else>
            <pre>No Description</pre>
        </BaseParagraph>
    </div>
</template>