import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Projects from '@/components/Projects';
import Trips from '@/components/Trips';
import Blog from '@/components/Blog';
import BlogEntries from '@/components/blog-entries';

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog
    },
    {
        path: '/trips',
        name: 'Trips',
        component: Trips
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects
    },
    // The following route is necessary to resolve the home component at carlescapellas.xyz/vue-personal-page
    {
        path: '/vue-personal-page',
        name: 'Home',
        component: Home
    }
];

Object.values(BlogEntries).forEach(blogEntry => {
    routes.push({
        path: `/blog/${blogEntry.data().entry.id}` ,
        name: blogEntry.data().title,
        component: blogEntry
    });
});

const router = new Router({
    base: process.env.baseUrl,
    mode: 'history',
    routes
});

router.afterEach((to, from) => {
    window.scrollTo({ top: 0 });
});

export default router;
