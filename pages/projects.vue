<script setup lang="ts">
import { useFetch } from 'nuxt/app';
const { data } = await useFetch('/api/projects')
</script>
<template>
    <BaseH1>All Projects</BaseH1>
    <pre>{{ data?.repositories }}</pre>
</template>