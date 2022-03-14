<template>
    <div>
        <div class="user-container">
            <div>
                <i class="fa-solid fa-user-secret"></i>
            </div>
            <div class="user-description">
                <!-- <div> -->
                    <!-- {{ info.id }} -->
                    <!-- {{ userInfo.id }} -->
                <!-- </div> -->
                <slot name="username">
                    <!-- 상위 컴포넌트에서 정의할 영역 -->
                </slot>
                <div class="time">
                    <!-- {{ info.created }} -->
                    <!-- {{ userInfo.created }} -->
                    <slot name="time">
                        <!-- 상위 컴포넌트에서 정의할 영역 -->
                    </slot>
                </div>
                <slot name="karma"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
      info: Object  
    },
    //computed: {
        //...mapGetters(['fetchedUserInfo'])
        //2 props 데이터로 info를 가져오기때문에 state를 사용하지 않아도 된다.
        // userInfo() {
        //     return this.$store.state.userInfo;
        // }
    //}
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