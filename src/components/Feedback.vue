<template lang="pug">
.Feedback
  AppNavBar
  #feedbackForm.panel.panel-default
    .panel-heading
      h3.sectionTitle 店名？？
    .panel-body
      form#form.form-inline(v-on:submit.prevent='addStore')
        .form-group
          input#storeAuthor.form-control(type='text')
        .form-group
          input#storeFeedback.form-control(type='text')
        input.btn.btn-primary(type='submit', value='Add Feedback')
</template>

<script>
import Firebase from 'firebase'

import AppNavBar from './AppNavBar';

export default {
  name: 'feedback',
  components: { AppNavBar },
  props: [],
  data() {
    return {
      stores: [
        {
          author: 'ruby',
          feedback: 'good',
        },
        {
          author: 'ruby',
          feedback: 'good',
        },
        {
          author: 'ruby',
          feedback: 'good',
        },
      ],
      newStore: {
          store: '',
          author: '',
          feedback: ''
      },
    }
  },
  methods: {
    addStore() {

    },
  }
}
</script>

<style lang="sass">
.Feedback
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

#feedbackForm
  margin-left: auto
  margin-right: auto
  width: 100%
  max-width: 600px
  min-width: 150px
  font-size: 20px
  #form
    input
      margin-right: 10px
      padding: 5px 10px
      font-size: 18px
      text-align: left
    #storeAuthor
      width: 100px

@media only screen and (max-width: 480px)
  .Feedback
    text-align: center
    margin-top: 30px

  .sectionTitle
    font-size: 28px
</style>
