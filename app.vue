<script setup lang="ts">

const email = ref('')
const password = ref('')

const register = async () => {
  const { data: api } = await useFetch('/api/user', {
    method: 'POST',
    body: {
      email: email.value,
      password: password.value
    }
  })

}


</script>

<template>

  <!-- register form -->
  <form @submit.prevent="register">
    <input type="email" v-model="email" />
    <input type="password" v-model="password" />
    <button type="submit">Register</button>
  </form>
</template>
