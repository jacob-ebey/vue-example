<template>
  <div>
      <p>
        Let&apos;s explore how we can use GitHub Pages to host a <em>FREE</em> static Vue
        site. If you have not used GitHub Pages before, they are static websites hosted
        directly from your GitHub repository, usually off a branch named &quot;gh-pages&quot;.
      </p>

      <p>
        For a live example of what you&apos;ll be deploying, you can visit:&nbsp;
        <a href="https://jacob-ebey.github.io/vue-example/">https://jacob-ebey.github.io/vue-example/</a>
      </p>

      <h2>Getting Started</h2>

      <p>
        Clone the template project and checkout gh-pages branch
      </p>

      <pre><code>{{`git clone https://github.com/jacob-ebey/vue-example.git
git fetch
git checkout gh-pages`}}</code></pre>

      <p>
        Create a new GitHub repository, whatever you call it will be referred to as
        [REPO_NAME] from here on out in any code examples.
      </p>

      <p>
        Update REPO_NAME on line 9 of `config/index.js` to be the name of the repository
        you created. This configures the production build to properly point to the resources
        hosted on GitHub Pages.
      </p>

      <pre><code>{{`// Update this to match your GitHub repository name. If you are using
// the default (i.e username.github.io) you'll want to set this to undefined
const REPO_NAME = '[REPO_NAME]'`}}</code></pre>

      <p>
        Install packages and build the project:
      </p>

      <pre><code>{{`npm install
npm run build`}}</code></pre>

      <p>
        Commit changes, add origin and push:
      </p>

      <pre><code>{{`git add -a -m "Updated config"
git remote rm origin
git remote add origin [YOUR_REPO_ADDRESS]
git push -u origin gh-pages`}}</code></pre>

      <p>
        Your site will be up shortly at: username.github.io/REPO_NAME after it completes deployment.
      </p>

      <p>
        You can run a local dev server at localhost:8081 with:
      </p>

      <pre><code>npm run dev</code></pre>

      <p>
        Comments welcome on Hacker News:
        &nbsp;<a href="https://news.ycombinator.com/item?id=15793367">
          https://news.ycombinator.com/item?id=15793367
        </a>
      </p>

      <h3>Happy Coding!</h3>
    </div>
</template>
