<template lang="pug">
.AppNavBar
  nav.navbar.navbar-default
    .container-fluid
      .navbar-header
        button.navbar-toggle.collapsed(type='button', data-toggle='collapse', data-target='#navbar1')
          span.icon-bar
          span.icon-bar
          span.icon-bar
        a.navbar-brand(href='/')
          span.active.brandTitle Lunch ?
      #navbar1.navbar-collapse.collapse
        ul.nav.navbar-nav
          li
            a(href='#') Let's Slot
          li
            a(href='#') Feedback
          li
            a(href='#') New Menu
          li.dropdown
            a.dropdown-toggle(href='#', data-toggle='dropdown', role='button', aria-expanded='false')
              | Login
              span.caret
            ul.dropdown-menu(role='menu')
              li
                a(href='#') Action
              li
                a(href='#') Another
              li
                a(href='#') Something
              li.divider
              li
                a(href='#') Separated link
</template>

<script>
export default {
}
</script>

<style lang="sass">
.AppNavBar
  position: fixed
  top: 0px
  left: 0px
  right: 0px
  font-size: 26px
  text-align: left

nav
  box-shadow: 0px 0px 5px rgba(#000, 0.2)
  border-bottom: solid 1px rgba(#000, 0.2)

.adujstBar
  padding-top: 10px
  padding-bottom: 10px

.brandTitle
  font-size: 24px
  font-weight: bold
  color: #1863c7
  padding-left: 10px
  padding-right: 20px

#navbar1
  font-weight: bold
  ul
    li
      font-size: 20px
      padding-left: 10px
      padding-right: 20px
</style>
