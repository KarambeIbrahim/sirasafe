//import * as ReactDOM from "react-dom/client";
import { useContext } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Home from './pages/home/Home';
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
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
