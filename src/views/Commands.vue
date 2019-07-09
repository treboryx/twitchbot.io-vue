<template>
  <div>
    <PageHeader style="text-align:center">
      <h1>Commands</h1>
      <h2>View a list of TwitchBot's available commands.</h2>
    </PageHeader>
    <CarbonSidebar>
      <p class="big">
        New to TwitchBot? Get a
        <a href="https://support.twitchbot.io/articles/d1b179de-dc32-4066-845f-7dd66aa02493">quick guide</a>
        on how to get started.
        <br>
        If you're feeling lost, you can join our
        <a href="https://discord.gg/UNYzJqV">Discord server</a>
        to get help.
      </p>
      <p class="big">
        Type <code>!twitch help</code> in Discord to see more detailed help.
        To view a list of commands from Discord, type <code>!twitch commands</code>.
      </p>
      <p class="big">
        Click on a section to view more details and a list of commands.
      </p>
      <details>
          <summary>
            <span class="title">General</span>
            <span class="desc">
              Information about TwitchBot such as ping and credits
            </span>
          </summary>
          <table>
            <tr><th>Command</th><th>Description</th></tr>
            <tr><td>help</td><td>Shows bot help</td></tr>
            <tr><td>info</td><td>Shows bot information</td></tr>
            <tr><td>lang</td><td>Sets the bot language</td></tr>
            <tr><td>invite</td><td>Displays a link to add TwitchBot to your server</td></tr>
            <tr><td>status</td><td>Shows Twitch API status</td></tr>
            <tr><td>ping</td><td>Pong!</td></tr>
          </table>
      </details>
      <details>
        <summary>
          <span class="title">Stream Notifications</span>
          <span class="desc">
            Set up and control messages that let you know when a streamer goes live
          </span>
        </summary>
        <div class="quote info">
          <FontAwesomeIcon icon="info-circle" />
          Want an easier way to manage notifications?
          Try out the <a href="https://dash.twitchbot.io/servers" target="_blank">dashboard</a>!
        </div>
        <table>
          <tr><th>Command</th><th>Description</th></tr>
          <tr><td>notif add</td><td>Adds a streamer notification for a streamer to the specified channel</td></tr>
          <tr><td>notif remove</td><td>Removes a streamer notification</td></tr>
          <tr><td>notif list</td><td>Lists active notifications for the specified channel</td></tr>
          <tr><td>notif preview</td><td>Preview a notification message</td></tr>
          <tr><td>notif formatting</td>
            <td>
              Shows variables that you can insert into notification messages.
              You can also read the <a href="/formatting" target="_blank">
                formatting guide
              </a>
              to learn more about customizing notifications.
            </td>
          </tr>
        </table>
      </details>
      <details>
        <summary>
          <span class="title">Live Role</span>
          <span class="desc">
            Set up and configure a role to give to users when they start streaming
          </span>
        </summary>
        <div class="quote info">
          <FontAwesomeIcon icon="info-circle" />
          Want an easier way to manage live role?
          Try out the <a href="https://dash.twitchbot.io/servers" target="_blank">dashboard</a>!
        </div>
        <table>
          <tr><th>Command</th><th>Description</th></tr>
          <tr><td>live_role set</td><td>Sets the Live Role for the current server</td></tr>
          <tr><td>live_role filter</td><td>Restricts Live Role to users with a specific role</td></tr>
          <tr><td>live_role delete</td><td>Removes the Live Role configuration</td></tr>
          <tr><td>live_role view</td><td>Tells you which role is currently set up</td></tr>
        </table>
      </details>
      <details>
        <summary>
          <span class="title">Audio</span>
          <span class="desc">
            Listen to a Twitch stream from any voice channel
          </span>
        </summary>
        <table>
          <tr><th>Command</th><th>Description</th></tr>
          <tr><td>listen</td><td>Listen to a Twitch stream in the current voice channel</td></tr>
          <tr><td>nowplaying</td><td>Shows the stream that is currently playing, if any</td></tr>
          <tr><td>leave</td><td>Leave the voice channel</td></tr>
        </table>
      </details>
      <details>
        <summary>
          <span class="title">Users, Streams, and Games</span>
          <span class="desc">
            View generic profile info on various aspects of Twitch
          </span>
        </summary>
        <table>
          <tr><th>Command</th><th>Description</th></tr>
          <tr><td>user</td><td>Gets info on a Twitch channel</td></tr>
          <tr><td>stream user</td><td>Gets info on a channel's stream</td></tr>
          <tr><td>stream watch</td><td>Shows a link to watch a Twitch stream in Discord</td></tr>
          <tr><td>stream game</td><td>Fetches a random stream of someone playing the specified game.</td></tr>
          <tr><td>stream top</td><td>Fetches a random stream that is popular right now</td></tr>
          <tr><td>game</td><td>Gets info on a Twitch game</td></tr>
          <tr><td>top</td><td>Gets the top ten most popular games on Twitch</td></tr>
        </table>
      </details>
      <details>
        <summary>
          <span class="title">Clips</span>
          <span class="desc">
            Get clips from your favorite streamers and games
          </span>
        </summary>
        <table>
          <tr><th>Command</th><th>Description</th></tr>
          <tr><td>clips from</td><td>Gets a random clip from the specified Twitch user</td></tr>
          <tr><td>clips game</td><td>Gets a random clip from the specified game</td></tr>
          <tr><td>clips trending</td><td>Gets a trending clip</td></tr>
          <tr><td>clips uservoted</td><td>Gets one of the most popular clips voted by TwitchBot users</td></tr>
        </table>
      </details>
      <details>
        <summary>
          <span class="title">Player Stats</span>
          <span class="desc">
            Check your game statistics and rankings
          </span>
        </summary>
        <table>
          <tr><th>Command</th><th>Description</th></tr>
          <tr><td>overwatch</td><td>Shows Overwatch player stats</td></tr>
          <tr><td>fortnite</td><td>Shows Fortnite player stats</td></tr>
        </table>
      </details>
    </CarbonSidebar>
  </div>
</template>

<style>
p.big {
  font-size: 1.1rem;
}

p.big a, .quote a {
  text-decoration: underline;
}

details {
  margin: .5rem 0;
}

summary .title {
  cursor: pointer;
  font: 500 1em 'Poppins', 'Roboto', sans-serif;
  user-select: none;
  -moz-user-select: none;
}

summary .desc {
  display: block;
  margin-top: .25rem;
  opacity: .7;
  user-select: none;
  -moz-user-select: none;
  margin-bottom: .75rem;
}

table {
  background-color: #12191f;
  border-radius: 5px;
  padding-bottom: .5rem;
  width: 100%;
}

th {
  font-weight: 400;
  font-family: 'Poppins', 'Roboto', sans-serif;
  text-align: left;
  padding: .5rem;
}

td {
  color: rgba(255,255,255,.8);
  padding: .3rem .5rem;
}

td:not(:last-of-type) {
    font-family: 'Inconsolata', monospace;
}

.quote {
  padding: 1rem;
  background-color: #12191f;
  border-radius: 5px;
  margin-bottom: 1rem;
}

.quote svg {
  margin-right: 3px;
}

.quote.info svg {
  color: rgb(52, 152, 219);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .1s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

<script>
import CarbonSidebar from '@/components/CarbonSidebar.vue'
import PageHeader from '@/components/PageHeader.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faInfoCircle)

export default {
  components: {
    CarbonSidebar,
    FontAwesomeIcon,
    PageHeader
  }
}
</script>
