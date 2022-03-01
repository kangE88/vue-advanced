<template>
  <div>
      ask
      <div v-for="ask in askList" :key="ask.id">
        {{ ask.title }}
      </div>
  </div>
</template>

<script>
import { fetchAskList } from '../api/index.js';

export default {
  data() {
    return {
      askList: [],
    }
  },
  created() {
    const vm = this;

    fetchAskList()
    .then(response => this.askList = response.data)
    .catch(response => console.log(response))
  }
}
</script>

<style>

</style>