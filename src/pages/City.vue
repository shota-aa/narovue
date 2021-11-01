<template>
  <div>
    <h1>
      {{ cityName }}
    </h1>
    <div v-if="cityInfo">{{ cityInfo }}</div>
    <div v-else>街が見つかりませんでした</div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";

export default {
  name: "City",
  props: {
    cityName: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const cityInfo = ref();
    onMounted(async () => {
      const res = await axios.get("/api/citiesinfo/" + props.cityName);
      cityInfo.value = res.data;
    });
    return { cityInfo };
  },
};
</script>
