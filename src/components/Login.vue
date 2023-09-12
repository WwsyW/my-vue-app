<template>
    
                <div class="login">
                    
                    <h3>重庆医科大学门诊化信息系统</h3>
                    <el-input v-model="username" placeholder="请输入用户名"/>
                    <el-input v-model="password" type="password" placeholder="请输入密码"/>
                    <div class="btn">
                        <el-button type="success" style="width:100%;" @click="userLogin">登录</el-button>
                        <el-button type="primary" style="width:100%;">重置</el-button>
                    </div>
                </div>
</template>     
<script>
import {useRouter} from 'vue-router'
    export default {
        data(){
            return{
                username:"检验医生",
               
                router:useRouter()
            }
        },
        methods: {
            userLogin(){
                if(this.username=="门诊医生"){
                    sessionStorage.setItem("power","outpatient")
                }else if(this.username=="检验医生"){
                    sessionStorage.setItem("power","laboratory")
                }
                this.$router.push({
                    path:'/home'
                })
            },
            
        },
        
    }
</script>


<style scoped>
.el-input{
    margin-top: 20px; 
}
.btn{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
}
.login{
    position: absolute;
    border: 1px orange solid;
    left: 40%;
    top:30%;
    border-radius: 15px;
    padding: 20px 30px;
}

.login h3{ 
    text-align: center;
}
</style>
