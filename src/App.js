//import * as ReactDOM from "react-dom/client";
import { useContext } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Home from './pages/home/Home';
import Bus from './pages/bus/Bus';
import Dashboard from './pages/dashboard/Dashboard';
import Trajets from './pages/trajets/Trajets';
import Comptes from './pages/comptes/Comptes';
//import Topbar from './pages/global/Topbar';
//import Sidebar from './pages/global/Sidebar';
import Conducteurs from './pages/conducteurs/Conducteurs';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { Navigate } from "react-router-dom";

function App() {

  const { currentUser } = useContext(AuthContext);

  const AuthRoute = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/dashboard", 
      element: <Dashboard />
    },
    {
      path: "/conducteurs", 
      element: <Conducteurs />
    },
    { 
      path: "/bus",
    element: <Bus />
  },
    { 
      path: "/trajets",
    element: <Trajets />
  },
    { 
      path: "/comptes",
    element: <Comptes />
  },
  
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
