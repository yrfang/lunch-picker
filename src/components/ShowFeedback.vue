<template lang="pug">
.ShowFeedback
  .panel.panel-defalf
    .panel-heading 評論
    .panel-body
      table.table.table-striped
        tbody
          tr(v-for='record in currentNode')
            td
              | {{ record.name}}
            td
              | {{ record.content}}
</template>

<script>
import Firebase from 'firebase';
import {dbConfig} from '../config';

let app = Firebase.initializeApp(dbConfig, "feedbackApp");
let db = app.database();

export default {
  name: 'showFeedback',
  props: ['userData','randomResult'],
  mounted() {
  },

  methods: {
    filterStoreById(store) {
      return true;
    },
  },

  computed: {
  },
  
  watch: {
    'randomResult': function(newVal) {
      console.log(newVal);
      this.$bindAsArray('currentNode',
        db.ref('records').orderByChild("storeName").equalTo(this.randomResult));
      
    }
  },

  firebase: {
    records: db.ref('records').orderByChild("storeName").equalTo(this.randomResult || "肯德基")
  },

  data() {
    return {
      current: 'first',
      currentNode: [],
      selectedItem: "",
    }
  },
}
</script>

<style lang="sass" scoped>
.ShowFeedback
  text-align: center
  font-size: 18px
  border-top: solid 1px rgba(#000, 0.2)
  margin-top: 60px
  margin-left: auto
  margin-right: auto
  width: 100%
  max-width: 600px
  min-width: 150px

.sectionTitle
  margin-bottom: 30px
  font-weight: bold
  color: #507bb4
  font-size: 36px
</style>
