import Home from './Home'
import Blog from './Blog'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      Blog
    ]
  }
]

export { routes }
