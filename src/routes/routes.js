import config from '~/config';

//Layouts
import { ProductLayout } from '~/layouts';

//Pages
import Home from '~/pages/Home';
import SignIn from '~/pages/SignIn';
import Product from '~/pages/Product';
import Jordan from '~/pages/Jordan';
import Converse from '~/pages/Converse';
import Help from '~/pages/Help';

//Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.signin, component: SignIn },
    { path: config.routes.help, component: Help },
    { path: config.routes.jordan, component: Jordan },
    { path: config.routes.product, component: Product, layout: ProductLayout },
    { path: config.routes.converse, component: Converse, layout: ProductLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
