<template>
  <div>
    <div v-if="!showRouter" class="hello">
      <h1 class="center">Hi, I&apos;m Jacob</h1>
      <p>
        I have a passion for the latest tech and delivering products
        that have an impact on people&apos;s lives. I&apos;ve written code that
        you may have used or helped build a product you&apos;ve bought.
      </p>
      <p>
        Want to talk Architecture, IoT, Node, C#, Robotics, Quantum Algorighms or anything
        else you think may spark my interest, don&apos;t be a stranger and drop me a line
        at
        <a href="mailto:jacob.ebey@live.com">jacob.ebey@live.com</a>
      </p>
    </div>
    <router-view v-if="showRouter" />
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    showRouter () {
      return this.$route.path !== '' && this.$route.path !== '/'
    }
  }
}
</script>
