import Home from './components/Home.vue';
import User from './components/user/User.vue';
import UserStart from './components/user/UserStart.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';
import Header from './components/Header.vue'

// the named router-views wont render anything if they are not specified in the 'components' property,
// doing this allows us to render a component in different parts of the page 
// THE Header component will be rendered in on the top of the page in '/home' and on the bottom of the page in '/user'
export const routes = [
    {
        path: '/', name: 'home', components: {
            default: Home,
            'header-top': Header
        }
    },
    {
        path: '/user', components: {
            default: User,
            'header-bottom': Header
        },
        children: [
            { path: '', component: UserStart },
            // can use guards locally by using beforeEnter here
            {
                path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
                    console.log('inside route setup');
                    next();
                }
            },
            { path: ':id/edit', name: 'userEdit', component: UserEdit },
            { path: '*', redirect: '/' },
        ]
    }

]