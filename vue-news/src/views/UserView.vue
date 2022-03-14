<template>
    <UserProFile :info="userInfo">
        <template v-slot:username>{{ userInfo.id }}</template>
        <template v-slot:time>{{ 'Joined '+ userInfo.created }},</template>
        <template v-slot:karma>{{ userInfo.karma }}</template>
    </UserProFile>
</template>

<script>
import UserProFile from '../components/UserProFile';

export default {
    components: {
        UserProFile,
    },
    created() {
        const userName = this.$route.params.id;
        this.$store.dispatch('FETCH_USER_INFO', userName); //여러개면 객체로 넘겨준다.
    },
    computed: {
        userInfo() {
            return this.$store.state.userInfo;
        }
    }
}
</script>