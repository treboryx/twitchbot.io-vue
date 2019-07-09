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
      path: '/commands',
      name: 'commands',
      component: () => import('./views/Commands.vue'),
      meta: {
        title: 'Commands - TwitchBot',
        metaTags: [
          {
            name: 'description',
            content: 'View a list of TwitchBot\'s commands online.'
          },
          {
            name: 'og:description',
            content: 'View a list of TwitchBot\'s commands online.'
          }
        ]
      }
    },
    {
      path: '/commands/formatting',
      name: 'commandsFormatting',
      component: () => import('./views/NotifFormatting.vue'),
      meta: {
        title: 'Notification formatting - TwitchBot',
        metaTags: [
          {
            name: 'description',
            content: 'Use this guide for reference on how to improve your notifications with rich content.'
          },
          {
            name: 'og:description',
            content: 'Use this guide for reference on how to improve your notifications with rich content.'
          }
        ]
      }
    },
    {
      path: '/formatting',
      redirect: '/commands/formatting'
    },
    {
      path: '/languages',
      name: 'languages',
      component: () => import('./views/Languages.vue'),
      meta: {
        title: 'Languages - TwitchBot',
        metaTags: [
          {
            name: 'description',
            content: 'A list of languages that TwitchBot\'s Discord interface has been translated into.'
          },
          {
            name: 'og:description',
            content: 'A list of languages that TwitchBot\'s Discord interface has been translated into.'
          }
        ]
      }
    },
    {
      path: '/partners',
      name: 'partners',
      component: () => import('./views/Partners.vue'),
      meta: {
        title: 'Bringing communities together. - TwitchBot Partners',
        metaTags: [
          {
            name: 'description',
            content: 'Boost your streaming organization or personal server with exclusive TwitchBot features and events.'
          },
          {
            name: 'og:description',
            content: 'Boost your streaming organization or personal server with exclusive TwitchBot features and events.'
          }
        ]
      }
    },
    {
      path: '/premium',
      redirect: '/pro'
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import('./views/PrivacyPolicy.vue'),
      meta: {
        title: 'Privacy Policy - TwitchBot'
      }
    },
    {
      path: '/pro',
      name: 'pro',
      component: () => import('./views/Pro.vue'),
      meta: {
        title: 'Boost your TwitchBot experience. - TwitchBot Pro',
        metaTags: [
          {
            name: 'description',
            content: 'Become a TwitchBot Pro with access to exclusive features, faster notifications, and less limits for you and your server.'
          },
          {
            name: 'og:description',
            content: 'Become a TwitchBot Pro with access to exclusive features, faster notifications, and less limits for you and your server.'
          }
        ]
      }
    },
    {
      path: '/terms',
      name: 'terms',
      component: () => import('./views/TermsOfService.vue'),
      meta: {
        title: 'Terms of Service - TwitchBot'
      }
    },
    {
      path: '/translators',
      name: 'translators',
      component: () => import('./views/Translators.vue'),
      meta: {
        title: 'Translators - TwitchBot',
        metaTags: [
          {
            name: 'description',
            content: 'The community-driven translation project for TwitchBot.'
          },
          {
            name: 'og:description',
            content: 'The community-driven translation project for TwitchBot.'
          }
        ]
      }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
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
