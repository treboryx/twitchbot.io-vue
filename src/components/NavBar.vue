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
          <TwitterIcon :size="16" />
        </a>
        <a href="https://discord.gg/UNYzJqV" target="_blank" title="Discord server">
          <DiscordIcon :size="16" />
        </a>
        <div class="nav-sep"></div>
        <a @click="toggleMenu()" title="More links" id="more-links">
          <ChevronDownIcon :size="16" />
        </a>
      </span>
    </nav>
    <LinksMenu :is-visible="menuIsVisible" :click-fix="() => {menuIsVisible = false;}" />
  </div>
</template>

<style scoped>
nav {
  background-color: var(--accent-purple);
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

import ChevronDownIcon from 'mdi/ChevronDown.vue'
import DiscordIcon from 'mdi/Discord.vue'
import TwitterIcon from 'mdi/Twitter.vue'

export default {
  components: {
    ChevronDownIcon,
    DiscordIcon,
    LinksMenu,
    TwitterIcon
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
    }
  }
}
</script>
