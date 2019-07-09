<template>
  <a :class="'brand ' + brand" :title="title" :href="href" target="_blank">
    <DiscordIcon v-if="brand == 'discord'" :size="16" />
    <GithubIcon v-else-if="brand == 'github'" :size="16" />
    <MediumIcon v-else-if="brand == 'medium'" :size="16" />
    <PatreonIcon v-else-if="brand == 'patreon'" :size="16" />
    <TwitchIcon v-else-if="brand == 'twitch'" :size="16" />
    <TwitterIcon v-else-if="brand == 'twitter'" :size="16" />
  </a>
</template>

<style scoped>
.brand {
    border-radius: 100px;
    color: white;
    width: 35px;
    height: 35px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
    text-decoration: none !important;
    box-sizing: border-box;
}

.brand:nth-of-type(1) {margin-left: 0;}
.brand.discord {background-color: #7289da;}
.brand.github {color: #333; background-color: white;}
.brand.medium {background-color: black;}
.brand.patreon {background-color: #f96854;}
.brand.twitch {background-color: #54338C;}
.brand.twitter {background-color: #1da1f2;}
</style>

<script>
import DiscordIcon from 'mdi/Discord.vue'
import GithubIcon from 'mdi/GithubCircle.vue'
import MediumIcon from 'mdi/Medium.vue'
import PatreonIcon from 'mdi/Patreon.vue'
import TwitchIcon from 'mdi/Twitch.vue'
import TwitterIcon from 'mdi/Twitter.vue'

export default {
  components: {
    DiscordIcon,
    GithubIcon,
    MediumIcon,
    PatreonIcon,
    TwitchIcon,
    TwitterIcon
  },
  props: ['brand', 'title', 'href']
}
</script>
