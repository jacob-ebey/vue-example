<template>
  <div>
    <div v-if="!showRouter">
      <div v-for="route in routes" :key="route.path">
        <h2><router-link :to="'/blog/' + route.path">{{route.name}}</router-link></h2>
        <p>{{route.meta.description}}</p>
        <hr />
      </div>
    </div>
    <div v-if="showRouter">
      <h1>{{matched.name}}</h1>
      <router-view />
    </div>
  </div>
</template>

<script>

import { routes } from './posts'

export default {
  computed: {
    routes () {
      return routes
    },

    showRouter () {
      return this.$route.path !== '/blog' && this.$route.path !== '/blog/' && this.$route.matched.length === 3
    },

    matched () {
      return this.$route.matched.length === 3 ? this.$route.matched[2] : undefined;
    }
  },
}
</script>

