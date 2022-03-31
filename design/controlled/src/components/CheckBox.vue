<template>
  <input type="checkbox" :value="value" @click="toggleCheckBox">
</template>

<script>
export default {
    props: ['value'],
    methods: {
        toggleCheckBox() {
            this.$emit('input', !this.value)
        }
    }
}
</script>

<!--
props데이터인 checkbox의 상태값이 부모에 있는데, 자식에서 변경하려면 에러가 발생한다.

@input 이벤트
:value 값

부모 v-model 값을 체크하고, 자식에선 내려받은 props데이터를 이용해 click이벤트를 통하여 value값을 변경해주면 해결된다.
-->