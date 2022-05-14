<template>
  <div v-if="dataFromStrapi" class="flex self-center justify-center w-full">
    <div
      v-for="(data, dataidx) in dataFromStrapi"
      :key="dataidx"
      class="flex self-center justify-center w-full"
    >
      <vue-aos animation-class="fadeInDownBig">
        <div class="sm:w-1/2">
          <img
            :src="data.attributes.Image.data[0].attributes.url"
            :alt="data.attributes.Image.data[0].attributes.name"
            :title="data.attributes.Image.data[0].attributes.name"
            class="rounded shadow-md drop-shadow-xl"
            loading="lazy"
          />
        </div>
      </vue-aos>
      <vue-aos animation-class="fadeInDownBig">
        <div
          class="max-h-96 p-6 sm:w-1/2 max-w-sm bg-white rounded border border-gray-200 shadow-md dark:bg-slate-800 dark:border-gray-700"
        >
          <a href="#">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {{ data.attributes.Headline }}
          </p>
          <a
            href="#"
            class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-500 dark:bg-green-500 dark:hover:bg-green-500 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              class="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </vue-aos>
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
