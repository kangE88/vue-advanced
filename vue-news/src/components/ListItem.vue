<template>
  <div>
    <ul class="news-list">
      <!-- 포인트 영역 -->
      <!-- <li v-for="item in this.$store.state.news" class="post" :key="item.id"> -->
      <li v-for="item in listItems" class="post" :key="item.id">
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <!-- 기타 정보 영역 -->
        <!-- 타이틀 -->
        <template v-if="item.domain">
          <a :href="item.url">{{ item.title }}</a>
        </template>
        <template v-else>
          <router-link :to="`/item/${item.id}`"> {{ item.title }} </router-link>
        </template>
        <!-- item.user가 있으면 news, ask / 없으면 jobs-->
        <small class="link-text">{{ item.time_ago }} by 
          <router-link class="link-text" 
            v-if="item.user"
            :to="`/user/${item.user}`"> {{ item.user }} </router-link>
          <a :href="item.url" v-else>{{ item.domain }}</a>
        </small>
        
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    created() {
      
      //const routeName = this.$route.name;

       //vuex 로 옴겨진 비동기 데이터 통신 호출 route.name 에 따라 분기 호출
      // if (routeName === 'News') {
      //   this.$store.dispatch('FETCH_NEWS');
      // } else if(routeName === 'Ask') {
      //   this.$store.dispatch('FETCH_ASKS');
      // } else if(routeName === 'Jobs') {
      //   this.$store.dispatch('FETCH_JOBS');
      // }
    },
    computed: {
      listItems() {
        // const routeName = this.$route.name;

        // if (routeName === 'News') {
        //   return this.$store.state.news;
        // } else if (routeName === 'Ask') {
        //   return this.$store.state.asks;
        //   } else if (routeName === 'Jobs') {
        //   return this.$store.state.jobs;
        // }
        return this.$store.state.list;
      }
    }
}
</script>

<style scoped>
.news-list {
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
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>