<template lang="pug">
  .Homepage
    AppNavBar(:navLocation="navLocation")
    FoodPicker(@click="routeToHomepage",
               :stores="stores",
               :isReady="isReady")
    FeedbackPage(v-if="this.$route.path == '/feedback'")
</template>

<script>
import Firebase from 'firebase';

import AppNavBar from './AppNavBar';
import FoodPicker from './FoodPicker';
import FeedbackPage from './FeedbackPage';

let config = {
  apiKey: "AIzaSyBEYcYW4zbye38aFfiRYiC25hKyp9-4WNc",
  authDomain: "whattoeat-f36a5.firebaseapp.com",
  databaseURL: "https://whattoeat-f36a5.firebaseio.com",
  projectId: "whattoeat-f36a5",
  storageBucket: "whattoeat-f36a5.appspot.com",
  messagingSenderId: "229539569797"
};
let app = Firebase.initializeApp(config);
//let authRef = Firebase.auth();
//authRef.onAuthStateChanged(onAuthStateChanged);
let db = app.database();

Firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    console.log("auth changed");
    //this.$router.push('/')
  } else {
    //this.$router.push('/')
  }
});

let storesRef = db.ref('stores');

export default {
  name: 'homepage',
  components: { AppNavBar, FoodPicker, FeedbackPage },
  firebase: {
    stores: storesRef,
  },
  data() {
    return {
      stores: [],
      isReady: false,
      navLocation: '',
    }
  },
  mounted() {
    this.stores = this.getInitStoreData();

  },
  methods: {
    getInitStoreData() {

      let items = [];
      let self = this;
      storesRef.once('value', function(snap) {
        snap.forEach(function(storeSnap) {
          items.push(storeSnap.val());
        });
      self.isReady = true;
      });
      return items;
    },
    routeToHomepage() {
      // this.navLocation = pathName;
      this.$router.push('/');
    },
  },

}
</script>

<style lang="sass">
.Homepage
  position: relative
  font-size: 24px
  letter-spacing: 1px
</style>
