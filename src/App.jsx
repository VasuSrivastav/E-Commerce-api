import {createBrowserRouter, Link, RouterProvider} from "react-router-dom";
import "./App.css";
import Home from "./components/Home"
import Details from "./components/Details";
import Context from "./utils/Context";
import Create from "./components/Create";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/details/:id",
      element: <Details />
    },
    {
      path: "/create",
      element: <Create />
    },
  ]
);

function App() {
  return (
    <Context >
      <div className="h-screen w-screen flex">
        
    <RouterProvider router={router} />
    </div>
      </Context>

  );
}

export default App;
