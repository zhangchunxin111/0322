import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Login from '@/components/Login'
import Edit from '@/components/Edit'
import Reg from '@/components/Reg'
import Add from '@/components/Add'

Vue.use(Router)

var router= new Router({
  routes: [
    {
      path: '/',
      component: Main,

    },
      {
          path: '/login',
          component: Login
      },
      {
          path: '/edit',
          component: Edit
      },
      {
          path: '/reg',
          component: Reg
      },
      {
          path: '/add',
          component: Add
      },
  ]
})
// 无论哪个路由，在进入之前都要执行这个函数，判断是否登陆
router.beforeEach(function (to,from,next) {
    console.log(to);
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
export default router;
