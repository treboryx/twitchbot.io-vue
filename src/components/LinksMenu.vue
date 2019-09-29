<template>
  <transition name="fade">
    <div class="logged-in-ctx" v-show="isVisible" @click="clickFix()">
      <a href="https://support.twitchbot.io" class="em">Support</a>
      <a href="https://dash.twitchbot.io" class="em">Dashboard</a>
      <div class="sep" />
      <a href="https://discordapp.com/oauth2/authorize?client_id=375805687529209857&permissions=842452032&scope=bot&response_type=code&redirect_uri=https://twitchbot.io/?invited">Invite</a>
      <a href="https://discordbots.org/bot/twitch/vote">Upvote</a>
      <router-link to="/commands">Commands</router-link>
      <div class="sep" />
      <router-link to="/pro">TwitchBot Pro</router-link>
      <router-link to="/partners">Partners</router-link>
      <router-link to="/translators">Translators</router-link>
      <router-link to="/languages">Languages</router-link>
      <div class="sep" />
      <a href="https://medium.com/twitchbot">Blog</a>
      <a href="https://status.twitchbot.io">Status page</a>
    </div>
  </transition>
</template>

<style scoped>
.logged-in-ctx {
  padding: .5rem;
  background-color: var(--background-dark);
  z-index: 10001;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  position: absolute;
  width: 220px;
  text-align: left;
  border-radius: 5px;
  right: .5rem;
  top: 41px;
}

.logged-in-ctx .sep {
  height: 1px;
  background-color: rgba(255,255,255,.075);
  margin: .5rem 0;
}

.logged-in-ctx a {
  padding: .5rem !important;
  display: block;
  color: white;
  opacity: .7;
  font-size: .95em;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color .1s;
}

.logged-in-ctx a.em {
  color: #7289da;
}

.logged-in-ctx a:hover {
  /* .05 lighter than base menu */
  background-color: var(--background-light);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .1s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

<script>
export default {
  props: ['isVisible', 'clickFix']
}
</script>
