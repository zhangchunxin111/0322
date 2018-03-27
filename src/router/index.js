import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/Main'
import Login from '@/components/Login'
import Edit from '@/components/Edit'
import Add from '@/components/Add'
import Reg from '@/components/Reg'
Vue.use(Router)

var router=new Router({
  routes: [
    {
      path: '/',
      component: Main
    },
    {
    	path:'/login',
    	component:Login
    },
    {
    	path:'/edit',
    	component:Edit
    },
    {
    	path:'/add',
    	component:Add
    },
    {
    	path:'/reg',
    	component:Reg
    }
  ]
})
router.beforeEach(function(to,from,next){
	if(localStorage.login=="yes"){
		next();
	}else{
		if(to.path=="/login"||to.path=="/reg"){
            next();
        }else {
            next("/login")
        }
	}
})

export default router
