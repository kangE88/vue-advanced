<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem';
import Bus from '../utils/bus';

export default {
  components: {
    ListItem,
  },
  created(){
    bus.$emit('start:spinner');
    bus.$emit('end:spinner');
  }
}
</script>