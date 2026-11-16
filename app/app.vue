<script lang="ts" setup>
const { fetchChats, prefetchChatMessages } = useChats();
const { fetchProjects } = useProjects();
await Promise.all([fetchChats(), fetchProjects()]);
await callOnce(prefetchChatMessages);
</script>

<template>
  <UApp>
    <div>
      <NuxtRouteAnnouncer />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </UApp>
</template>
