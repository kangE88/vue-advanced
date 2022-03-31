<template>
  <!-- <CheckBox :checked="checked"></CheckBox> -->
  <CheckBox v-model="checked"></CheckBox>
</template>

<script>
import CheckBox from './components/CheckBox'

export default {
  components: {
    CheckBox,
  },
  data() {
    return {
      checked: false,
    }
  }
}
</script>
