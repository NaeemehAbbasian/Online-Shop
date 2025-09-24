import { createBrowserRouter } from 'react-router';
import MainLayout from './components/layouts/ MainLayout';
import HomePage from './pages/homePage/homePage';
import ProductsPage from './pages/ProductsPage/ProductsPage';

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
      },
    ],
  },
]);

export { router };