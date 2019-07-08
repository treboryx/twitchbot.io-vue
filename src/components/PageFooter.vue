<template>
  <footer>
    <div class="content">
      <h3>TwitchBot</h3>
      <span style="margin-top:5px;">
        <BrandIcon brand="discord" title="Discord server" href="https://discord.gg/UNYzJqV" />
        <BrandIcon brand="twitch" title="Twitch channel" href="https://twitch.tv/twitchbot_discord" />
        <BrandIcon brand="patreon" title="Patreon page" href="https://patreon.com/devakira" />
        <BrandIcon brand="github" title="GitHub organization" href="https://github.com/twitchbot-discord" />
        <BrandIcon brand="twitter" title="Twitter page" href="https://twitter.com/twitchbot_io" />
      </span>
      <span class="disclaimer">
        Copyright © <a href="https://akira.arraycord.dev" target="_blank">Akira</a>, 2017-2019.
        TwitchBot is not affiliated with Twitch Interactive, Inc.
        <br>
        Icons provided by icons8.com.
        <br><br>
        <a href="/privacy">Privacy Policy</a>
        &nbsp;&middot;&nbsp;
        <a href="/terms">Terms of Service</a>
        <br>
        Questions, comments, or business inquiries? Contact us at <a href="mailto:pr@twitchbot.io">pr@twitchbot.io</a>.
      </span>
    </div>
  </footer>
</template>

<style>
footer {
    background-color: #12191f;
    padding: 1.2rem;
    margin-top: 20px;
}

footer .content {
    max-width: 700px;
    margin: auto;
}

footer span {
    display: block;
    font-size: .9em;
}

footer h3 {
    font: 500 1.5em "Poppins", "Roboto", sans-serif;
    margin-bottom: 7px;
}

footer .disclaimer {
    opacity: .5;
    font-size: .7em;
    margin-top: 1.5em;
}

footer .disclaimer a {
    text-decoration: underline;
    color: inherit;
}
</style>

<script>
import BrandIcon from '@/components/BrandIcon.vue'

export default {
  components: {
    BrandIcon
  }
}
</script>
