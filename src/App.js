import LeftBar from "./components/leftBar/LeftBar";
import NavBar from "./components/navbar/Navbar";
import RightBar from "./components/rightBar/RightBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
function App() {

  const Layout=()=>{
    return (
      <div>
        <NavBar/>
        <div style={{display: "flex"}}>
        <LeftBar/>
        <Outlet/>
        <RightBar/>

        </div>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    }
  ]);
  return (
    <div >
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
