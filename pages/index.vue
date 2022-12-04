<template>
  <div>
    <h1 class="text-3xl text-center font-bold mb-8">Hello world!</h1>
    <div class="flex justify-center">
      <button
        @click="getUser"
        class="bg-indigo-700 font-semibold text-white py-2 px-4 rounded transform hover:scale-100 hover:bg-red-700 duration-500"
      >
        ボタン
      </button>
    </div>
    <h2>User一覧</h2>
    <p v-if="error">{{ error }}</p>
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>
<script setup>
definePageMeta({
  layout: false,
});
const { data: posts, error } = await useAsyncData('posts', () =>
  $fetch('https://jsonplaceholder.typicode.com/posts/')
);
console.log(posts)

// const getUser = async () => {
//   const res = await useFetch("/api/v1/users");
//   users = res.data.value;
//   console.log(users);
//   return users;
// };
</script>
