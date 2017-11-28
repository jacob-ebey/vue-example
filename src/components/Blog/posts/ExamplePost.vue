<template>
  <div>
      <p>
        Hello, World! This is an example post to get you going.
      </p>

      <h2>Creating a new post</h2>

      <p>
        First, create a new .vue file under posts. Go ahead and add some content.
      </p>

      <pre><code>{{content}}</code></pre>

      <p>
        Then add a new entry to the beginning of the routes array in the index.js file
        of posts.
      </p>

      <p>
        Remember to use lazy loading of pages by using import():
      </p>

      <pre><code>{{lazyExample}}</code></pre>

      <h3>Happy Coding!</h3>
    </div>
</template>

<script>
export default {
  data () {
    return {
      content: `<template>
  <h2>Hello, World!</h2>
</template>`,
      lazyExample: `const NewPost = () => import('./NewPost.vue')`,
    }
  }
}
</script>

