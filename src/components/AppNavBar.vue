<template lang="pug">
.AppNavBar
  nav.navbar.navbar-default
    .navbar-header
      button.navbar-toggle.collapsed(type='button', data-toggle='collapse', data-target='#navbar1')
        span.icon-bar
        span.icon-bar
        span.icon-bar
      a.navbar-brand(href='/')
        span.active.brandTitle Let's Lunch
    #navbar1.navbar-collapse.collapse
      ul.nav.navbar-nav
        li
          a(@click="routeToAbout") About
        li
          a(@click="routeToFeedback") Feedback
        li.button(v-if="!isAuth", @click.prevent="signIn")
          a(href='/') Sign In
        li.button(v-if="isAuth", @click.prevent="signOut")
          a(href='/') Sign Out
</template>

<script>
import Firebase from 'firebase';
export default {
  props: ['auth', 'isAuth'],
  methods: {
    routeToPicker() {
      this.$router.push('/');
    },
    routeToFeedback() {
      this.$router.push('feedback');
    },
    routeToAbout() {
      this.$router.push('/about');
    },
    signIn() {
      var provider = new Firebase.auth.GoogleAuthProvider();
      this.auth.signInWithPopup(provider);
    },
    signOut() {
      this.auth.signOut();
    },
  }
}
</script>

<style lang="sass">
.AppNavBar
  position: fixed
  top: 0px
  left: 0px
  right: 0px
  font-size: 26px
  text-align: left
  z-index: 100

nav
  box-shadow: 0px 0px 5px rgba(#000, 0.2)
  border-bottom: solid 1px rgba(#000, 0.2)

.adujstBar
  padding-top: 10px
  padding-bottom: 10px

.brandTitle
  font-size: 24px
  font-weight: bold
  color: #1863c7
  padding-left: 10px
  padding-right: 20px

#navbar1
  font-weight: bold
  ul
    li
      font-size: 20px
      padding-left: 10px
      padding-right: 20px
      cursor: pointer
</style>
