<template>
  <div>
      <!-- <div v-for="job in jobsList" :key="job.id"> -->
      <!-- <div v-for="job in this.$store.state.jobs" :key="job.id">
        {{ job.title }}
      </div> -->
      <!-- 스타일링 작업 전  <p v-for="item in this.$store.state.jobs" :key="item.id">
        <a v-bind:href="item.url">{{ item.title }}</a>
        <small>{{ item.time_ago }} by {{ item.domain }}</small>
      </p>  스타일링 작업 전 -->
      <ul class="jobs-list">
        <li class="post" v-for="item in this.$store.state.jobs" :key="item.id">
          <!-- 포인트 영역 -->
          <div class="points">{{ item.points || 0}}</div>
          <!-- 기타 정보 영역 -->
          <div>
            <p class="jobs-title">
              <a :href="item.url">{{ item.title }}</a>
            </p>
            <small class="link-text">{{ item.time_ago }} by 
            <a :href="item.url">
              {{ item.domain }}
            </a>
            </small>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
//move to /store/index.js
//import { fetchJobsList } from '../api/index.js';

export default {
  // data(){
  //   return {
  //     jobsList: [],
  //   }
  // },
  //컴포넌트가 생성되자마자 실행
  created(){
    
    //move to /store/index.js

    // fetchJobsList()
    // .then(response => this.jobsList = response.data)
    // .catch((response) => console.log(response))

    // -------------------------------

    //vuex 로 옴겨진 비동기 데이터 통신 호출
    this.$store.dispatch('FETCH_JOBS')
  }

}
</script>

<style scoped>
.jobs-list {
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
.jobs-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>