<template>
  <transition name="fade">
    <div class="logged-in-ctx" v-show="isVisible" @click="clickFix()">
      <a href="https://discordapp.com/oauth2/authorize?client_id=375805687529209857&permissions=842452032&scope=bot&response_type=code&redirect_uri=https://twitchbot.io/?invited">Invite</a>
      <a href="https://support.twitchbot.io" only-mobile>Support</a>
      <a href="https://discordbots.org/bot/twitch/vote">Upvote</a>
      <a href="https://dash.twitchbot.io" only-mobile>Dashboard</a>
      <router-link to="/commands">Commands</router-link>
      <div class="sep"></div>
      <router-link to="/pro" only-mobile>TwitchBot Pro</router-link>
      <router-link to="/partners">Partners</router-link>
      <router-link to="/translators">Translators</router-link>
      <router-link to="/languages">Languages</router-link>
      <div class="sep"></div>
      <a href="https://overlay.twitchbot.io">Overlay</a>
      <a href="https://medium.com/twitchbot">Blog</a>
      <a href="https://twitch.tv/twitchbot_discord">Twitch</a>
    </div>
  </transition>
</template>

<style scoped>
.logged-in-ctx {
    padding: .1rem;
    background-color: #12191f;
    z-index: 10001;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    position: absolute;
    right: .5rem;
    top: calc(41px + .25rem);
    width: 200px;
    text-align: left;
    border-radius: 5px;
}

.logged-in-ctx .sep {
    height: 1px;
    background-color: rgba(255,255,255,.1);
    margin: 0 .5rem;
}

.logged-in-ctx a {
    margin: .75rem 1rem;
    padding: 0 !important;
    display: block;
    color: rgba(255,255,255,.7);
    font-size: .8em;
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
