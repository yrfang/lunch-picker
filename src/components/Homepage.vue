<template lang="pug">
  .Homepage
    AppNavBar(
      :auth="auth",:isAuth="isAuth",:userData="userData")
    FoodPicker(:stores="stores", :isReady="isReady", :dbRef="dbRef")
    FeedbackPage(:stores="stores", v-if="this.$route.path == '/feedback'")
</template>

<script>
import Firebase from 'firebase';
import AppNavBar from './AppNavBar';
import FoodPicker from './FoodPicker';
import {dbConfig} from '../config';

let app = Firebase.initializeApp(dbConfig);
let db = app.database();
let storesRef = db.ref('stores');

export default {
  name: 'homepage',
  components: { AppNavBar, FoodPicker },
  //firebase: {
    //stores: storesRef,
  //},
  data() {
    return {
      auth: Firebase.auth(),
      stores: [],
      dbRef: db, //let other components access db
      isReady: false,
      isAuth: false,
      userData: {
        photoURL: "",
        displayName: "",
      },
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
