import { createBrowserRouter } from "react-router-dom";
import Layout from "./../Layout/Layout";
import Home from "../Pages/Home/Home";
import FindTutors from "../Pages/FindTutors/FindTutors";
import AddTutorial from "../Pages/AddTutorial/AddTutorial";
import MyTutorials from './../Pages/MyTutorials/MyTutorials';
import MyBookedTutors from './../Pages/MyBookedTutors/MyBookedTutors';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/findTutors",
        element: <FindTutors></FindTutors>
      },
      {
        path: "/addTutorial",
        element: <AddTutorial></AddTutorial>
      },
      {
        path: "/myTutorial",
        element: <MyTutorials></MyTutorials>
      },
      {
        path: "/myBookedTutors",
        element: <MyBookedTutors></MyBookedTutors>
      },
    ],
  },
]);

export default router;
