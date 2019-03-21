import Home from './components/Home.vue';
import Header from './components/Header.vue'

// lazy loading with webpack - looks confusing but basically just loads bundles asynchronously when required
const User = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue'));
    })
}

const UserStart = resolve => {
    require.ensure(['./components/user/UserStart.vue'], () => {
        resolve(require('./components/user/UserStart.vue'));
    })
}

const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue'));
    })
}

const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], () => {
        resolve(require('./components/user/UserDetail.vue'));
    })
}

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