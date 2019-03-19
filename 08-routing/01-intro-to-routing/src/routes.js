import Home from './components/Home.vue';
import UserA from './components/user/UserA.vue';
import UserB from './components/user/UserB.vue';
import UserStart from './components/user/UserStart.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';

export const routes = [
    { path: '/', component: Home },
    // OPTION A
    // { path: '/user/:id', component: UserA },
    // OPTION B
    {
        path: '/user', component: UserB, children: [
            { path: '', component: UserStart },
            { path: ':id', component: UserDetail },
            // giving names makes redirecting a little easier (see 'UserDetail.vue)
            { path: ':id/edit', component: UserEdit, name: 'userEdit' },
            // how to cover pages that dont exist (make sure the following route is last on the array)
            { path: '*', redirect: '/' },

        ]
    }

]