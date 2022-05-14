<template>
  <div>
    <h1 class="text-center text-xl mb-3 font-bold mt-4">Upcoming Events</h1>
    <div
      class="flex self-center justify-center"
      v-for="(data, dataidx) in dataFromStrapi"
      :key="dataidx"
    >
      {{ data }}
    </div>
  </div>
</template>
<script>
import getDataFromApi from "@/services/getDataFromApi";
// @ is an alias to /src
export default {
  name: "HomeView",
  components: {},

  data() {
    return {
      dataFromStrapi: {},
    };
  },

  async mounted() {
    this.dataFromStrapi = await getDataFromApi.getDataFromStrapi();
  },
};
</script>
