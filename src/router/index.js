import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import ClassComponent from '../components/ClassComponent.vue';
import SignupComponent from '../components/SignupComponent.vue';
import LoginComponent from '../components/LoginComponent.vue'
import DashboardComponent from '../components/DashboardComponent.vue'
import UsersComponent from '../components/UsersComponent.vue';
import UserDetails from '../components/UserDetails.vue';
import ReactionTimer from '../components/ReactionTimer.vue';
import NotFound from '../components/NotFound.vue';

const routes = [
    {
        path: '/',
        component: HelloWorld,
        name: "Home"
    },
    {
        path: '/class',
        component: ClassComponent,
        name: "class"
    },
    {
        path: '/signup',
        component: SignupComponent,
        name: "signup"
    },
    {
        path: '/login',
        component: LoginComponent,
        name: "login"
    },
    {
        path: '/dashboard',
        component: DashboardComponent,
        name: "dashboard"
    },
    {
        path: "/users",
        component: UsersComponent,
        name: "user"
    },
    {
        path: "/users/:id",
        component: UserDetails,
        name: "details",   
    },
    {
        path: '/game',
        component: ReactionTimer,
        name: 'game'
    },
    {
        path: '/:pathMatch(.*)*',
        component:NotFound,
        name: "error"
    },
]

const router = createRouter({   
    history : createWebHistory(),
    routes
})

export default router;