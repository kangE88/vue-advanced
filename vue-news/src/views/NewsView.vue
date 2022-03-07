<template>
  <div>
      <!-- <div v-for="news in newsList" :key="news.id">{{ news.title }}</div> -->
      <!-- <div v-for="news in this.$store.state.news" :key="news.id">{{ news.title }}</div> -->
      <!-- <p v-for="item in this.$store.state.news" :key="item.id">
         <a v-bind:href="item.url">{{ item.title }}</a>
         <small>{{ item.time_ago }} by </small>
         <router-link v-bind:to="`/user/${item.user}`"> {{ item.user }} </router-link>
      </p> -->
      <ul class="news-list">
        <!-- 포인트 영역 -->
        <li v-for="item in this.$store.state.news" class="post" :key="item.id">
          <div class="points">
            {{ item.points }}
          </div>
          <!-- 기타 정보 영역 -->
          <div>
            <p class="news-title">
              <a v-bind:href="item.url">{{ item.title }}</a>
            </p>
            <small class="link-text">{{ item.time_ago }} by </small>
            <router-link class="link-text" v-bind:to="`/user/${item.user}`"> {{ item.user }} </router-link>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
// move to /store/index.js
//import axios from 'axios';
//import { fetchNewsList } from '../api/index';

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

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>