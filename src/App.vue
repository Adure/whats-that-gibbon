<template>
    <div id="app" class="ui container">
        <div class="header">
        </div>
        <router-view class="view"></router-view>
    </div>
</template>

<script>

export default {
    name: "App",
    components: {},
    created() {
    }
};
</script>

<style>
#app {
    position: relative;
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 0;
}
</style>
