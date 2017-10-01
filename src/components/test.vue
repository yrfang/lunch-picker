<template lang="pug">
#app.container
  // <img src="./assets/logo.png">
  .page-header
    h1 Vue.js 2 & Firebase Sample Application
  .panel.panel-default
    .panel-heading
      h3.panel-title Add New Books
    .panel-body
      form#form.form-inline(v-on:submit.prevent='addBook')
        .form-group
          label(for='bookTitle') Title:
          input#bookTitle.form-control(type='text', v-model='newBook.title')
        .form-group
          label(for='bookAuthor') Author:
          input#bookAuthor.form-control(type='text', v-model='newBook.author')
        .form-group
          label(for='bookUrl') Url:
          input#bookUrl.form-control(type='text', v-model='newBook.url')
        input.btn.btn-primary(type='submit', value='Add Book')
  .panel.panel-defalf
    .panel-heading
      h3 Books Lists
    .panel-body
      table.table.table-striped
        thead
          tr
            th
              | Title
            th
              | Author
            th
              | Delete
        tbody
          tr(v-for='book in books')
            td
              a(v-bind:href='book.url', target='_blank') {{book.title}}
            td
              | {{book.author}}
            td
              span.glyphicon.glyphicon-trash(v-on:click='removeBook(book)')
</template>

<script>
import Hello from './components/Hello'

import Firebase from 'firebase'

import toastr from 'toastr'

let config = {
  apiKey: "AIzaSyAa7Vq7-miYukmdzIxSzPMkpW58YaHI_FU",
  authDomain: "vuejs-firebase-single-page-web.firebaseapp.com",
  databaseURL: "https://vuejs-firebase-single-page-web.firebaseio.com",
  projectId: "vuejs-firebase-single-page-web",
  storageBucket: "vuejs-firebase-single-page-web.appspot.com",
  messagingSenderId: "119860662523"
};

let app = Firebase.initializeApp(config);
let db = app.database();

let booksRef = db.ref('books');

export default {
  name: 'app',
  firebase: {
    books: booksRef
  },
  data () {
    return {
      newBook: {
          title: '',
          author: '',
          url: ''
      }
    }
  },
  methods: {
    addBook: function () {
      booksRef.push(this.newBook);
      this.newBook.title = '';
      this.newBook.author = '';
      this.newBook.url = '';
    },
    removeBook: function(book) {
      booksRef.child(book['.key']).remove();
      toastr.success('Book removed successfully');
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
