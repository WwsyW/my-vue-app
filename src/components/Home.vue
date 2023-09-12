<template>
    <!-- Home page ...
    {{$store.state.username}}
    <el-row class="mb-4">
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
      </el-row> -->
  
      <div class="common-layout">
    <el-container>
      <el-header>
        <div>
            <img style="height:60px;margin-top:10px" src="../assets/logo.png"/>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
            <el-menu
                active-text-color="#ffd04b"
                background-color="#545c64"
                class="el-menu-vertical-demo"
                default-active="2"
                text-color="#fff"
                router
            >
           
            <el-menu-item v-for="item in menuItem" :key="item.path" :index="item.path">
                <el-icon><Setting></Setting></el-icon>
                <span>{{ item.meta.title }}</span>
            </el-menu-item>
            </el-menu>
                
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>

  </div>


  </template>
    
  <script>
  
  export default {
    data(){
        return{
            menuItem:[],
            power:sessionStorage.getItem("power")
        }
    },
    mounted(){
        this. menuItem = this.$router.getRoutes()
        console.log(this. menuItem);
        console.log(this.power);
        this. menuItem = this. menuItem.filter(item=>item.meta.title!=null && item.meta.power == this.power)
        
        
    }

   }
  
  </script>
    
    <style scoped>
        .el-header{
            height: 80px;
            background: #01559e url(../assets/header.png) no-repeat right center
        }
        .el-aside{
            background-color: rgb(183, 225, 236);
        }
        .el-main{
            background-color: rgb(204, 236, 183);
        }
    

    </style>