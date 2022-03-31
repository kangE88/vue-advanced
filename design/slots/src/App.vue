<template>
  <div>
    <ul>
      <!-- <Item v-for="item in items" :key="item.id" :item=item></Item> -->
      <Item>
        아이템 1
      </Item>
      <Item>
        아이템 2 <button>click me</button>
      </Item>
      <Item>
        <div>아이템 3</div>
        <img src="./assets/logo.png" alt="로고이미지">
      </Item>
    </ul>
  </div>
</template>

<script>

import Item from './Item'

export default {
  components: {
    Item,
  },
  // data() {
  //   return {
  //     items: ['아이템1','아이템2','아이템3','아이템4','아이템5']
  //   }
  // }
  /* 슬롯의 장점 
   * 위 내용처럼 재사용이 가능하며, 각각의 요소마다 다르게 꾸밀 수 있다.
  */
}
</script>

