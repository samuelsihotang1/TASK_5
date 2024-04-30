import { createRouter, createWebHistory } from 'vue-router';
import PageDisplay from '../views/PageDisplay.vue';

const routes = [
	{
		path: '/',
		name: 'pagedisplay',
		component: PageDisplay,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
