<template lang="pug">
.Feedback
  #feedbackForm.panel.panel-default
    .panel-heading
      h4.sectionTitle {{ filterShow ? selectedStore : '店名' }}
    .panel-body
      form#form.form-inline(v-on:submit.prevent='addComment')
        .form-group
          textarea#storeFeedback.form-control(v-model="newComment.content", type='text')
        input.btn.btn-primary#submit(type='submit', value='AddFeedback')
</template>

<script>
export default {
  name: 'feedback',
  props: ['selectedStore', 'filterShow', 'userData', 'recordsRef'],
  data() {
    return {
      newComment: {
          content: '',
          name: this.userData.displayName,
          photoURL: this.userData.photoURL,
          storeName: this.selectedStore
      },
    }
  },
  watch: {
    'selectedStore': function(newVal) {
      this.newComment.storeName = newVal;
    }
  },

  methods: {
    addComment() {
      this.recordsRef.push(this.newComment);
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
    textarea
      max-width: 550px
      min-width: 100px
      margin-right: 10px
      padding: 5px 10px
      font-size: 16px
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
