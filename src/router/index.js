import IndexMain from '../components/index-main'

const routers=[
    {
        path:'/',
        redirect:'/index'
    },
    {
        path:'/index',
        name:'index',
        component: IndexMain
    }
];


export default routers;

