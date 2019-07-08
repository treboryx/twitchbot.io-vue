import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
      meta: {
        title: 'TwitchBot - The best Twitch bot for Discord',
        metaTags: [
          {
            name: 'description',
            content: 'Integrate and engage your Discord server with Twitch through fast notifications, live role, and more features for streamers, gamers, and Twitch users.'
          },
          {
            name: 'og:description',
            content: 'Integrate and engage your Discord server with Twitch through fast notifications, live role, and more features for streamers, gamers, and Twitch users.'
          }
        ]
      }
    },
    {
      path: '/pro',
      name: 'pro',
      component: () => import('./views/Pro.vue')
    },
    {
      path: '/partners',
      name: 'partners',
      component: () => import('./views/Partners.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    console.log(to)
    if (to.hash) {
      return { selector: to.hash }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  // https://alligator.io/vuejs/vue-router-modify-head/

  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)

  if (nearestWithTitle) document.title = nearestWithTitle.meta.title

  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el))

  if (!nearestWithMeta) return next()

  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta')

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key])
    })

    tag.setAttribute('data-vue-router-controlled', '')

    return tag
  })
    .forEach(tag => document.head.appendChild(tag))

  next()
})

export default router
