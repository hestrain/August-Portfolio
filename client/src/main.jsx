import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';
import OuterContact from './pages/OuterContact';
import OuterAbout from './pages/OuterAbout';
import OuterPortfolio from './pages/OuterPortfolio';
import OuterResume from './pages/OuterResume';
import Error from './pages/Error';



// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <OuterAbout />,
      },
      {
        path: '/about',
        element: <OuterAbout />,
      },
      {
        path: '/portfolio',
        element: <OuterPortfolio />,
      },
      {
        path: '/contact',
        element: <OuterContact />,
      },
      {
        path: '/resume',
        element: <OuterResume />,
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);