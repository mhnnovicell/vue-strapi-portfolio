<template>
  <div
    v-if="dataFromStrapi"
    class="flex w-full flex-wrap self-center justify-center"
  >
    <div
      v-for="(data, dataidx) in dataFromStrapi"
      :key="dataidx"
      class="flex w-full flex-wrap self-center justify-center"
    >
      <vue-aos animation-class="fadeInDownBig">
        <div class="w-1/2 mb-6">
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
          class="max-h-72 p-6 sm:w-1/2 drop-shadow-xl bg-white rounded border border-gray-200 shadow-md dark:bg-slate-800 dark:border-zinc-900"
        >
          <a href="#">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-green-500 dark:text-white"
            >
              {{ data.attributes.Headline }}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {{ data.attributes.Content }}
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

      <vue-aos animation-class="fadeInDownBig">
        <div
          class="mt-6 max-h-96 p-6 w-1/2 justify-start self-start items-start"
        >
          <h1
            class="mb-2 text-4xl font-bold text-gray-900 dark:text-green-500 uppercase"
          >
            Evner
          </h1>
        </div>
      </vue-aos>

      <vue-aos animation-class="fadeInDownBig">
        <div
          class="mt-6 max-h-72 p-6 w-1/2 justify-start self-start items-start drop-shadow-xl bg-white rounded border border-gray-200 shadow-md dark:bg-slate-800 dark:border-zinc-900"
        >
          <a href="#">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              {{ data.attributes.Headline }}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {{ data.attributes.Content }}
          </p>
          <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul
              class="flex flex-wrap -mb-px text-sm font-medium text-center"
              id="myTab"
              data-tabs-toggle="#myTabContent"
              role="tablist"
            >
              <li class="mr-2" role="presentation">
                <button
                  class="inline-block p-4 rounded-t-lg border-b-2"
                  id="profile-tab"
                  data-tabs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Profile
                </button>
              </li>
              <li class="mr-2" role="presentation">
                <button
                  class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="dashboard-tab"
                  data-tabs-target="#dashboard"
                  type="button"
                  role="tab"
                  aria-controls="dashboard"
                  aria-selected="false"
                >
                  Dashboard
                </button>
              </li>
              <li class="mr-2" role="presentation">
                <button
                  class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="settings-tab"
                  data-tabs-target="#settings"
                  type="button"
                  role="tab"
                  aria-controls="settings"
                  aria-selected="false"
                >
                  Settings
                </button>
              </li>
              <li role="presentation">
                <button
                  class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="contacts-tab"
                  data-tabs-target="#contacts"
                  type="button"
                  role="tab"
                  aria-controls="contacts"
                  aria-selected="false"
                >
                  Contacts
                </button>
              </li>
            </ul>
          </div>
          <div id="myTabContent">
            <div
              class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <p class="text-sm text-gray-500 dark:text-gray-400">
                This is some placeholder content the
                <strong class="font-medium text-gray-800 dark:text-white"
                  >Profile tab's associated content</strong
                >. Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </p>
            </div>
            <div
              class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
              id="dashboard"
              role="tabpanel"
              aria-labelledby="dashboard-tab"
            >
              <p class="text-sm text-gray-500 dark:text-gray-400">
                This is some placeholder content the
                <strong class="font-medium text-gray-800 dark:text-white"
                  >Dashboard tab's associated content</strong
                >. Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </p>
            </div>
            <div
              class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
              id="settings"
              role="tabpanel"
              aria-labelledby="settings-tab"
            >
              <p class="text-sm text-gray-500 dark:text-gray-400">
                This is some placeholder content the
                <strong class="font-medium text-gray-800 dark:text-white"
                  >Settings tab's associated content</strong
                >. Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </p>
            </div>
            <div
              class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
              id="contacts"
              role="tabpanel"
              aria-labelledby="contacts-tab"
            >
              <p class="text-sm text-gray-500 dark:text-gray-400">
                This is some placeholder content the
                <strong class="font-medium text-gray-800 dark:text-white"
                  >Contacts tab's associated content</strong
                >. Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </p>
            </div>
          </div>
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
