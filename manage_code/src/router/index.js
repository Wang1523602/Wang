	import {
		createRouter,
		createWebHashHistory
	} from 'vue-router'
	import baojianleixing from '@/views/baojianleixing/list'
	import leixing from '@/views/leixing/list'
	import wenhuayuleshenqing from '@/views/wenhuayuleshenqing/list'
	import laoren from '@/views/laoren/list'
	import shequxinwen from '@/views/shequxinwen/list'
	import laorenjiashu from '@/views/laorenjiashu/list'
	import jingshenweiji from '@/views/jingshenweiji/list'
	import yiliaobaojianshenqing from '@/views/yiliaobaojianshenqing/list'
	import fuwuleixing from '@/views/fuwuleixing/list'
	import shenghuofuwushenqing from '@/views/shenghuofuwushenqing/list'
	import laorenRegister from '@/views/laoren/register'
	import laorenCenter from '@/views/laoren/center'
	import laorenjiashuRegister from '@/views/laorenjiashu/register'
	import laorenjiashuCenter from '@/views/laorenjiashu/center'

export const routes = [{
		path: '/login',
		name: 'login',
		component: () => import('../views/login.vue')
	},{
		path: '/',
		name: '首页',
		component: () => import('../views/index'),
		children: [{
			path: '/',
			name: '首页',
			component: () => import('../views/HomeView.vue'),
			meta: {
				affix: true
			}
		}, {
			path: '/updatepassword',
			name: '修改密码',
			component: () => import('../views/updatepassword.vue')
		}
		
		,{
			path: '/laorenCenter',
			name: '老人个人中心',
			component: laorenCenter
		}
		,{
			path: '/laorenjiashuCenter',
			name: '老人家属个人中心',
			component: laorenjiashuCenter
		}
		,{
			path: '/baojianleixing',
			name: '保健类型',
			component: baojianleixing
		}
		,{
			path: '/leixing',
			name: '类型',
			component: leixing
		}
		,{
			path: '/wenhuayuleshenqing',
			name: '文化娱乐申请',
			component: wenhuayuleshenqing
		}
		,{
			path: '/laoren',
			name: '老人',
			component: laoren
		}
		,{
			path: '/shequxinwen',
			name: '社区新闻',
			component: shequxinwen
		}
		,{
			path: '/laorenjiashu',
			name: '老人家属',
			component: laorenjiashu
		}
		,{
			path: '/jingshenweiji',
			name: '精神慰籍',
			component: jingshenweiji
		}
		,{
			path: '/yiliaobaojianshenqing',
			name: '医疗保健申请',
			component: yiliaobaojianshenqing
		}
		,{
			path: '/fuwuleixing',
			name: '服务类型',
			component: fuwuleixing
		}
		,{
			path: '/shenghuofuwushenqing',
			name: '生活服务申请',
			component: shenghuofuwushenqing
		}
		]
	},
	{
		path: '/laorenRegister',
		name: '老人注册',
		component: laorenRegister
	},
	{
		path: '/laorenjiashuRegister',
		name: '老人家属注册',
		component: laorenjiashuRegister
	},
]

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes
})

export default router
