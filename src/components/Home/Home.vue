<template>
  <div>
    <div v-if="!showRouter" class="hello">
      <h1 class="center">Hello, World</h1>
      <p>
        This is a template to get you started hosting your vue blog on GitHub Pages.
      </p>
      <p>
        Fork it and give it a go! <a href="https://github.com/jacob-ebey/vue-example">https://github.com/jacob-ebey/vue-example</a>
      </p>

      <p><router-link to="/blog/example-post">Routes work like a champ</router-link></p>
    </div>
    <router-view v-if="showRouter" />
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    showRouter () {
      console.log(this.$route)
      return this.$route.path !== '' && this.$route.path !== '/'
    }
  }
}
</script>
