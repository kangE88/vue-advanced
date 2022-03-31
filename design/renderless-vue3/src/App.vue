<template>
  <FetchData url="https://jsonplaceholder.typicode.com/users/1">
    <template v-slot="ref">
        <!-- ... -->
          <div v-if="!ref.loading">
            <p>{{ ref.response.name }}</p>
          </div>
          <div v-if="ref.loading">
            Loading...
          </div>
    </template>
  </FetchData>
</template>

<script>
import FetchData from './components/FetchData.vue'

export default {
  components: {
    FetchData, 
  }
}
</script>