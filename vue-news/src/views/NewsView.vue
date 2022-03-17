<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem';
// import Bus from '../utils/bus';

export default {
  components: {
    ListItem,
  },
  created(){
    // bus.$emit('start:spinner');
    // bus.$emit('end:spinner');
    this.emitter.emit('start:spinner');
    // setTimeout(() => {
      this.$store.dispatch('FETCH_NEWS')
        .then(()=> {
          console.log('fetched');
          this.emitter.emit('end:spinner');
        })
        .catch((error) =>{
          console.log(error);
        });
    // }, 3000);
    
  }
}
</script>