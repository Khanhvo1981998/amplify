import HomePage from "../pages/HomePage/HomePage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Detail from "../pages/Detail/Detail";
import Error from "../pages/Error/Error";
import TemplateTheme from "../component/HeaderTemplate/TemplateTheme";
import Checkout from "../pages/Checkout/BookingSeats/Checkout";
import UserLoginTemplate from "../templates/UserTempalte/UserLoginTemplate";
import Contact from "../pages/Contact/Contact";
import DetailTemplate from "../templates/DetailTemplate/Template/DetailTemplate";
import Myseat from "../pages/Checkout/MySeat/Myseat";
export const userRoutes = [
    {
        path: "/",
        Element: <TemplateTheme Component={HomePage} />,
        exact: true,
    },
    {
        path: "/register",
        Element: <Register />,
    },
    {
        path: "/login",
        Element: <Login />,
    },

    {
        path: "/contact",
        Element: <Contact />,
    },

    {
        path: "/checkout/:id",
        Element: <UserLoginTemplate Component={Checkout} />,
    },
    {
        path: "/myseat",
        Element: <UserLoginTemplate Component={Myseat} />,
    },
    {
        path: "/detail",
        Element: <TemplateTheme Component={Detail} />,
    },
    {
        path: "/detail/:id",
        Element: <TemplateTheme Component={Detail} />,
    },
    {
        path: "*",
        Element: <TemplateTheme Component={Error} />,
    },
];