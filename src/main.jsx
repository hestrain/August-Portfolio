import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';
import OuterContact from './components/pages/OuterContact';
import OuterAbout from './components/pages/OuterAbout';
import OuterPortfolio from './components/pages/OuterPortfolio';
import OuterResume from './components/pages/OuterResume';
import Error from './components/pages/Error';



// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        path: '/',
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