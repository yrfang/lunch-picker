<template lang="pug">
  .Homepage
    AppNavBar(v-on:feedback="doFeedback",
      :auth="auth",:isAuth="isAuth",:userData="userData",
      :isPicker="isPicker")
    FoodPicker(:stores="stores", :recordsRef="recordsRef", :isReady="isReady", :userData="userData", v-if="isPicker")
    FeedbackPage(:recordsRef="recordsRef", :stores="stores",v-if="!isPicker", :userData="userData")
</template>

<script>
import Firebase from 'firebase';
import AppNavBar from './AppNavBar';
import FeedbackPage from './FeedbackPage';
import FoodPicker from './FoodPicker';
import {dbConfig} from '../config';

let app = Firebase.initializeApp(dbConfig);
let db = app.database();
let storesRef = db.ref('stores');

export default {
  name: 'homepage',
  components: { AppNavBar, FoodPicker, FeedbackPage },
  data() {
    return {
      auth: Firebase.auth(),
      stores: [],
      isReady: false,
      isAuth: false,
      isPicker: true,
      userData: {
        photoURL: "",
        displayName: "",
      },
      recordsRef: db.ref('records') //for ShowFeedback
    }
  },
  mounted() {
    this.stores = this.getInitStoreData();
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("User has signed in");
        this.isAuth = true;
        this.userData.photoURL = user.photoURL;
        this.userData.displayName = user.displayName;
      } else {
        console.log("User signed out");
        this.isAuth = false;
      }
    });
  },
  methods: {
    doFeedback(){
      this.isPicker=false;
    },
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
