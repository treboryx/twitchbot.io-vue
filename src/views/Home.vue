<template>
  <div>
    <PageHeader class="index-header new-header">
      <div class="main-content">
        <h1>
          The best Twitch bot for Discord.
        </h1>
        <h2>TwitchBot has tons of features for Twitch users, streamers, and gamers that will make any server more exciting.</h2>
        <p style="margin-top:3em">
          <Button default="true" shine="true" @click.native="openBotInvite()">
            Add to Discord
          </Button>
          <Button href="https://dash.twitchbot.io" target="_blank">
            Dashboard
          </Button>
          <span>
            Need help with TwitchBot? Visit our
            <a href="https://discord.gg/UNYzJqV" target="_blank">Discord server</a>
            or the
            <a href="https://support.twitchbot.io" target="_blank">support website</a>.
          </span>
        </p>
      </div>
      <img class="header-image" src="@/assets/discord-mockup.svg">
    </PageHeader>
    <div class="section fcard-list">
      <FeatureCardList>
        <FeatureCard title="Access Twitch from Discord" icon="twitch" icon-alt="Twitch logo">
          View details and stats from your favorite streamers on Twitch. See the most popular games and streams on Twitch with just one command.
        </FeatureCard>
        <FeatureCard title="Easy-to-use dashboard" icon="dashboard" icon-alt="Dashboard configuration website">
          Manage your server's stream notifications, live role, and connected accounts with a convenient <a href="https://dash.twitchbot.io" target="_blank">web dashboard</a>.
        </FeatureCard>
        <FeatureCard title="Fast stream notifications" icon="push-notifications" icon-alt="Twitch streamer notifications for Discord">
          Get an in-chat notification when your favorite streamers start broadcasting. Choose from a wide range of customization options for the best alerts.
        </FeatureCard>
        <FeatureCard title="View the top highlights and clips" icon="video-playlist" icon-alt="Twitch clips on Discord">
          Search Twitch's wide selection of clips recorded by tons of users. Search by trending, a certain game, or a Twitch streamer.
        </FeatureCard>
        <FeatureCard title="Tools for streamers in your server" icon="elevator" icon-alt="Twitch streaming users on Discord">
          Give members who are streaming on Twitch a configurable role to show others their special status and interest them in their stream.
        </FeatureCard>
        <FeatureCard title="Listen to streams in voice chat" icon="room-sound" icon-alt="Listen to Twitch streams in Discord">
          You can listen to any live Twitch stream in voice chat with all of your friends with nearly seamless audio quality.
        </FeatureCard>
        <FeatureCard title="Stats from your favorite games" icon="controller" icon-alt="Fortnite and Overwatch stats">
          Take a look at any player's Fortnite or Overwatch stats by entering their in-game name. See a wide variety of stats for each game.
        </FeatureCard>
        <FeatureCard title="Available in multiple languages" icon="language" icon-alt="Multiple languages">
          TwitchBot has been translated to a variety of languages including Chinese, French, Hungarian, Indonesian, Italian, Lithuanian, Russian, Spanish, Turkish, and <router-link to="/languages">more</router-link>.
        </FeatureCard>
      </FeatureCardList>
    </div>
    <div class="section" style="margin-bottom:17rem">
      <CarbonAd />
    </div>
    <AccentedArea>
      <div class="section" style="position:relative;top:-20rem;margin-bottom:-15rem">
        <h1 style="text-align:center">Used by the best streamers around</h1>
        <slick :options="slickOptions">
          <TestimonialCard name="Rykouh" icon-url="https://static-cdn.jtvnw.net/jtv_user_pictures/f116d58ca512c6c3-profile_image-70x70.jpeg">
            The ease of use of a website with the quick alerts are a necessity if you want to grow your stream.
          </TestimonialCard>
          <TestimonialCard name="CRBN_Koa" icon-url="https://static-cdn.jtvnw.net/jtv_user_pictures/99760927-9b87-4821-8147-8ce9a0437682-profile_image-70x70.png">
            Best bot for Discord and streaming integrations. Easy to set up and even easier to enjoy. Tried a LOT of others to finally find this gem.
          </TestimonialCard>
          <TestimonialCard name="WorldAnvil" icon-url="https://static-cdn.jtvnw.net/jtv_user_pictures/41ad88ec-a0a5-4be8-a996-d3cb1c294493-profile_image-70x70.png">
            The simple stream notifications have been invaluable for us when organizing raids to allied channels, and for solidifying a community's common interests by providing them an influx of stream content to keep an eye on.
          </TestimonialCard>
          <TestimonialCard name="SupaSpark" org="Flux Gaming Community" icon-url="https://static-cdn.jtvnw.net/jtv_user_pictures/3fa3e9fa-b6a1-4e59-b453-a651e51581d1-profile_image-70x70.png">
            TwitchBot provides exciting features, a user-friendly dashboard, and precise alerts to help my community streamers grow. This is the best investment I have made for my community by far.
          </TestimonialCard>
          <TestimonialCard name="peacefaker" icon-url="https://static-cdn.jtvnw.net/jtv_user_pictures/f2cdf893-569d-4883-a5f8-bd650e8142da-profile_image-70x70.png">
            I use TwitchBot to manage streaming notifications on a Discord server with over 300 streamers and gamers. We enjoy the easy setup and the great support!
          </TestimonialCard>
          <TestimonialCard name="jimmy_chew" icon-url="https://cdn.discordapp.com/avatars/94790092429729792/d5fb31297d8e92010764e58faafc8a6c.png">
            The role-based stream announcements are solid gold!
          </TestimonialCard>
        </slick>
        <FeatureCardList style="align-items:center">
          <PartnerImage src="stream_elements_logo.webp" title="StreamElements" href="https://streamelements.com" />
          <PartnerImage src="team_secret_logo.png" title="Team Secret" href="https://teamsecret.gg" />
          <PartnerImage src="divarion_logo.svg" title="Divarion" href="https://divarion.com" />
          <PartnerImage src="playportal_logo.png" title="PlayPortal" href="https://playportal.eu" />
        </FeatureCardList>
      </div>
      <CallToAction title="Improve your server with TwitchBot" buttonText="Add to Discord" :buttonClick="openBotInvite">
        Add TwitchBot to your Discord server and discover how easy it is
        to engage your community with several helpful features. All it
        takes is a few clicks to set everything up.
      </CallToAction>
    </AccentedArea>
    <ModalBox title="How to get started" v-show="showAfterInviteModal" :close-method="() => {showAfterInviteModal = false}">
      <span class="modal-text">
        Thanks for adding TwitchBot to your server.
        New to TwitchBot? Click on one of the links below to
        get help.
      </span>
      <a class="modal-card" target="_blank" href="https://support.twitchbot.io/articles/d1b179de-dc32-4066-845f-7dd66aa02493">
        <span class="minor">TwitchBot Support</span>
        <span class="title">Getting Started with TwitchBot</span>
      </a>
      <a class="modal-card" target="_blank" href="https://support.twitchbot.io/articles/e3ee24cc-a18e-4371-8684-220f7f5478d6">
        <span class="minor">TwitchBot Support</span>
        <span class="title">How do I add a notification?</span>
      </a>
      <a class="modal-card" target="_blank" href="https://dash.twitchbot.io">
        <span class="minor">TwitchBot Dashboard</span>
        <span class="title">Configure TwitchBot online</span>
      </a>
      <a class="modal-card" target="_blank" href="https://discord.gg/UNYzJqV">
        <span class="minor">Discord</span>
        <span class="title">TwitchBot Discord server</span>
      </a>
    </ModalBox>
  </div>
</template>

<style>
.index-header span {
  display: block;
  margin-left: 8px;
  color: var(--text-tertiary);
}

.index-header span a {
  text-decoration: underline;
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

.slick-slide > div {
  margin: 0 10px;
}

.fcard-list {
  max-width: calc(800px + 2rem);
}

.fcard-list .card {
  flex: 0 1 400px;
}

footer {
  background-color: var(--background-darker);
}

@media (max-width: 940px) {
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

</style>

<script>
import AccentedArea from '@/components/AccentedArea.vue'
import Button from '@/components/Button.vue'
import CallToAction from '@/components/CallToAction.vue'
import CarbonAd from '@/components/CarbonAd.vue'
import FeatureCard from '@/components/FeatureCard.vue'
import FeatureCardList from '@/components/FeatureCardList.vue'
import ModalBox from '@/components/ModalBox.vue'
import PageHeader from '@/components/PageHeader.vue'
import PartnerImage from '@/components/PartnerImage.vue'
import Slick from 'vue-slick'
import TestimonialCard from '@/components/TestimonialCard'

function _popupAtScreenCenter (url, title, w, h) {
  // https://stackoverflow.com/questions/4068373/center-a-popup-window-on-screen

  var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX
  var dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY

  var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width
  var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height

  var left = (width - w) / 2 + dualScreenLeft
  var top = (height - h) / 2 + dualScreenTop
  var newWindow = window.open(url, title, 'scrollbars=yes,width=' + w + ',height=' + h + ',top=' + top + ',left=' + left)

  if (window.focus) newWindow.focus()
  return newWindow
}

export default {
  name: 'home',
  components: {
    AccentedArea,
    Button,
    CallToAction,
    CarbonAd,
    FeatureCard,
    FeatureCardList,
    ModalBox,
    PageHeader,
    PartnerImage,
    Slick,
    TestimonialCard
  },
  created () {
    let link = document.createElement('link')
    link.setAttribute('rel', 'stylesheet')
    link.setAttribute('href', 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css')
    document.head.appendChild(link)
  },
  data () {
    return {
      showAfterInviteModal: false,
      slickOptions: {
        infinite: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
          {
            breakpoint: 710,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      }
    }
  },
  methods: {
    openBotInvite () {
      _popupAtScreenCenter(
        'https://discordapp.com/oauth2/authorize?client_id=375805687529209857&permissions=842452032&scope=bot',
        'Invite TwitchBot to your server',
        400, 600
      )
      this.showAfterInviteModal = true
    }
  }
}
</script>
