export default {
    name:'daybook',
    component: () => import(
        /* webpackChunkName: "about" */ 
        '@/modules/daybook/layouts/DayBookLayout'),
    children:[
        {
            path:'',
            name:'daybook-no-entry',
            component: () => import(
                /* webpackChunkName: "about" */
                '@/modules/daybook/views/NoEntrySelected')
        },
        {
            path:':id',
            name:'daybook-entry',
            component: () => import(
                /* webpackChunkName: "about" */
                '@/modules/daybook/views/Entry')
        }
    ]
}