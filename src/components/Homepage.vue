<template lang="pug">
  .Homepage
    AppNavBar(:auth="auth",:isAuth="isAuth")
    FoodPicker(:stores="stores", :isReady="isReady")
    FeedbackPage(v-if="this.$route.path == '/feedback'")
</template>

<script>
import Firebase from 'firebase';

import AppNavBar from './AppNavBar';
import FoodPicker from './FoodPicker';

let config = {
  apiKey: "AIzaSyBEYcYW4zbye38aFfiRYiC25hKyp9-4WNc",
  authDomain: "whattoeat-f36a5.firebaseapp.com",
  databaseURL: "https://whattoeat-f36a5.firebaseio.com",
  projectId: "whattoeat-f36a5",
  storageBucket: "whattoeat-f36a5.appspot.com",
  messagingSenderId: "229539569797"
};
let app = Firebase.initializeApp(config);
let db = app.database();
let authRef = Firebase.auth();

//Firebase.auth().onAuthStateChanged((user) => {
//  if(user) {
//    console.log("User has signed in");
    //this.$router.push('/')
//  } else {
//    console.log("User signed out");
//  }
//});

let storesRef = db.ref('stores');

export default {
  name: 'homepage',
  components: { AppNavBar, FoodPicker },
  firebase: {
    stores: storesRef,
  },
  data() {
    return {
      auth: authRef,
      stores: [],
      isReady: false,
      isAuth: false
    }
  },
  mounted() {
    this.stores = this.getInitStoreData();
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("User has signed in");
        this.isAuth = true;
      } else {
        console.log("User signed out");
        this.isAuth = false;
      }
    });
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
  },

}
</script>

<style lang="sass">
.Homepage
  position: relative
  font-size: 24px
  letter-spacing: 1px
</style>
