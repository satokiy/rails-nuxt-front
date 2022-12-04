<template>
  <div class="tw-w-48">
    <NavNavbar />
    <h1>Main Page</h1>
    <h1 class="text-3xl font-bold">
      Hello world!
   </h1>
  </div>
</template>
<script setup>
definePageMeta({
  layout: false,
});
const { count, inc, dec } = useCounter(1);
const { $hello } = useNuxtApp();
</script>
