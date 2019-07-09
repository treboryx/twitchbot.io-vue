<template>
  <a :class="'brand ' + brand" :title="title" :href="href" target="_blank">
    <FontAwesomeIcon :icon="['fab', brand]" />
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
.brand.twitter {background-color: #1da1f2;}
.brand.patreon {background-color: #f96854;}
.brand.github {color: #333; background-color: white;}
.brand.twitch {background-color: #54338C;}
</style>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faDiscord, faPatreon, faGithub, faTwitch } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTwitter, faDiscord, faPatreon, faGithub, faTwitch)

export default {
  components: {
    FontAwesomeIcon
  },
  props: ['brand', 'title', 'href']
}
</script>
