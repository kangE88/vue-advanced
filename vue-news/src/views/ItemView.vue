<template>
    <div>
        <p>{{ itemInfo.title }}</p>
        <p>{{ itemInfo.user }}</p>
    </div>
</template>

<script>
export default {
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

<style>

</style>