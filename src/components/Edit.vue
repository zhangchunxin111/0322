<template>
    <div>
        <div>
            <form>
                <div class="form-group">
                    <label for="name">姓名 address</label>
                    <input type="email" class="form-control" id="name" placeholder="Email">
                </div>
                <div class="form-group">
                    <label for="name">性别</label>
                    <div class="radio">
                        <label>
                            <input type="radio" name="optionsRadios" id="optionsRadios2" value="man">
                            男
                        </label>
                    </div>
                    <div class="radio disabled">
                        <label>
                            <input type="radio" name="optionsRadios" id="optionsRadios3" value="woman">
                            女
                        </label>
                    </div>

                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>


                <div class="form-group">
                    <label for="exampleInputPassword1">年龄</label>
                    <input type="datetime-local" class="form-control" id="age" placeholder="age">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">班级</label>
                    <input type="" class="form-control" id="classes" placeholder="班级">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">学科</label>
                    <input type="" class="form-control" id="project" placeholder="学科">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">分数</label>
                    <input type="" class="form-control" id="score" placeholder="分数">
                </div>
                <button type="submit" class="btn btn-default" @click="t_jiao">提交</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "edit",
        data(){
            return{

            }

        },
        methods:{
            t_jiao(){
                localStorage.login="yes";
                this.$router.push({"path":"/"})
            }
        }
    }
</script>

<style scoped>
h1{
    color: yellow;
    font-size: 20px;
    margin: 0 auto;
}
</style>