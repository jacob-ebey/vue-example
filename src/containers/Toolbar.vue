<template>
  <div>
    <div class="flex">
      <router-link to="/" class="name">Jacob Ebey</router-link>
      <div>
        <router-link to="/blog" class="item">Blog</router-link>
      </div>
    </div>
    <hr />
    <div>
      <span v-for="(route, index) in matched" :key="route.path">
        <span v-if="index > 0">&nbsp;/</span>
        <router-link :to="route.path || '/'">{{route.name}}</router-link>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'toolbar',

  computed: {
    matched () {
      return this.$route.matched
    }
  }
}
</script>


<style lang="less" scoped>
  .flex {
    display: flex;
    justify-content: space-between;
  }
  .item {
    margin-left: 10px;
  }
  .name {
    &:extend(a);
    border-bottom: none;
  }
</style>
