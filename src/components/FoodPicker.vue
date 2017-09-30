<template lang="pug">
  .FoodPicker
    .row
      h3.sectionTitle What to eat ?
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
              li 今天吃啥？
          .slotButton
            .slotTop
            .slotBody
      .buttons
        button(@click="clickStart", v-if="randomShow===false") Start
        button(@click="clickStop", v-if="randomShow") stop
</template>

<script>
export default {
  data() {
    return {
      areas: ['全部','萬華區','中正區','大同區','中山區','大安區','南港區','文山區','松山區','信義區','士林區','北投區','內湖區','在家裡','在捷運上','在圖書館','在計程車上','在馬路上','在廁所','在辦公室','在家裡'],
      randomShow: false,
      timerId: ''
    }
  },
  mounted() {
    // this.clickStart();
  },
  computed: {
    randomResult() {
      const random = this.areas[Math.floor(Math.random() * this.areas.length)];
      return this.areas;
    },
  },
  methods: {
    clickStart() {
      const foodList = document.querySelector('.foodResult ul li');
      const randomFood = this.areas[Math.floor(Math.random() *
      this.areas.length)];
      this.randomShow = true;
      this.timerId = setInterval(this.interValFunc, 100);
    },
    interValFunc() {
      const foodList = document.querySelector('.foodResult ul li');
      const randomFood = this.areas[Math.floor(Math.random() *
      this.areas.length)];
      if(!this.randomShow) {
        clearInterval(this.timerId);
      }
      foodList.innerHTML = randomFood;
    },
    clickStop() {
      const foodList = document.querySelector('.foodResult ul li');
      this.randomShow = false;
    },
  }
}
</script>

<style lang="sass" scoped>
.FoodPicker
  // position: fixed
  // top: 60px
  // left: 0px
  // right: 0px
  // bottom: 0px
  width: 100vw
  height: 150vh
  padding-left: 100px
  padding-right: 100px
  margin-top: 50px
  overflow-x: hidden
  overflow-y: scroll
  z-index: 0
  text-align: center

.sectionTitle
  margin-bottom: 30px
  font-weight: bold
  color: #507bb4
  font-size: 30px

#budgetSelect
  width: 200px
  select
    font-size: 16px

.slotMachine.outerContainer
    border: solid 1px
    margin-top: 30px
    width: 50%
    min-width: 300px
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

@media only screen and (max-width: 480px)
  .FoodPicker
    // text-align: center
  .slotMachine.outerContainer
    width: 90%
    min-width: initial
    height: 100px
    .innerContainer
      .foodResult
        top: 10px
        bottom: 10px
        font-size: 24px
      .slotButton
        .slotBody
          height: 60px
</style>
