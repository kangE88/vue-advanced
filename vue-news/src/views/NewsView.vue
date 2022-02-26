<template>
  <div>
      news
      <div v-for="user in users">{{ user.title }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: []
    }
  },
  created() {
    var vm = this;
    axios.get('https://api.hnpwa.com/v0/news/1.json') //new Promise()객체 제공
      .then(function(response) {
        console.log(response);
        vm.users = response.data;
      })
      .catch(function(){
        console.log(response);
      })
  }

}
</script>

<style>

</style>