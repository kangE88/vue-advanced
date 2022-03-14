<template>
    <!-- <div>
        <p>name : {{ userInfo.id }}</p>
        <p>karma : {{ userInfo.karma }}</p>
        <p>created : {{ userInfo.created }}</p>
    </div> -->
    <UserProFile :info="userInfo">
        <template v-slot:username>{{ userInfo.id }}</template>
        <template v-slot:time>{{ userInfo.created }}</template>
        <template v-slot:karma>{{ userInfo.karma }}</template>
        <!-- <div slot="username">{{ userInfo.id }}</div>
        <template slot="time">{{ userInfo.created }}</template>
        <div slot="karma">{{ userInfo.created }}</div> -->
    </UserProFile>
</template>

<script>
import UserProFile from '../components/UserProFile';

export default {
    components: {
        UserProFile,
    },
    //https://api.hnpwa.com/v0/user/davideast.json
    created() {
        //this.$route.params.id 
        const userName = this.$route.params.id;
        this.$store.dispatch('FETCH_USER_INFO', userName); //여러개면 객체로 넘겨준다.
    },
    computed: {
    // //     //...mapGetters(['fetchedUserInfo'])
        userInfo() {
            return this.$store.state.userInfo;
        }
    }
}
</script>