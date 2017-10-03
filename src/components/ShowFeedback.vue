<template lang="pug">
.ShowFeedback
  .panel.panel-defalf
    .panel-heading 評論
    .panel-body
      table.table.table-striped
        tbody
          tr(v-for='record in records')
            td
              | {{ record.name}}
            td
              | {{ record.content}}
</template>
<script>
export default {
  name: 'showFeedback',
  props: ['userData','selectedStore', 'recordsRef'],
  watch: {  
    'selectedStore': function(newVal) {
      this.$bindAsArray('records',
        this.recordsRef.orderByChild("storeName").equalTo(newVal));
    }
  },
  mounted() {
    this.$bindAsArray('records',
    this.recordsRef.orderByChild("storeName").equalTo(this.selectedStore));
  },
  data() {
    return {
      records: []
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
