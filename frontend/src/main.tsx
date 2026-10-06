import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx';
import Meeting from './pages/Meeting.tsx';
import NotFound from './pages/NotFound.tsx';
import Home from './pages/Home.tsx';

const router = createBrowserRouter([
  {
    path: "/", element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "meeting", element: <Meeting /> },
    ]
  },
  { path: "*", element: <NotFound /> }
]);

createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
);