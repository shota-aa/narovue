<template>
  <div>
    <input v-model="username" type="text" />
    <input v-model="password" type="password" />
    <button @click="login">login</button>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";

export default {
  name: "Login",
  setup() {
    const username = ref("");
    const password = ref("");
    const login = () =>
      axios.post("/api/login", {
        username: username.value,
        password: password.value,
      });
    return {
      login,
      username,
      password,
    };
  },
};
</script>
