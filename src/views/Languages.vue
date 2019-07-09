<template>
  <div>
    <PageHeader>
      <h1>Available Translations</h1>
      <p>
        A list of languages that TwitchBot's Discord interface has been (or is currently being) translated into.
        To set TwitchBot's language, type <code>!twitch lang &lt;language-code&gt;</code>.
        To view a list of available language codes, type <code>!twitch lang help</code>.
      </p>
      <p>
        All of TwitchBot's translations are community-driven.
        If you would like to help translate TwitchBot, check out our
        <router-link to="/translators">translation program</router-link>.
      </p>
    </PageHeader>
    <CarbonSidebar>
      <div class="lang">
        <h2>
          <img class="twemoji" src="https://discordapp.com/assets/cf284aea8c5a88741efd4e128180366b.svg" alt="CN flag">
          Chinese (Simplified)
          <code>zh-CN</code>
        </h2>
      </div>
      <div class="lang">
        <h2>
          <img class="twemoji" src="https://discordapp.com/assets/45e49f3ababf78d9e3f2ac494f988ddc.svg" alt="TW flag">
          Chinese (Traditional)
          <code>zh-TW</code>
        </h2>
      </div>
      <div class="lang">
        <h2>
          <img class="twemoji" src="https://discordapp.com/assets/42c8e75954826dd9cb589a6e17322f7a.svg" alt="CS flag">
          Czech
          <code>cs</code>
        </h2>
      </div>
      <div class="lang">
        <h2>
          <img class="twemoji" src="https://discordapp.com/assets/976ad58b72428363dc066c0f99727424.svg" alt="NL flag">
          Dutch
          <code>nl</code>
        </h2>
      </div>
      <div class="lang">
        <h2>
          <img class="twemoji" src="https://discordapp.com/assets/3e544ea1ece2faef8549a45024d7737e.svg" alt="FI flag">
          Finnish
          <code>fi</code>
        </h2>
      </div>
      <div class="lang">
        <h2>
          <img class="twemoji" src="https://discordapp.com/assets/427c845111c8328fb785dbfe7052337e.svg" alt="FR flag">
          French
          <code>fr</code>
        </h2>
      </div>
      <div class="lang">
        <h2>
          <img class="twemoji" src="https://discordapp.com/assets/a9c94412aab983dee63f57bc2c096fae.svg" alt="DE flag">
          German
          <code>de</code>
        </h2>
      </div>
      <div class="lang">
        <h2>
          <img class="twemoji" src="https://discordapp.com/assets/6231ac51dbd0c0e5ebf4a558bc5daddd.svg" alt="HE flag">
          Hebrew <code>he</code>
        </h2>
      </div>
      <div class="lang">
        <h2>
          <img class="twemoji" src="https://canary.discordapp.com/assets/6eed577e184d922e97374184af656554.svg" alt="HI flag">
          Hindi
          <code>hi</code>
        </h2>
      </div>
      <div class="lang">
        <h2>
          <img class="twemoji" src="https://discordapp.com/assets/f2a1ad637508714c905a69cd341894b4.svg" alt="HU flag">
          Hungarian
          <code>hu</code>
        </h2>
      </div>
      <div class="lang">
        <h2>
          <img class="twemoji" src="https://discordapp.com/assets/af05083c3601e8866a67d7bbe93d771b.svg" alt="ID flag">
          Indonesian
          <code>id</code>
        </h2>
      </div>
      <div class="lang">
        <h2>
          <img class="twemoji" src="https://discordapp.com/assets/f740368e08d0e77f34546769b88d7ca6.svg" alt="IT flag">
          Italian
          <code>it</code>
        </h2>
      </div>
      <div class="lang">
        <h2>
          <img class="twemoji" src="https://canary.discordapp.com/assets/6eed577e184d922e97374184af656554.svg" alt="HI flag">
          Kannada
          <code>kn</code>
        </h2>
      </div>
      <div class="lang">
        <h2>
          <img class="twemoji" src="https://discordapp.com/assets/e497cd1e8efb86ec32b707a634ac2f91.svg" alt="LT flag">
          Lithuanian
          <code>lt</code>
        </h2>
      </div>
      <div class="lang">
        <h2>
          <img class="twemoji" src="https://discordapp.com/assets/d7ec8b8de889d90fe95deb2344bc69fa.svg" alt="FA flag">
          Persian
          <code>fa</code>
        </h2>
      </div>
      <div class="lang">
        <h2>
          <img class="twemoji" src="https://discordapp.com/assets/483d626952c2735093120b512f27198f.svg" alt="PL flag">
          Polish
          <code>pl</code>
        </h2>
      </div>
      <div class="lang">
        <h2>
          <img class="twemoji" src="https://discordapp.com/assets/b253e692bb65b5c0ede87177e78e8405.svg" alt="PT flag">
          Portugese
          <code>pt-PT</code>
        </h2>
      </div>
      <div class="lang">
        <h2>
          <img class="twemoji" src="https://discordapp.com/assets/e4b276d04927069a7cc48cc3d10d3468.svg" alt="RU flag">
          Russian <code>ru</code>
        </h2>
      </div>
      <div class="lang">
        <h2>
          <img class="twemoji" src="https://discordapp.com/assets/d7911bd31655d985542bb6830922ac24.svg" alt="ES flag">
          Spanish
          <code>es-ES</code>
        </h2>
      </div>
      <div class="lang">
        <h2>
          <img class="twemoji" src="https://discordapp.com/assets/bf7d9389ab36e9417de5e1ebbff03831.svg" alt="SE flag">
          Swedish
          <code>sv-SE</code>
        </h2>
      </div>
      <div class="lang">
        <h2>
          <img class="twemoji" src="https://discordapp.com/assets/dc5d1f228892cc1a56cd510af5259948.svg" alt="TR flag">
          Turkish
          <code>tr</code>
        </h2>
      </div>
    </CarbonSidebar>
  </div>
</template>

<style>
.lang {
  margin: 1rem 0;
  text-align: left;
}

.lang h2 {
  text-align: left;
}

.lang h2 small {
  opacity: .8;
}

h2 .twemoji {
  height: 28px;
  vertical-align: middle;
}

header p a:not(.button):not(.inset-button) {
  text-decoration: underline;
}
</style>

<script>
import CarbonSidebar from '@/components/CarbonSidebar.vue'
import PageHeader from '@/components/PageHeader.vue'

export default {
  components: {
    CarbonSidebar,
    PageHeader
  }
}
</script>
