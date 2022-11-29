<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'

const users = ref<Array<any>>([])
// axios.get('/api/v1/users').then((res) => (users.value = res.data))
const { data } = await axios.get('/api/v1/users')
console.log(data)

const dateFormat = (date: string) => {
  const dateTimeFormat = new Intl.DateTimeFormat('ja', {
    dateStyle: 'medium',
    timeStyle: 'short',
  })
  return dateTimeFormat.format(new Date(date))
}
</script>

<template>
  <div>
    <h2>Usersテーブルの取得</h2>
    <table v-if="users.length">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>created_at</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, i) in users" :key="`user-${i}`">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <!-- <td>{{ dateFormat(user.created_at) }}</td> -->
        </tr>
      </tbody>
    </table>
    <div v-else>ユーザー取得ができませんでした</div>
  </div>
</template>
