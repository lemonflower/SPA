import React from 'react';

const Login = React.lazy(() => import('./Login/index'));
const NotFound = React.lazy(() => import('./NotFound'));
const Home = React.lazy(() => import('./Home'));
const Simulation=React.lazy(() => import('./Simulation'));
const Music=React.lazy(() => import('./Music'));
const Game=React.lazy(() => import('./Game'));
const Menu=React.lazy(() => import('./Menu'));
const SimulationData =React.lazy(() => import('./Simulation/SimulationData'));
const SimulationHome =React.lazy(() => import('./Simulation/SimulationHome'));
const SimulationOperation =React.lazy(() => import('./Simulation/SimulationOperation'));
const SimulationHome =React.lazy(() => import('./Simulation/SimulationHome'));
const routerList=[
     // exact: true, 开启后，不会去匹配子路由
    { path: '/login', component: Login, exact: true },
    {
        path: '/',
        component: Home,
        routes:[
            { path: '/', component:Menu,exact:true},
            { path: '/simulation', 
              component:Simulation ,
              routes:[
                  { path: '/simulation', component: SimulationHome },
                  { path: '/simulation/:Code', component: SimulationOperation,
                  routes:[
                    { path: '/simulation/:Code/data', component: SimulationData },
                    { path: '/simulation/:Code/page', component: SimulationPage },
                    { path: '/simulation/:Code', redirectTo: '/simulation/:Code/data', exact: true },
                    { path: '*', component: NotFound }
                ] },
                { path: '*', component: NotFound }       
        ]},
            { path: '/music', component:Music},
            { path: '/game', component:Game },     
        ]
    },
    
    { path: '*', component: NotFound }
    
];