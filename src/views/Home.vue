<template>
  <div>
    <PageHeader class="index-header">
      <div class="main-content">
        <h1>The best Twitch bot for Discord</h1>
        <h2>TwitchBot has tons of features for Twitch users, streamers, and gamers that will make any server more exciting.</h2>
        <p style="margin-top:3em">
          <Button default="true" shine="true" href="#">
            Add to Discord
          </Button>
          <Button href="https://discord.gg/UNYzJqV" target="_blank">
            Support Server
          </Button>
        </p>
      </div>
      <div class="header-image">
        <img src="../assets/discord-mockup.svg">
      </div>
    </PageHeader>
    <div class="section">
      <FeatureCardList>
        <FeatureCard icon="twitch" icon-alt="Twitch logo" title="Access Twitch from Discord">
          View details and stats from your favorite streamers on Twitch. Get current view and stream status, current game, and a preview of the stream.
        </FeatureCard>
      </FeatureCardList>
    </div>
  </div>
</template>

<style scoped>
.index-header .main-content {
    max-width: 500px;
    text-align: left;
    flex-grow: 0;
}

.index-header .header-image, .index-header .header-image img {
    flex: 0 1 470px;
    height: auto;
    box-sizing: border-box;
    max-width: 470px;
}

.index-header .header-image {
    position: relative;
    animation: float 3.5s ease-in-out infinite;
}

.index-header h1 {
    font-size: 1.9rem;
    margin: 0 0 0.67em 0;
}

@media (max-width: 940px) {
    .index-header .header-image {
        display: none;
    }

    .index-header .main-content {
        text-align: center;
        max-width: none;
        flex-grow: 1;
    }

    .index-header h1 {
        font-size: 2.5em;
    }

    .index-header h2 {
        font-size: 1.5em;
    }

    .index-header Button {
        margin: 6px 0;
    }
}

@media (max-width: 670px) {
    .partner-images img {
        flex: 100% 1 1;
    }
}

@keyframes float {
    0% {top: 0em;}
    50% {top: 1em;}
    100% {top: 0em;}
}

</style>

<script>
import Button from '@/components/Button.vue'
import FeatureCard from '@/components/FeatureCard.vue'
import FeatureCardList from '@/components/FeatureCardList.vue'
import PageHeader from '@/components/PageHeader.vue'

export default {
  name: 'home',
  components: {
    Button,
    FeatureCard,
    FeatureCardList,
    PageHeader
  }
}
</script>
