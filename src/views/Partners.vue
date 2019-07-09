<template>
  <div>
    <PageHeader>
      <h1>Bringing communities together.</h1>
      <h2>Boost your streaming organization or personal server with exclusive TwitchBot features and events.</h2>
      <p style="margin-top:3em">
        <Button default="true" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdyyVe0erZbfbv2iHW1Tiap2Bw_Y2fBkKYv3A5dwx-OKGVqPg/viewform" style="margin-left:0">
          Apply Now
        </Button>
        <Button inset="true" v-scroll-to="'#content'">
          Learn about Partners <ArrowDownIcon />
        </Button>
      </p>
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
        <FeatureCard title="Moderation commands" icon="closed-topic">
          Keep your server squeaky clean with quick and easy moderation commands, a must-have for any public community.
        </FeatureCard>
        <FeatureCard title="PR Opportunities" icon="news">
          Keep your server squeaky clean with quick and easy moderation commands, a must-have for any public community.
        </FeatureCard>
        <FeatureCard title="Access to beta features" icon="key-security">
          Be one of the first users to try out and test cutting-edge features for TwitchBot.
        </FeatureCard>
        <FeatureCard title="Some extra goodies" icon="facebook-like">
          Get a colorful role in our Discord server to show your support, along with a private Pro announcements channel.
        </FeatureCard>
      </FeatureCardList>
    </div>
    <div class="section">
      <CarbonAd />
    </div>
    <div class="section">
      <h2 style="text-align:center">Requirements</h2>
      <FeatureCardList style="justify-content:center;align-items:flex-start">
        <PricingCard tier-name="Streamers" :hide-price="true">
          <span>
            <CheckIcon fillColor="#43b581" />
            2,500 followers
          </span>
          <span>
            <CheckIcon fillColor="#43b581" />
            Public or sub-only Discord server
          </span>
          <span>
            <CheckIcon fillColor="#43b581" />
            Must actively use TwitchBot
          </span>
        </PricingCard>
        <PricingCard tier-name="Professional organizations" :hide-price="true">
          <span>
            <CheckIcon fillColor="#43b581" />
            1,000 followers on any social media
          </span>
          <span>
            <CheckIcon fillColor="#43b581" />
            Public Discord server
          </span>
          <span>
            <CheckIcon fillColor="#43b581" />
            Must actively use TwitchBot
          </span>
        </PricingCard>
        <PricingCard tier-name="eSports teams" :hide-price="true">
          <span>
            <CheckIcon fillColor="#43b581" />
            Average ~1,000 followers per streamer
          </span>
          <span>
            <CheckIcon fillColor="#43b581" />
            Professionally recognized (e.g. ESIC member)
          </span>
          <span>
            <CheckIcon fillColor="#43b581" />
            Public Discord server
          </span>
          <span>
            <CheckIcon fillColor="#43b581" />
            Must actively use TwitchBot
          </span>
        </PricingCard>
        <PricingCard tier-name="Streamer networks" :hide-price="true">
          <span>
            <CheckIcon fillColor="#43b581" />
            30+ active streamers
          </span>
          <span>
            <CheckIcon fillColor="#43b581" />
            At least one streamer with 1,000 followers
          </span>
          <span>
            <CheckIcon fillColor="#43b581" />
            Moderated (application required to join)
          </span>
          <span>
            <CheckIcon fillColor="#43b581" />
            Public Discord server
          </span>
          <span>
            <CheckIcon fillColor="#43b581" />
            Must actively use TwitchBot
          </span>
        </PricingCard>
      </FeatureCardList>
    </div>
    <AccentedArea>
      <div class="section" style="text-align:center">
        <h1>Become a partner</h1>
        <p class="standalone">
          <Button default="true" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdyyVe0erZbfbv2iHW1Tiap2Bw_Y2fBkKYv3A5dwx-OKGVqPg/viewform" style="margin-left:0">
            Apply Now
          </Button>
        </p>
        <p class="standalone">
          We'll get back to you within about 3 business days.
          In order to be accepted, you must be in our
          <a href="https://discordapp.com/invite/UNYzJqV" target="_blank">Discord server</a>.
        </p>
        <p class="standalone">
          Just a Twitch fan, or don't meet the requirements? Check out
          <a href="/pro">TwitchBot Pro</a>
        </p>
      </div>
    </AccentedArea>
  </div>
</template>

<script>
import AccentedArea from '@/components/AccentedArea.vue'
import Button from '@/components/Button.vue'
import CarbonAd from '@/components/CarbonAd.vue'
import FeatureCard from '@/components/FeatureCard.vue'
import FeatureCardList from '@/components/FeatureCardList.vue'
import PageHeader from '@/components/PageHeader.vue'
import PricingCard from '@/components/PricingCard.vue'

import ArrowDownIcon from 'mdi/ArrowDown.vue'
import CheckIcon from 'mdi/Check.vue'

export default {
  components: {
    AccentedArea,
    ArrowDownIcon,
    Button,
    CarbonAd,
    CheckIcon,
    FeatureCard,
    FeatureCardList,
    PageHeader,
    PricingCard
  }
}
</script>
