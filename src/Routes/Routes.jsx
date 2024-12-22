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
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
      },
      {
        path: "/myTutorial",
        element: (
          <PrivateRoutes>
            <MyTutorials></MyTutorials>
          </PrivateRoutes>
        ),
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
