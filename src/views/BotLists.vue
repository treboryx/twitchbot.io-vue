<template>
  <div>
    <PageHeader>
      <h1>Bot lists</h1>
      <h2>A list of external Discord bot listing websites that TwitchBot is referenced on.</h2>
    </PageHeader>
    <CarbonSidebar>
      <div id="bot-lists">
        <a href="https://discordbots.org/bot/twitch" target="_blank">https://discordbots.org/bot/twitch</a>
        <a href="https://botsfordiscord.com/bots/375805687529209857" target="_blank">https://botsfordiscord.com/bots/375805687529209857</a>
        <a href="https://discord.bots.gg/bots/375805687529209857" target="_blank">https://discord.bots.gg/bots/375805687529209857</a>
        <a href="https://bots.ondiscord.xyz/bots/375805687529209857" target="_blank">https://bots.ondiscord.xyz/bots/375805687529209857</a>
        <a href="https://discordbotlist.com/bots/375805687529209857" target="_blank">https://discordbotlist.com/bots/375805687529209857</a>
        <a href="https://discordbotindex.com/bot/375805687529209857" target="_blank">https://discordbotindex.com/bot/375805687529209857</a>
        <a href="https://discord.boats/bot/375805687529209857" target="_blank">https://discord.boats/bot/375805687529209857</a>
      </div>
    </CarbonSidebar>
    <AccentedArea></AccentedArea>
  </div>
</template>

<style>
#bot-lists a {
  display: block;
  text-decoration: underline;
  line-height: 2;
}
</style>

<script>
import AccentedArea from '@/components/AccentedArea.vue'
import CarbonSidebar from '@/components/CarbonSidebar.vue'
import PageHeader from '@/components/PageHeader.vue'

export default {
  components: {
    AccentedArea,
    CarbonSidebar,
    PageHeader
  }
}
</script>
