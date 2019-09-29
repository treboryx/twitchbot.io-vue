<template>
  <div>
    <PageHeader class="new-header">
      <h1>
          Help us build a multilingual community.
          <TranslateIcon decorative :size="48" />
      </h1>
      <h2>Our goal is to create a community of Twitch users who don't have to worry about the language barrier.</h2>
      <p style="margin-top:3em">
        <Button default="true" target="_blank" href="https://crowdin.com/project/twitchbot" style="margin-left:0">
          Apply Now
        </Button>
        <Button inset="true" v-scroll-to="'#content'">
          Learn more <ArrowDownIcon />
        </Button>
      </p>
    </PageHeader>
    <CarbonSidebar id="content">
      <h2>TwitchBot for every language</h2>
      <p>
        We want to translate TwitchBot's UI into multiple other languages to make it easier to use for everyone, and we need the community's help to do so.
      </p>
      <h2>How it works</h2>
      <p>
        TwitchBot uses Crowdin for a smooth translation experience.
        Translations are automatically added into the bot after a restart.
      </p>
      <h2>Translator benefits</h2>
      <p>
        All translators will receive a lifetime subscription of
        <a href="/pro" target="_blank">TwitchBot Pro</a>
        as a thank-you for your time and efforts. The translator program is
        only volunteer-based and although we highly appreciate our translators' efforts, we do not provide monetary compensation.
      </p>
      <div class="flag-container">
        <img class="twemoji" src="https://canary.discordapp.com/assets/7bfa2e5b9008c10c09723e470491fd98.svg" alt="US flag">
        <img class="twemoji" src="https://canary.discordapp.com/assets/6c2b2176dab23f4abaceb3bf23338483.svg" alt="GB flag">
        <img class="twemoji" src="https://canary.discordapp.com/assets/d7911bd31655d985542bb6830922ac24.svg" alt="ES flag">
        <img class="twemoji" src="https://canary.discordapp.com/assets/5e0529582f11d6d30e74ed3a28ac486e.svg" alt="BR flag">
        <img class="twemoji" src="https://canary.discordapp.com/assets/427c845111c8328fb785dbfe7052337e.svg" alt="FR flag">
        <img class="twemoji" src="https://canary.discordapp.com/assets/bf5b3a6c0c677f13249b3b1c4142671d.svg" alt="JP flag">
      </div>
    </CarbonSidebar>
    <AccentedArea>
      <div class="section" style="text-align:center">
        <h1>Become a translator</h1>
        <p class="standalone">
          We're super excited that you're here to help make TwitchBot usable by a more diverse crowd.
          Please make sure that you join our
          <a href="https://discord.gg/UNYzJqV" target="_blank">Discord server</a>
          so we can contact you.
        </p>
        <p class="standalone">
          <Button default="true" target="_blank" href="https://crowdin.com/project/twitchbot">
            Apply Now
          </Button>
        </p>
      </div>
    </AccentedArea>
  </div>
</template>

<style>
.section p {
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

.flag-container {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}

img.twemoji {
  height: 39px;
  text-align: center;
  padding: 0 5px;
}
</style>

<script>
import AccentedArea from '@/components/AccentedArea.vue'
import Button from '@/components/Button.vue'
import CarbonSidebar from '@/components/CarbonSidebar.vue'
import PageHeader from '@/components/PageHeader.vue'

import ArrowDownIcon from 'mdi/ArrowDown.vue'
import TranslateIcon from 'mdi/Translate.vue'

export default {
  components: {
    AccentedArea,
    ArrowDownIcon,
    Button,
    CarbonSidebar,
    PageHeader,
    TranslateIcon
  }
}
</script>
