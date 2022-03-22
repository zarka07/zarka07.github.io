import { createWebHistory, createRouter } from 'vue-router';
import AuthorizationItem from '@/views/Authorization.vue';
//import UserItem from '@/components/User.vue';

const routes = [
	{
		path: '/',
		name: 'Authorization',
		component: AuthorizationItem,
	},
    {
		path: '/user',
		name: 'User',
		component: () => import (/*webpackChunkName: "about" */ '@/views/User.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;