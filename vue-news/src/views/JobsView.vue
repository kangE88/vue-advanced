<template>
  <ListItem></ListItem>
</template>

<script>
import ListItem from '../components/ListItem';
import ListMixin from '../mixins/ListMixin';

export default {
  components: {
    ListItem,
  },
  // created(){
  //   this.emitter.emit('start:spinner');
  //   setTimeout(() => {
  //     this.$store.dispatch('FETCH_JOBS')
  //       .then(()=> {
  //         console.log('fetched');
  //         this.emitter.emit('end:spinner');
  //       })
  //       .catch((error) =>{
  //         console.log(error);
  //       });
  //   }, 3000);
  // }
  mixins: [ListMixin],
}
</script>