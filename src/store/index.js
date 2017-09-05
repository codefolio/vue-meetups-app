import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'http://travellingmoods.com/wp-content/uploads/2015/05/NewYorkTimesSquare.jpg',
        id: 'fasdfasdfasdf',
        title: 'Meetup in NYC',
        date: new Date(),
        location: 'NYC',
        description: 'New York, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus voluptatum minima aut enim eveniet, modi, labore voluptatem quod deserunt. Ratione odit, asperiores similique temporibus omnis quo sit incidunt. Facilis, at.'
      },
      {
        imageUrl: 'http://www.stgiles.com/wp-content/uploads/2016/02/londonA6.jpg',
        id: 'asdfawe',
        title: 'Meetup in London',
        date: new Date(),
        location: 'London',
        description: 'London, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus voluptatum minima aut enim eveniet, modi, labore voluptatem quod deserunt. Ratione odit, asperiores similique temporibus omnis quo sit incidunt. Facilis, at.'
      },
      {
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBfr72aPHmebObQjn2Zk14aofYw-yGv0aL0N69SSw9Z3d--BLCyQ',
        id: 'asdfawess',
        title: 'Meetup in Rio',
        date: new Date(),
        location: 'Rio',
        description: 'Rio, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus voluptatum minima aut enim eveniet, modi, labore voluptatem quod deserunt. Ratione odit, asperiores similique temporibus omnis quo sit incidunt. Facilis, at.'
      }
    ],
    user: null
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    },
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: 'alkdsfaldsjlfk'
      }
      // Reach out to firebase to store it
      commit('createMeetup', meetup)
    },
    signUserUp ({commit}, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid,
              registeredMeetups: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    },
    signUserIn ({commit}, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid,
              registeredMeetups: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    },
    user (state) {
      return state.user
    }
  }
})
