<template>
    <div>
        <div class="user-container">
            <div>
                <i class="fa-solid fa-user-secret"></i>
            </div>
            <div class="user-description">
                <!-- 상위 컴포넌트에 가져올 영역 -->
                <slot name="username"></slot>
                <div class="time">
                    <slot name="time"></slot>
                    <slot name="karma"></slot>
                </div>
                <!-- 상위 컴포넌트에 가져올 영역 -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
      info: Object  
    },
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