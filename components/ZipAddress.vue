<template>
  <div class="zip-address">
    <v-row>
      <v-col cols="3" class="flex items-center pt-0 pb-5 justify-center">
        住所１
      </v-col>
      <v-col cols="9" class="flex items-center">
        <v-text-field variant="outlined" :label="label" disabled></v-text-field>
      </v-col>
    </v-row>
  </div>
</template>
<script setup>
const label = 'test label'
</script>