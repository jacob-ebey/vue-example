const ExamplePost = () => import('./ExamplePost.vue')

const routes = [
  {
    path: 'example-post',
    component: ExamplePost,
    name: 'Example Post',
    meta: {
      description: 'A hello world post to get you going.'
    }
  }
];

export { routes }
