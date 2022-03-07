<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>

import ToolBar from './components/ToolBar.vue';

export default {
  components: {
    ToolBar,
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
