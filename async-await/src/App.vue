<template>
<div>
  <button @click="loginUser1">login</button>
  <h1>List</h1>
  <ul>
    <li v-for="item in items" :key="item.id">{{ item }}</li>
  </ul>
</div>
</template>

<script>
import axios from 'axios'
//import { handleException } from './utils/handle'

export default {
  data() {
    return {
      items: [],
    }
  },
  methods: {
    //promise
    loginUser() {
      axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
          if (response.data.id === 1) {
            console.log('사용자 인증');
              axios.get('https://jsonplaceholder.typicode.com/users/1')
              .then(response => {
                this.items = response.data
              })
              .catch(error => console.log(error));         
          }
        })
        .catch(error => console.log(error));
    },
    // async await
    async loginUser1() {
      try {
        let response = await axios.get('https://jsonplaceholder.typicode.com/users/1')
        if (response.data.id === 1) {
          console.log('사용자 인증');
          let list = await axios.get('https://jsonplaceholder.typicode.com/todos')
            console.log(list);
            this.items = list.data
        }
      } catch (error) {
        //handleException(erorr);
        console.log(error);
      }
    },
  }
}
</script>
