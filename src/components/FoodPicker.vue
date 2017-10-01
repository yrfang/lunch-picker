<template lang="pug">
  .FoodPicker
    .row
      h3.sectionTitle What to eat ?
    .row
      .form-group#budgetSelect
        label(for='budget') 💰 預算範圍
        select.form-control(v-model="selectBudgeItem")
          option(v-for="budget in budgets",
                 v-bind:value="budget",
                 ) {{ budget.text }}
    .row
      .form-group#budgetSelect
        label(for='budget') 😋 種類
        select.form-control
          option(v-for="category in categories",
                 v-bind:value="category.value") {{ category.text }}
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
        button.start(@click="clickStart", v-if="randomShow===false") STAR
        button.stop(@click="clickStop", v-if="randomShow") STOP
</template>

<script>
import Firebase from 'firebase'
//import toastr from 'toastr'

let config = {
  apiKey: "AIzaSyBEYcYW4zbye38aFfiRYiC25hKyp9-4WNc",
  authDomain: "whattoeat-f36a5.firebaseapp.com",
  databaseURL: "https://whattoeat-f36a5.firebaseio.com",
  projectId: "whattoeat-f36a5",
  storageBucket: "whattoeat-f36a5.appspot.com",
  messagingSenderId: "229539569797"
};
let app = Firebase.initializeApp(config);
//let authRef = Firebase.auth();
//authRef.onAuthStateChanged(onAuthStateChanged);
let db = app.database();

Firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    console.log("auth changed");
    //this.$router.push('/')
  } else {
    //this.$router.push('/')
  }
});

let storesRef = db.ref('stores');

export default {
  firebase: {
    stores: storesRef,
  },



  data() {
      var _budgets = [
        { text: "0 ~ 100", low: 0, high: 100},
        { text: "100 ~ 150", low: 100, high: 150},
        { text: "150 ~ 200", low: 150, high: 200},
        { text: "200 up", low: 200, high: 1000},
      ];
      
    return {
      budgets: _budgets,
      categories: [
        { text: "正餐", value: 'meal'},
        { text: "飲料", value: 'drink'},
      ],
      stores: this.getInitStoreData(),
      randomShow: false,
      timerId: '',
      selectBudgeItem: _budgets[0]
    }
  },

  computed: {
    // a computed getter
    filteredStores: function() {
      return this.stores.filter(this.filterStore);
    }
  },
  mounted() {
    console.log(this.selectBudgeItem);
    //computed
    // this.clickStart();
  },
  //computed: {
    //randomResult() {
      //const random = this.lists[Math.floor(Math.random() * this.lists.length)];
     //return this.lists;
    //},
  //},
  methods: {
    filterStore(store) {
        return store.price >= this.selectBudgeItem.low &&
          store.price <= this.selectBudgeItem.high;
    },
    clickStart() {

      console.log(this.filteredStores);
      const foodList = document.querySelector('.foodResult ul li');
      const randomFood = this.filteredStores[Math.floor(Math.random() *
      this.filteredStores.length)];
      this.randomShow = true;
      this.timerId = setInterval(this.interValFunc, 100);
    },
    interValFunc() {
      const foodList = document.querySelector('.foodResult ul li');
      const randomFood = this.filteredStores[Math.floor(Math.random() *
      this.filteredStores.length)].name;
      if(!this.randomShow) {
        clearInterval(this.timerId);
      }
      foodList.innerHTML = randomFood;
    },
    clickStop() {
      const foodList = document.querySelector('.foodResult ul li');
      this.randomShow = false;
    },
    getInitStoreData() {

      let items = [];
      storesRef.once('value', function(snap) {
        snap.forEach(function(storeSnap) {
          
          items.push(storeSnap.val());
        });
      });
      return items;
    },
  }
}
</script>

<style lang="sass" scoped>
.FoodPicker
  position: relative
  height: 150vh
  margin-top: 60px
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
    // box-shadow: 5px 5px 0px yellow, 3px 3px 10px blue

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
