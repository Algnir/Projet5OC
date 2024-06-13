import Accueil from './pages/Accueil/Accueil.jsx';
import APropos from './pages/A-Propos/A-Propos.jsx';
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer';
import {createBrowserRouter, RouterProvider ,Outlet, Navigate} from "react-router-dom";
import Error from './pages/Error/Error.jsx';
import CardPage from './pages/CardPage/CardPage.jsx'

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <>
      <Header />
      <Error />
      <Footer />
    </>,
    children: [
      {
        path: '/',
        element: <Navigate to="/Accueil" />
      },
      {
        path: '/Accueil',
        element: <Accueil />
      },
      {
        path: '/A-Propos',
        element: <APropos />
      },
      {
        path: '/:id',
        element: <CardPage />
      }
    ]
  }
]);

function Root(){
  return <>
    <Header/>
    <Outlet/>
    <Footer/>
  </>
}

function App() {
  return <RouterProvider router={router}/>
}

export default App;
