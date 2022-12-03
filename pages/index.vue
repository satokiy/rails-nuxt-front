<template>
  <div>
    <NavNavbar />
    <h1>Main Page</h1>
  </div>
  Count: {{ count }}
  <div>
    <button @click="inc">increase</button
    ><button @click="dec">decrease</button>
  </div>
  <h2>{{ $hello("World") }}</h2>
  <a target="_blank" href="https://icons8.com/icon/DcygmpZqBEd9/google-maps"
    >Google Maps</a
  >
  icon by <a target="_blank" href="https://icons8.com">Icons8</a>
</template>
<script setup>
definePageMeta({
  layout: false,
});
const { count, inc, dec } = useCounter(1);
const { $hello } = useNuxtApp();
</script>
