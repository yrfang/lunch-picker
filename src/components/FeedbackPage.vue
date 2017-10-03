<template lang="pug">
.FeedbackPage
  input.search.form-control(placeholder="Search the store", v-model="searchString")
  #searchResult
    ul
      li(v-for="store in filteredStoresName",
         v-model="selectedStore")
        a(@click="dispalySelectedStore") {{store.name}}
  Feedback(:userData="userData", :recordsRef="recordsRef", :stores="stores", :selectedStore="selectedStore", :filterShow="filterShow", v-if="filterShow")
  ShowFeedback(:stores="stores", :recordsRef="recordsRef", :selectedStore="selectedStore", v-if="filterShow")
</template>

<script>
import AppNavBar from './AppNavBar';
import Feedback from './Feedback';
import ShowFeedback from './ShowFeedback';
import Firebase from 'firebase';
import {dbConfig} from '../config';

let app = Firebase.initializeApp(dbConfig, "feedbackApp");
let db = app.database();

export default {
  name: 'FeedbackPage',
  components: { AppNavBar, Feedback, ShowFeedback },
  props: ['stores', 'userData', 'recordsRef'],
  mounted() {
  },
  data() {
    return {
      searchString: '',
      filterShow: false,
      selectedStore: '',
      currentNode: [],
    }
  },
  computed: {
    filteredStoresName() {
      return this.stores.filter(this.filterStore);
    },
  },
  methods: {
    filterStore(store) {
      return store.name.toLowerCase().indexOf(this.searchString.trim().toLowerCase()) !== -1;
    },
    dispalySelectedStore(event) {
      this.filterShow = true;
      this.selectedStore = event.target.innerHTML;
    },
  },
}
</script>

<style lang="sass">
.FeedbackPage
  position: relative
  margin-top: 60px
  margin-bottom: 60px
  overflow-x: hidden
  z-index: 0
  text-align: center

.sectionTitle
  margin-bottom: 30px
  font-weight: bold
  color: #507bb4
  font-size: 36px

.search
  margin-left: auto
  margin-right: auto
  margin-bottom: 20px
  width: 70%
  max-width: 600px
  min-width: 250px
  padding: 20px 25px
  font-size: 18px

#searchResult
  ul
    font-size: 18px
    margin: 0px
    margin-left: auto
    margin-right: auto
    padding: 0px
    width: 70%
    max-width: 600px
    min-width: 300px
    height: 200px
    max-height: 180px
    background-color: rgba(#dbdede, 0.5)
    overflow-y: scroll
    li
      cursor: pointer
      padding: 10px
</style>
