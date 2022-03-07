<template>
  <div>
      <!-- #1 <div v-for="ask in askList" :key="ask.id"> -->
      <!-- #2 <div v-for="ask in asks" :key="ask.id"> -->
      <!-- <div v-for="ask in fetchedAsk" :key="ask.id">
        {{ ask.title }}
      </div> -->
      <!-- <p v-for="item in fetchedAsk" :key="item.id">
        <router-link v-bind:to="`/item/${item.id}`">{{ item.title }}</router-link>
        <a v-bind:href="item.url">{{ item.title }}</a>
        <small>{{ item.time_ago }} by {{ item.user }}</small>
      </p> 스타일 적용 전-->

      <ul class="ask-list">
        <li class="post" v-for="item in fetchedAsk" :key="item.id">
          <!-- 포인트 영역 -->
          <div class="points">
            {{ item.points }}
          </div>
          <!-- 기타 정보 영역 -->
          <div>
            <p class="ask-title">
              <router-link v-bind:to="`/item/${item.id}`">{{ item.title }}</router-link>
            </p>
            <small class="link-text">{{ item.time_ago }} by 
              <router-link class="link-text" :to="`/user/${item.user}`">{{ item.user }}</router-link>
            </small>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
//move to store/index.js
//import { fetchAskList } from '../api/index.js';

import { mapState, mapGetters } from 'vuex';

export default {
  // data() {
  //   return {
  //     askList: [],
  //   }
  // },
  created() {
    //move to store/index.js
    // fetchAskList()
    // .then(response => this.askList = response.data)
    // .catch(response => console.log(response))

    // -------------------------------

    //vuex 로 옴겨진 비동기 데이터 통신 호출
    this.$store.dispatch('FETCH_ASKS');
  },
  computed: {
    // #1
    // asks() {
    //   return this.$store.state.asks;
    // },
    // #2 mapState
    // ...mapState({
    //   asks: state => state.asks
    // })
    // #3 mapHelper
    ...mapGetters(
      // { fetchedAsk:  'fetchedAsk' } //객체로 불러오기 - 주로 이름 바꿔 사용할때
      ['fetchedAsk'] //store에 getters에 있는내용 바로 불러오기
    ),

  }
}
</script>

<style scoped>
.ask-list {
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
.ask-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>