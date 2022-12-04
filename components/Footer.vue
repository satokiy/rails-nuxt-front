<template>
  <div>
    <v-footer absolute>
      <v-col class="text-center" cols="12">{{ year }} - Address Search App.</v-col>
    </v-footer>
  </div>
</template>
<script setup>
const year = new Date().getFullYear();
</script>
