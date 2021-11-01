<template>
  <div>
    <button @click="sendGet">GET</button>
    <button @click="sendPost">POST</button>
    <button @click="sendPut">PUT</button>
    <button @click="sendDelete">DELETE</button>
    <button @click="ping">ping</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Axios",
  setup() {
    const sendGet = () => axios.get("https://en54xpg8dd8zsnd.m.pipedream.net");
    const sendPost = () =>
      axios.post("https://en54xpg8dd8zsnd.m.pipedream.net", {
        username: "kounosuke",
      });
    const sendPut = () =>
      axios.put("https://en54xpg8dd8zsnd.m.pipedream.net", {
        testData: { string: "string", number: 1 },
      });
    const sendDelete = () =>
      axios.delete("https://en54xpg8dd8zsnd.m.pipedream.net", {
        data: { po: 1 },
      });
    const ping = () => axios.get("/api/ping");
    return {
      sendGet,
      sendPost,
      sendPut,
      sendDelete,
      ping,
    };
  },
};
</script>
