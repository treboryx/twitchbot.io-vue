<template>
  <div>
    <PageHeader>
      <div class="main-content">
        <h1>Boost your TwitchBot experience.</h1>
        <h2>Become a TwitchBot Pro with access to exclusive features, faster notifications, and less limits for you and your server.</h2>
        <p style="margin-top:3em">
          <Button default="true" shine="true">
            $2.50 / Month
          </Button>
          <Button inset="true" v-scroll-to="'#content'">
            Learn more
          </Button>
        </p>
      </div>
    </PageHeader>
    <div class="section" id="content">
      <h2 style="text-align:center">Check out what's included</h2>
      <FeatureCardList>
        <FeatureCard title="Unlimited notifications" icon="push-notifications">
          Bypass the normal 25 notification limit and add more streamer notifications in your server.
        </FeatureCard>
        <FeatureCard title="Exclusive bot" icon="twitch">
          Get access to a special Pro-only bot with faster response times and up to 99.9% uptime.
        </FeatureCard>
        <FeatureCard title="Listen to streams faster" icon="room-sound">
          Skip upvoting when you listen to streams with TwitchBot.
        </FeatureCard>
        <FeatureCard title="Moderation commands" icon="closed-topic" icon-alt="Twitch logo">
          Keep your server squeaky clean with quick and easy moderation commands, a must-have for any public community.
        </FeatureCard>
        <FeatureCard title="Access to beta features" icon="key-security" icon-alt="Twitch logo">
          Be one of the first users to try out and test cutting-edge features for TwitchBot.
        </FeatureCard>
        <FeatureCard title="Some extra goodies" icon="facebook-like" icon-alt="Twitch logo">
          Get a colorful role in our Discord server to show your support, along with a private Pro announcements channel.
        </FeatureCard>
      </FeatureCardList>
    </div>
    <AccentedArea>
      <div class="section">
        <h2 style="text-align:center">Choose the right plan for you</h2>
        <FeatureCardList style="justify-content:space-evenly;align-items:flex-start">
          <PricingCard tier-name="TwitchBot Pro 1x" price="2.50" rid="3677518">
            <span>
              <FontAwesomeIcon icon="check" />
              Everything listed above
            </span>
          </PricingCard>
          <PricingCard tier-name="TwitchBot Pro 3x" price="5" rid="2706211">
            <span>
              <FontAwesomeIcon icon="check" />
              Everything listed above
            </span>
            <span>
              <FontAwesomeIcon icon="check" />
              Pro bot in 3 servers
            </span>
          </PricingCard>
        </FeatureCardList>
      </div>
    </AccentedArea>
  </div>
</template>

<style>
header .main-content {
  max-width: calc(700px);
  margin: auto;
  padding: 0 1rem;
  margin-bottom: 0;
}
</style>

<script>
import AccentedArea from '@/components/AccentedArea.vue'
import Button from '@/components/Button.vue'
import FeatureCard from '@/components/FeatureCard.vue'
import FeatureCardList from '@/components/FeatureCardList.vue'
import PageHeader from '@/components/PageHeader.vue'
import PricingCard from '@/components/PricingCard.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCheck)

export default {
  components: {
    AccentedArea,
    Button,
    FeatureCard,
    FeatureCardList,
    FontAwesomeIcon,
    PageHeader,
    PricingCard
  }
}
</script>
