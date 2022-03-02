<template>
  <div>
      news
      <!-- <div v-for="news in newsList" :key="news.id">{{ news.title }}</div> -->
      <div v-for="news in this.$store.state.news" :key="news.id">{{ news.title }}</div>
  </div>
</template>

<script>
// move to /store/index.js
//import axios from 'axios';


export default {
  // data() {
  //   return {
  //     newsList: []
  //   }
  // },
  created() {
    //var vm = this;
    // axios.get('https://api.hnpwa.com/v0/news/1.json') //new Promise()객체 제공
    //   .then(function(response) {
      //     console.log(response);
    //     vm.users = response.data;
    //   })
    //   .catch(function(){
      //     console.log(response);
    //   })

    // -------------------------------

    // move to /store/index.js

    // fetchNewsList()
    //   .then(response => {
    //       console.log(response);
    //     this.newsList = response.data;
    //   })
    //   .catch(error => {
    //       console.log(error);
    //   })

    // -------------------------------

    //vuex 로 옴겨진 비동기 데이터 통신 호출
    this.$store.dispatch('FETCH_NEWS');
  }

}
</script>

<style>

</style>