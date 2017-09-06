<template>
  <v-app toolbar footer>
    <v-navigation-drawer
      persistent
      v-model="drawer"
      light
      overflow
    >
      <v-list dense>
        <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="userIsAuthenticated" @click="onLogout">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Logout</v-list-tile-title>
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
        items: ''
      }
    },
    computed: {
      menuItems () {
        let menuItems = [
          { title: 'Sign up', icon: 'face', link: '/signup' },
          { title: 'Sign in', icon: 'lock_open', link: '/signin' }
        ]
        if (this.userIsAuthenticated) {
          menuItems = [
            { title: 'View Meetups', icon: 'supervisor_account', link: '/meetups' },
            { title: 'Organize Meetup', icon: 'room', link: '/meetup/new' },
            { title: 'Profile', icon: 'person', link: '/profile' }
          ]
        }
        return menuItems
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    },
    methods: {
      onLogout () {
        this.$store.dispatch('logout')
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
