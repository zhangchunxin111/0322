<template>
    <div class="login">
        <h3>登录页</h3>
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">用户名</label>
                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">密码</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>
            <button type="submit" class="btn btn-default" @click="onsubmit">登录</button>
            <button type="submit" class="btn btn-default" @click="reg">注册</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return{
            }
        },
        methods:{
            onsubmit(){
                localStorage.login="yes";
                this.$router.push({"path":"/"});
            },
            reg(){
               this.$router.push({"path":"/reg"});
            }
        }
    }
</script>

<style scoped>
.login{
    width: 500px;
    position: absolute;
    top:0;bottom: 0;left: 0;right: 0;
    margin: auto;
    line-height: 20px;
    text-align: center;
    margin-top: 150px;
}
input{
   box-sizing: content-box;
}
</style>