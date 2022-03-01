<template>
  <div>
      news
      <div v-for="news in newsList" :key="news.id">{{ news.title }}</div>
  </div>
</template>

<script>
//import axios from 'axios';
import { fetchNewsList } from '../api/index.js';

export default {
  data() {
    return {
      newsList: []
    }
  },
  created() {
    var vm = this;
    // axios.get('https://api.hnpwa.com/v0/news/1.json') //new Promise()객체 제공
    //   .then(function(response) {
      //     console.log(response);
    //     vm.users = response.data;
    //   })
    //   .catch(function(){
      //     console.log(response);
    //   })
    fetchNewsList()
      .then(function(response) {
          console.log(response);
        vm.newsList = response.data;
      })
      .catch(function(){
          console.log(response);
      })
  }

}
</script>

<style>

</style>