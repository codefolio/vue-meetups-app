<template>
  <v-app toolbar footer>
    <v-navigation-drawer
      persistent
      v-model="drawer"
      light
      overflow
    >
      <v-list dense>
        <v-list-tile v-for="item in items" :key="item.title" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="primary" dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title><router-link to="/" tag="span" style="cursor: pointer">DevMeetups</router-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon><v-icon>search</v-icon></v-btn>      
    </v-toolbar>
    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
  </v-app>
</template>


<script>
  export default {
    data () {
      return {
        drawer: false,
        items: [
          { title: 'View Meetups', icon: 'supervisor_account', link: '/meetups' },
          { title: 'Organize Meetup', icon: 'room', link: '/meetup/new' },
          { title: 'Profile', icon: 'person', link: '/profile' },
          { title: 'Sign up', icon: 'face', link: '/signup' },
          { title: 'Sign in', icon: 'lock_open', link: '/signin' }
        ]
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
