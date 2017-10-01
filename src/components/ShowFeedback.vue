<template lang="pug">
.ShowFeedback
  .panel.panel-defalf
    .panel-heading
      h3.sectionTitle Feedback
    .panel-body
      table.table.table-striped
        thead
          tr
            th
              | Author
            th
              | Feedback
        tbody
          tr(v-for='feedback in feedbacks')
            td
              | {{ feedback.author }}
            td
              | {{ feedback.feedback }}
</template>

<script>
export default {
  name: 'show_feedback',
  data() {
    return {
      feedbacks: [
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
