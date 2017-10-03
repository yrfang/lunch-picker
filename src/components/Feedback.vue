<template lang="pug">
.Feedback
  #feedbackForm.panel.panel-default
    .panel-heading
      h4.sectionTitle {{ filterShow ? selectedStore : '店名' }}
    .panel-body
      form#form.form-inline(v-on:submit.prevent='addStore')
        .form-group
          input#storeAuthor.form-control(type='text')
        .form-group
          input#storeFeedback.form-control(type='text')
        input.btn.btn-primary#submit(type='submit', value='Add Feedback')
</template>

<script>
export default {
  name: 'feedback',
  props: ['selectedStore', 'filterShow'],
  data() {
    return {
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
  margin-bottom: 10px
  font-weight: bold
  color: #507bb4
  font-size: 24px

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
  #feedbackForm
    #form
      input
        margin-left: auto
        margin-right: auto
</style>
