const StaticVueSite = () => import('./StaticVueSite.vue')

const routes = [
  {
    path: 'static-vue-github',
    component: StaticVueSite,
    name: 'Hosting a static Vue site on GitHub',
    meta: {
      description: 'A quick way to start hosting a static vue site using GitHub Pages.'
    }
  }
];

export { routes }
