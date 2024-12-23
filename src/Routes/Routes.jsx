import { createBrowserRouter } from "react-router-dom";
import Layout from "./../Layout/Layout";
import Home from "../Pages/Home/Home";
import FindTutors from "../Pages/FindTutors/FindTutors";
import AddTutorial from "../Pages/AddTutorial/AddTutorial";
import MyTutorials from "./../Pages/MyTutorials/MyTutorials";
import MyBookedTutors from "./../Pages/MyBookedTutors/MyBookedTutors";
import SignIn from "../Pages/Acounts/SignIn";
import SignUp from "../Pages/Acounts/SignUp";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    loader: () => fetch(`https://tutor-sphere-server-side.vercel.app/users`),
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(`https://tutor-sphere-server-side.vercel.app/langueges`),
      },
      {
        path: "/findTutors",
        element: <FindTutors></FindTutors>,
      },
      {
        path: "/addTutorial",
        element: (
          <PrivateRoutes>
            <AddTutorial></AddTutorial>
          </PrivateRoutes>
        ),
        loader: () =>
          fetch(`https://tutor-sphere-server-side.vercel.app/users`),
      },
      {
        path: "/myTutorial",
        element: (
          <PrivateRoutes>
            <MyTutorials></MyTutorials>
          </PrivateRoutes>
        )
      },
      {
        path: "/myBookedTutors",
        element: (
          <PrivateRoutes>
            <MyBookedTutors></MyBookedTutors>
          </PrivateRoutes>
        ),
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;
