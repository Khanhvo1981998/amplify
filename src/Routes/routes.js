
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    { path: '/contact', component: Contact },
    { path: '/about', component: About },

];

export { publicRoutes };
