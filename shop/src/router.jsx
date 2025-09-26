import { createBrowserRouter } from 'react-router';
import MainLayout from './components/layouts/ MainLayout';
import HomePage from './pages/homePage/homePage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import SignUp from './pages/SignUp/SignUp'
import Login from './pages/ Login/Login'
import Cart from './pages/Cart/Cart/Cart'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },{
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/Cart", 
        element: <Cart />,
      },
    ],
  },
]);

export { router };