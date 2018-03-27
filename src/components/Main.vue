<template>
  <table class="table table-bordered">
    <tbody>
      <tr>
        <th>id</th>
        <th>姓名</th>
        <th>年龄</th>
        <th>班级</th>
        <th>学科</th>
        <th>分数</th>
        <th>操作</th>
      </tr>
      <tr v-for="item in datas">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.age}}</td>
        <td>{{item.classes}}</td>
        <td>{{item.project}}</td>
        <td>{{item.score}}</td>
        <td>
          删除
          <a :href="'#/edit'" @click="edit">编辑</a>
        </td>
      </tr>
      <div class="glyphicon glyphicon-plus" @click="add">添加</div>

    </tbody>
  </table>
</template>

<script>

    export default {
  name: 'HelloWorld',
  data () {
    return {
      datas:[
          {id:1,name:"zhangsan",age:12,classes:"01",project:"英语",score:"50"},
          {id:2,name:"lisi",age:13,classes:"01",project:"高数",score:"50"},
          {id:3,name:"wangwu",age:14,classes:"01",project:"语文",score:"50"},

      ]
    }
  },
        methods:{
          edit(){
              localStorage.login="yes";
          },
            add(){
                localStorage.login="yes";
                this.$router.push({"path":"/add"})
            }
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
