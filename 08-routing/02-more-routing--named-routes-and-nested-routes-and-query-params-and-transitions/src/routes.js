import Home from './components/Home.vue';
import User from './components/user/User.vue';
import UserStart from './components/user/UserStart.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';

export const routes = [
    // you dont have to name paths, but it does make things look a little cleaner (notice how im naming some paths and not naming others)
    { path: '/', name: 'Home', component: Home },
    {
        path: '/user', component: User, children: [
            // notice how the children paths dont start with '/'
            { path: '', component: UserStart },
            { path: ':id', component: UserDetail },
            // giving names makes redirecting a little easier (see 'UserDetail.vue)
            { path: ':id/edit', name: 'userEdit', component: UserEdit },
            // how to cover pages that dont exist (make sure the following route is last on the array)
            { path: '*', redirect: '/' },

        ]
    }

]