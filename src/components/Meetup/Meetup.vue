<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-media :src="meetup.imageUrl" height="400px"></v-card-media>
          <v-card-title>
            <h6 class="primary--text">{{ meetup.title }}</h6>
          </v-card-title>          
          <v-card-text>
            <div class="primary--text">{{ meetup.date | date }} - {{ meetup.location }}</div>
            <p>{{ meetup.description }}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="primary" >Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  export default {
    props: ['id'],
    computed: {
      meetup () {
        return this.$store.getters.loadedMeetup(this.id)
      }
    }
  }
</script>