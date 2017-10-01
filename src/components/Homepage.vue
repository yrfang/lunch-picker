<template lang="pug">
  .Homepage
    AppNavBar
    FoodPicker
</template>

<script>
import AppNavBar from './AppNavBar'
import FoodPicker from './FoodPicker'

export default {
  components: { AppNavBar, FoodPicker }
}
</script>

<style lang="sass">
.Homepage
  position: relative
  font-size: 24px
  letter-spacing: 1px
</style>
