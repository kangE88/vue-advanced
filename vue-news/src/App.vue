<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
      <Spinner :loading="loadingStatus"></Spinner> <!-- Loding Spinner -->
    </router-view>
  </div>
</template>

<script>

import Spinner from './components/Spinner'
import ToolBar from './components/ToolBar.vue';
import Bus from './utils/bus';

export default {
  components: {
    Spinner,
    ToolBar,
  },
  data() {
    return {
      loadingStatus: false,
    }
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    }
  },
  created(){
    Bus.$on('start:spinner', this.startSpinner);
    Bus.$on('end:spinner', this.endSpinner);
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
a:hover{
  color: #42b883;
  text-decoration: underline;
}
a {
  color: #344952;
  text-decoration: none;
}
a .router-link-exact-active {
  text-decoration: underline;
}
</style>
