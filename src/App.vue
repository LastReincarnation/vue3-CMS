<template>
    <div>{{ $store.state.name }}</div>
    <router-link to="/">登录</router-link>
    <router-link to="/main">首页</router-link>
    <router-view></router-view>
    <el-button type="danger">嘻嘻嘻</el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'App',
    components: {}
})
</script>

<style lang="less">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
