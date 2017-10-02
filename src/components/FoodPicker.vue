<template lang="pug">
  .FoodPicker
    .row
      h3.sectionTitle What to eat ?
    .row
      .form-group#budgetSelect
        label(for='budget') 💰 預算範圍
        select.form-control(v-model="selectBudgeItem")
          option(v-for="budget in budgets",
                 v-bind:value="budget") {{ budget.text }}
    .row
      .form-group#budgetSelect
        label(for='budget') 😋 種類
        select.form-control(v-model="selectCatItem")
          option(v-for="category in categories",
                 v-bind:value="category") {{ category.text }}
    .row
      .slotMachine.outerContainer
        .innerContainer
          .foodResult
            ul
              li 今天吃啥？
          .slotButton
            .slotTop
            .slotBody
      .slotButton
        button.start(@click="clickStart", v-if="randomShow===false && isReady") STAR
        button.stop(@click="clickStop", v-if="randomShow", ref="stopBtn") STOP
    .row
      ShowFeedback(v-if="selected",
                   :feedback_stores="stores")
</template>

<script>
import ShowFeedback from './ShowFeedback';

export default {
  name: 'foodPicker',
  components: { ShowFeedback },
  props: ['stores', 'isReady'],
  data() {
      var _budgets = [
        { text: "0 ~ 100", low: 0, high: 100},
        { text: "100 ~ 150", low: 100, high: 150},
        { text: "150 ~ 200", low: 150, high: 200},
        { text: "200 up", low: 200, high: 1000},
      ];

      var _categories = [
        { text: "正餐", type: 'meal'},
        { text: "飲料", type: 'drink'},
      ];

    return {
      budgets: _budgets,
      categories: _categories,
      randomShow: false,
      timerId: '',
      selectBudgeItem: _budgets[0],
      selectCatItem: _categories[0],
      selected: false,
    }
  },
  computed: {
    filteredStores() {
      return this.stores.filter(this.filterStore);
    }
  },
  methods: {
    filterStore(store) {
        return store.price >= this.selectBudgeItem.low &&
          store.price <= this.selectBudgeItem.high &&
          store.type == this.selectCatItem.type;
    },
    clickStart() {
      const foodList = document.querySelector('.foodResult ul li');
      this.randomShow = true;
      this.selected = false;
      this.timerId = setInterval(this.interValFunc, 100);
    },
    interValFunc() {
      const foodList = document.querySelector('.foodResult ul li');
      const randomFood = this.filteredStores[Math.floor(Math.random() *
      this.filteredStores.length)];
      var text = '';
      if(randomFood !== undefined) {
        text = randomFood.name;
      } else {
        foodList.innerHTML = '沒這個選項';
        clearInterval(this.timerId);
        this.$refs.stopBtn.click();
        this.selected = false;
        return;
      }

      if(!this.randomShow) {
        clearInterval(this.timerId);
      }
      foodList.innerHTML = text;
    },
    clickStop() {
      const foodList = document.querySelector('.foodResult ul li');
      this.randomShow = false;
      this.selected = true;
    }
  }
}
</script>

<style lang="sass" scoped>
.FoodPicker
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

.form-group#budgetSelect
  width: 200px
  position: relative
  margin-left: auto
  margin-right: auto
  select
    font-size: 16px

.slotMachine.outerContainer
    position: relative
    margin-top: 30px
    margin-left: auto
    margin-right: auto
    width: 70%
    min-width: 300px
    max-width: 600px
    height: 150px
    border: solid 1px
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
  text-align: center
  margin-top: 40px
  button
    font-weight: 800
    letter-spacing: 1px
    color: #fff
    padding: 10px 40px
    border: solid 2px #333
    border-radius: 50px

    &:focus
      outline: none

    &.start
      background-color: green

    &.stop
      background-color: red

@media only screen and (max-width: 480px)
  .FoodPicker
    text-align: center
    margin-top: 30px

  .sectionTitle
    font-size: 32px

  .form-group#budgetSelect
    label
      font-size: 24px

  .slotMachine.outerContainer
    width: 90%
    min-width: initial
    height: 100px
    .innerContainer
      .foodResult
        top: 10px
        bottom: 10px
        font-size: 18px
  .slotButton
    margin-top: 20px
    button
      font-size: 18px
</style>
