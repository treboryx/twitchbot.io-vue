<template>
  <div>
    <PageHeader>
      <h1>Notification formatting guide</h1>
      <h2>Use this guide for reference on how to improve your notifications with rich content.</h2>
    </PageHeader>
    <CarbonSidebar>
      <h2>Variables</h2>
      <p>Include stream information into the message of your notifications.</p>
      <div class="quote warn">
        <AlertIcon />
        <span>
          Refer to this
          <a href="https://support.twitchbot.io/articles/45967f45-fafb-48f9-80a3-b8c6c3c627f7" target="_blank">
            support article</a>
          if you are using webhook notifications, as the variable names have changed.
        </span>
      </div>
      <ul>
        <li><code>$title$</code> - The stream's title</li>
        <li><code>$viewers$</code> - The number of people currently watching the stream</li>
        <li><code>$game$</code> - The game that the streamer is currently playing</li>
        <li><code>$url$</code> - The channel's URL</li>
        <li><code>$name$</code> - The channel's name</li>
        <li><code>$everyone$</code> - Inserts an @everyone mention</li>
        <li><code>$here$</code> - Inserts an @here mention</li>
      </ul>
      <h2>Markdown</h2>
      <p>
        Notifications support all of Discord's
        <a href="https://support.discordapp.com/hc/en-us/articles/210298617-Markdown-Text-101-Chat-Formatting-Bold-Italic-Underline-" target="_blank">
          text formatting</a>
        which means that you can make your announcements stand out
        however you want.
      </p>
      <h2>Embed Customization</h2>
      <p>
        The <a href="https://dash.twitchbot.io" target="_blank">dashboard</a>
        allows you to customize notifications on a whole different level.
        You can choose the option to use a small embed (no stream preview)
        or no embed at all.
        Embed color is also customizable, so if you don't like the standard
        "Twitch purple," it can be changed to whatever fits best.
      </p>
    </CarbonSidebar>
  </div>
</template>

<style>
.section p, li {
  font-size: 1.1rem;
  line-height: 1.4;
  margin-top: 0;
}

.section h2 {
  margin-bottom: .25em;
}

.section a {
  text-decoration: underline;
}

.quote {
  padding: 1rem;
  background-color: var(--background-dark);
  border-radius: 5px;
  margin-bottom: 1rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}

.quote svg {
  margin-right: 5px;
  margin-top: 3px;
}

.quote.info svg {
  color: var(--accent-blue);
}

.quote.warn svg {
  color: var(--accent-yellow);
}
</style>

<script>
import CarbonSidebar from '@/components/CarbonSidebar.vue'
import PageHeader from '@/components/PageHeader.vue'

import AlertIcon from 'mdi/Alert.vue'

export default {
  components: {
    AlertIcon,
    CarbonSidebar,
    PageHeader
  }
}
</script>
