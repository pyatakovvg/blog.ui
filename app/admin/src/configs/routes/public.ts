
import { loader } from '@library/app';


const routes: any[] = [
  {
    path: '/',
    module: loader(() => import(/* webpackChunkName: "module.main" */'@module/main')),
  },
  {
    path: '/articles/:uuid',
    module: loader(() => import(/* webpackChunkName: "module.article" */'@module/article')),
  },
  {
    path: '/sign-in',
    module: loader(() => import(/* webpackChunkName: "module.sign-in" */'@module/sign-in')),
  },
];

export default routes;
