<template>
  <div id="app">
      <div class="container header">
        <a href="#/" class="glyphicon glyphicon-home"></a>
        <span class="glyphicon glyphicon-arrow-left" v-show=""></span>
      <header>
        <div class="title">学生成绩管理表</div>
        <div class="login">欢迎xxx登录
          <span @click="quit">退出</span></div>
      </header>
        <transition mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
//  methods:{
//      quit(){
//          localStorage.login="";
//          this.$router.push({"path":"/login"})
//      }
//  },
    methods:{
    	quit(){
    		localStorage.login="",
    		this.$router.push({"path":"/login"})
    	}
    },
    // mounted(){
    //   fetch("/api/abc").then(function () {
    //
    //   })
    // }

}
</script>

<style scoped>
.container{
  height: 44px;
  background: #f5f5f5;
}
.container header{
  width: 100%;
  height: 100%;
  line-height: 2px;
}
  .container header .title{
    float: left;
    margin-left: 10px;
  }
.container header .login{
  float: right;
}
.glyphicon{
  position: relative;
  top: 13px;
  left: -10px;
}
  .v-enter{
    opacity: 0;
  }
  .v-enter-active{
    transition: 1s opacity linear;
  }
  .v-enter-to{
    opacity: 1;
  }
.v-leave{
  opacity: 1;
}
.v-leave-active{
  transition: 1s opacity linear;
}
.v-leave-to{
  opacity: 0;
}
</style>
