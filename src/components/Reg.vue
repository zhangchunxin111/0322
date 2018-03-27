<template>
    <div class="reg">
        <h3>注册</h3>

        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>
            <button type="submit" class="btn btn-default" @click="login1">注册</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "reg",
        methods:{
            login1(){
                this.$router.push({"path":"/login"})
            }
        }
    }

</script>

<style scoped>
.reg{
    margin-top: 150px;
    width: 500px;
    height: 300px;
    position: absolute;
    top:0;bottom: 0;left: 0;right: 0;
    margin: auto;
}
</style>