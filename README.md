# vue-example

A Vue.js project template meat to be hosted on Github Pages.

Live Example: https://jacob-ebey.github.io/vue-example/

## Getting Started

Clone the Project and checkout gh-pages branch
```
git clone https://github.com/jacob-ebey/vue-example.git
git fetch
git checkout gh-pages
```

Create a new GitHub repository, whatever you call it will be referred to as [REPO_NAME] from here
on out in any code examples.

Update REPO_NAME on line 9 of `config/index.js` to be the name of the repository you created is:
```javascript
// Update this to match your GitHub repository name. If you are using
// the default (i.e username.github.io) you'll want to set this to undefined
const REPO_NAME = '[REPO_NAME]'
```

Install packages and build the project:
```
npm install
npm run build
```

Commit changes, add origin and push:
```
git add -a -m "Updated config"
git remote rm origin
git remote add origin [YOUR_REPO_ADDRESS]
git push -u origin gh-pages
```

Your site will be up at username.github.io/REPO_NAME after it completes deployment.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
