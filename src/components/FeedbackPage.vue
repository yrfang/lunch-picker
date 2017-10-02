<template lang="pug">
.FeedbackPage
  AppNavBar
  input.search.form-control(placeholder="search the store")
  .suggestions
  Feedback
  ShowFeedback
</template>

<script>
import AppNavBar from './AppNavBar';
import Feedback from './Feedback';
import ShowFeedback from './ShowFeedback';

export default {
  name: 'feedback_home',
  components: { AppNavBar, Feedback, ShowFeedback },
  props: ['stores'],
  data() {
    return {
    }
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
  width: 60%
  max-width: 600px
  min-width: 200px
  padding: 20px 25px
  font-size: 18px
</style>
