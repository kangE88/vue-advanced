<template>
  <div>
      jobs
      <!-- <div v-for="job in jobsList" :key="job.id"> -->
      <div v-for="job in this.$store.state.jobs" :key="job.id">
        {{ job.title }}
      </div>
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

<style>

</style>