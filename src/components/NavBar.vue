<template>
  <div>
    <nav>
      <span>
        <router-link class="main" to="/">TwitchBot</router-link>
      </span>
      <span class="links">
        <router-link to="/pro" no-mobile class="premium">Pro</router-link>
        <a href="https://support.twitchbot.io" no-mobile>Support</a>
        <a href="https://dash.twitchbot.io" no-mobile>Dashboard</a>
      </span>
      <div class="flex-spacer"></div>
      <span class="right">
        <a href="https://twitter.com/twitchbot_io" target="_blank" title="Twitter account">
          <FontAwesomeIcon :icon="['fab', 'twitter']" />
        </a>
        <a href="https://discord.gg/UNYzJqV" target="_blank" title="Discord server">
          <FontAwesomeIcon :icon="['fab', 'discord']" />
        </a>
        <div class="nav-sep"></div>
        <a @click="toggleMenu()" title="More links" id="more-links">
          <FontAwesomeIcon icon="caret-down" />
        </a>
      </span>
    </nav>
    <LinksMenu :is-visible="menuIsVisible"/>
  </div>
</template>

<style scoped>
nav {
  background-color: #54338C;
  padding: 1rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}

nav a {
  color: white;
  text-decoration: none;
  cursor: pointer;
}

nav a.main {
  font: 500 1em 'Poppins', 'Roboto', sans-serif;
  padding-right: 5px;
}

nav .links a {
  font-size: .9em;
  color: rgba(255,255,255,.7);
  padding-left: 12px;
}

nav .flex-spacer {
  flex: auto 1 1;
}

nav .right a {
  padding-left: 12px;
  color: rgba(255,255,255,.9);
}

nav .nav-sep {
  display: inline-block;
  width: 1px;
  height: .9em;
  background: rgba(255,255,255,.25);
  margin-left: 12px;
}
</style>

<script>
import LinksMenu from '@/components/LinksMenu.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCaretDown, faTwitter, faDiscord)

export default {
  components: {
    FontAwesomeIcon,
    LinksMenu
  },
  data () {
    return {
      menuIsVisible: false,
      target: null
    }
  },
  methods: {
    toggleMenu () {
      this.menuIsVisible = !this.menuIsVisible
      document.querySelector('#more-links').style.transform = `rotate: ${this.menuIsVisible ? 180 : 0}deg`
    }
  }
}
</script>
