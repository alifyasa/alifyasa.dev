<script setup lang="ts">
import { useFetch } from 'nuxt/app';
const { data } = await useFetch('/api/projects?perPage=30')
</script>
<template>
    <BaseH1>All Projects</BaseH1>
    <div v-for="repo in data?.repositories" :key="repo.full_name">
        <ProjectDisplay 
            class="mb-4" 
            :project-title="repo.full_name"
            :project-description="repo.description"
            :project-github-url="repo.html_url"
        ></ProjectDisplay>
    </div>

</template>