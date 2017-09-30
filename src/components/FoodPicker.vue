<template lang="pug">
  .FoodPicker
    .row
      h3.sectionTitle Food Slot machine
    .row
      .form-group#budgetSelect
        label(for='budget') 💰 預算範圍
        select.form-control
          option 0 ~ 100
          option 100 ~ 150
          option 150 ~ 200
          option 200 up
    .row
      .form-group#budgetSelect
        label(for='budget') 😋 種類
        select.form-control
          option 正餐
          option 飲料
    .row
      .slotMachine.outerContainer
        .innerContainer
          .foodResult
            ul
              li Food1
              li food2
          .slotButton
            .slotTop
            .slotBody
    .row
      button.btn.btn-secondary.slotSubmit(type='button') Let's Slot !
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
.FoodPicker
  position: fixed
  top: 60px
  left: 0px
  right: 0px
  bottom: 0px
  padding-left: 60px
  overflow-x: hidden
  overflow-y: scroll
  z-index: 0

.sectionTitle
  margin-bottom: 30px
  font-weight: bold
  color: #507bb4

#budgetSelect
  width: 200px
  select
    font-size: 16px

.slotMachine.outerContainer
    border: solid 1px
    margin-top: 30px
    width: 50%
    height: 150px
    position: relative
    border-radius: 10px
    box-shadow: 0 2px 10px rgba(#000, 0.4)
    background: linear-gradient(to bottom, #666, #444)

    .innerContainer
      position: absolute
      top: 15px
      left: 15px
      right: 15px
      bottom: 15px
      border: solid 1px
      text-align: center
      border-radius: 10px
      background: #333
      box-shadow: inset 0 0px 8px #000, 0 1px 0px  1px rgba(#fff, 0.4)

      .foodResult
        position: absolute
        top: 30px
        left: 10px
        right: 10px
        bottom: 30px
        padding-top: 10px
        padding-bottom: 10px
        text-align: center
        font-size: 30px
        font-weight: bold
        color: #fff
        overflow-y: hidden
        ul
          list-style: none
          margin: 0px
          padding: 0px
          li
            margin-bottom: 50px

      .slotButton
        position: absolute
        top: -40px
        right: -52px
        width: 40px
        cursor: pointer
        .slotBody
          position: absolute
          left: 5px
          top: 20px
          background-color: #8e8a8a
          width: 20px
          height: 100px
          border-radius: 5px
          z-index: 1
        .slotTop
          background: linear-gradient(to right, #507bb4 0%, #245eab 30%, #507bb4 100%)
          box-shadow: 0px 0px 2px rgba(#fff, 0.3)
          position: absolute
          top: 0px
          left: 0px
          width: 30px
          height: 30px
          border-radius: 50%
          z-index: 10

.slotSubmit
  margin-top: 40px
  cursor: pointer
  padding: 15px 25px
  font-size: 24px

@media only screen and (max-width: 480px)
  .FoodPicker
    // text-align: center
  .slotMachine.outerContainer
    width: 70%
    height: 100px
    .innerContainer
      .foodResult
        top: 10px
        bottom: 10px
        font-size: 24px
      .slotButton
        .slotBody
          height: 60px

  .slotSubmit
    padding: 10px 15px
    font-size: 18px
</style>
