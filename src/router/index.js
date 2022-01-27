import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/Home.vue';
import About from '../components/About.vue';

import Courses from '../components/Courses.vue';
import CoursesMessage from '../components/CoursesMessage.vue';
import Node from '../components/Node.vue';
import React from '../components/React.vue';
import Angular from '../components/Angular.vue';
import PHP from '../components/PHP.vue';

import ComputedExample from '../components/ComputedExample.vue';
import Products from '../components/Products.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            alias: '/redirectToHome'
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/courses/',
            // name: 'Courses',
            beforeEnter: customRouteGuard,
            component: Courses,
            children: [
                {
                    path: '',
                    component: CoursesMessage
                },
                {
                    path: 'node',
                    component: Node
                },
                {
                    path: 'react',
                    component: React
                },
                {
                    path: 'angular',
                    component: Angular
                },
                {
                    path: 'php',
                    component: PHP
                }
            ]
        },
        {
            path: '/redirectToAbout',
            redirect: { name: 'About' }
        },
        {
            path: '/computedExample',
            component: ComputedExample
        },
        {
            path: '/products',
            name: 'Products',
            component: Products
        },
    ]
});

//Guard to allow only authenticated users to access Courses page
function customRouteGuard(to, from, next) {

    let isAuthenticated = false;

    if (localStorage.getItem("uid") != undefined) {
        isAuthenticated = true;
    }

    if (isAuthenticated == true) {
        next();
    }
    else {
        alert("You haven't reached that level yet, kid.");
        next({ name: 'Home' });
    }
}