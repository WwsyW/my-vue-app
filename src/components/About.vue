<template>
    
    About page ...
    <el-icon><Setting /></el-icon>
    {{$store.state.username}}
</template>

<script>
    import {Setting} from "@element-plus/icons-vue"
    export default {
        data(){
            return{}
        },
        components:{
            Setting
        }
    }
</script>

<style lang="scss" scoped>

</style>