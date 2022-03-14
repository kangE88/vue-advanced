<template>
    <div>
        <section>
            <!-- 질문 상세 정보 -->
            <!-- UserProFile -->
            <UserProFile :info="itemInfo">
                <template v-slot:username>
                    <router-link :to="`/user/${itemInfo.user}`">
                        {{ itemInfo.user }}
                    </router-link>
                </template>
                <template v-slot:time>{{ 'Posted '+ itemInfo.time_ago }}</template>
            </UserProFile>
        </section>
        <section>
            <h2>{{ itemInfo.title }}</h2>
        </section>
        <section>
            <!-- 질문 댓글 -->
            <div v-html="itemInfo.content"/> <!-- {{ itemInfo.content }} 데이터가 태그로 들어가 있어 태그를 직접 넣을 때 사용 -->
        </section>
    </div>
</template>

<script>
import UserProFile from "../components/UserProFile";

export default {
  components: { UserProFile },
    created() {
        const userId = this.$route.params.id;
        this.$store.dispatch('FETCH_ITEM_INFO', userId);
    },
    computed: {
        itemInfo() {
            return this.$store.state.itemInfo;
        }
    }
}
</script>

<style scoped>
.user-container {
    display: flex;
    align-items: center;
    padding: 0.5rem;
}
.fa-user-secret{
    font-size: 2.5rem;
}
.user-description {
    padding-left: 8px;
}
.time {
    font-size: 0.7rem;
}
</style>