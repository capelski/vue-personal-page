import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home';
import Projects from '@/components/projects';
import Trips from '@/components/trips';
import Blog from '@/components/blog/blog';
import BlogEntries from '@/components/blog/entries/components';

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
    }
];

Object.values(BlogEntries).forEach(blogEntry => {
    routes.push({
        path: `/blog/${blogEntry.data().entry.id}/:language?`,
        name: blogEntry.data().title,
        component: blogEntry
    });
});

const router = new Router({
    base: '/vue-personal-page',
    mode: 'history',
    routes
});

export default router;
