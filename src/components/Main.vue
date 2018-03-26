<template>
	<table class="table table-bordered">
		<tbody>
		<tr>
			<th>id</th>
			<th>姓名</th>
			<th>性别</th>
			<th>年龄</th>
			<th>班级</th>
			<th>学科</th>
			<th>分数</th>
			<th>操作</th>
		</tr>
		<tr v-for="item in datas">
			<td>{{item.id}}</td>
			<td>{{item.name}}</td>
			<td>{{item.sex}}</td>
			<td>{{item.age}}</td>
			<td>{{item.classes}}</td>
			<td>{{item.project}}</td>
			<td>{{item.score}}</td>
			<td>删除
				<a href="'#/edit'" @click="edit()">编辑</a>
			</td>
		</tr>
		<div @click="add">添加</div>
		</tbody>
	</table>
</template>

<script>
	export default{
		name:'HelloWorld',
		data(){
			return {
				datas:[
				  {id:1,name:'zhangsan',sex:'nan',age:13,classes:3,project:'语文',score:90},
				  {id:2,name:'lisi',sex:'nan',age:14,classes:4,project:'数学',score:88},
				  {id:3,name:'wangwu',sex:'nan',age:14,classes:4,project:'数学',score:88},
				]
			}
		},
		methods:{
			edit(){
				localStorage.login="yes"
			},
			add(){
				localStorage.login="yes",
				this.$router.push({"path":"/add"})
			}
		}
	}
</script>

<style>
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