<template>
  <div>
      jobs
      <div v-for="job in jobsList" :key="job.id">
        {{ job.title }}
      </div>
  </div>
</template>

<script>
import { fetchJobsList } from '../api/index.js';
export default {
  data(){
    return {
      jobsList: [],
    }
  },
  //컴포넌트가 생성되자마자 실행
  created(){
    fetchJobsList()
    .then(response => this.jobsList = response.data)
    .catch((response) => console.log(response))
  }

}
</script>

<style>

</style>