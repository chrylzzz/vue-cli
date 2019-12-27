import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '@/components/first'
import A from '@/components/A'
import B from '@/components/B'
import a1 from '@/components/a1'
import a11 from '@/components/a11'
import z from '@/components/z'
import y from '@/components/y'
import x from '@/components/x'

Vue.use(Router)

export default new Router({
  /**
   * mode:路由显示模式
   * 地址栏有 # 不符合常规,其次,特殊场景下 如微信支付,反向url做参数, #不满足需求,
   * # 为特殊字符
   * 而history可能需要后台处理404,如果没有 特殊场景,可以使用#
   * histiry具有对url历史记录修改的功能
   */
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'First',
      component: First,
      children:[
        {
          path:'/z',
          component:z,
          children:[
            {
              path:'/x',
              component:x,
            }
          ]
        },{
          path:'/y',
          component:y,
        }
      ]
    },{
      path: '/a',
      name: 'A',
      component: A,
      children:[//挂载子路由,a1的父页面是a
        {
          path:'/a1',
          component:a1
        },
      ]
    },{
      path: '/b',
      name: 'B',
      component: B
    },{//同级
      path:'/a11',
      component:a11
    },
  ]
})
