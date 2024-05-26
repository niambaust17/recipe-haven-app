import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/ErrorPage";
import Profile from "../pages/Profile";
import Setting from "../pages/Setting";
import PrivateRoute from "./private/PrivateRoute";
import RecipeDetail from "../pages/RecipeDetail";
import AllRecipes from "../pages/AllRecipes";
import AddRecipe from "../pages/AddRecipe";
import EditRecipe from "../pages/EditRecipe";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('http://localhost:3000/recipes')
      },
      {
        path: "/recipes/:id",
        element: <RecipeDetail />,
        loader: ({params}) => fetch(`http://localhost:3000/recipes/${params.id}`)
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    errorElement: <ErrorPage/>,
    children: [
        {
          path: "",
          element: <Dashboard />,
        },
        {
          path: "all-recipes",
          element: <AllRecipes />,
        },
        {
          path: "add-recipe",
          element: <AddRecipe />,
        },
        {
          path: "all-recipes/edit/:id",
          element: <EditRecipe />,
          loader: ({params}) => fetch(`http://localhost:3000/recipes/${params.id}`)
        },
      ],
  },
]);
