import { routes } from './posts'

const Blog = () => import('./Blog.vue')

export default {
  path: '/blog',
  name: 'Blog',
  component: Blog,
  children: routes
}
