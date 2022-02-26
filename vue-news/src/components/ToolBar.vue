<template>
  <div class="header">
    <router-link to="/news">News</router-link> |
    <router-link to="/ask">Ask</router-link> |
    <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<style scoped>
.header {
    color: white;
    background-color: #42b883;
    display: flex;
    padding: 8px;
}
/*링크 눌럿을때 스타일 처리 */
.header .router-link-exact-active {
    color: #354953;
}
.header a {
    color: white;
}
</style>