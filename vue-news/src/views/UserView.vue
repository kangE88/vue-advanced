<template>
    <div>
        <p>name : {{ userInfo.id }}</p>
        <p>karma : {{ userInfo.karma }}</p>
        <p>created : {{ userInfo.created }}</p>
    </div>
</template>

<script>
//ßimport { mapState, mapGetters } from 'vuex';

export default {
    //https://api.hnpwa.com/v0/user/davideast.json
    created() {
        //this.$route.params.id 
        const userName = this.$route.params.id;
        this.$store.dispatch('FETCH_USER_INFO', userName); //여러개면 객체로 넘겨준다.
    },
    computed: {
        //...mapGetters(['fetchedUserInfo'])
        userInfo() {
            return this.$store.state.userInfo;
        }
    }
}
</script>

<style>

</style>