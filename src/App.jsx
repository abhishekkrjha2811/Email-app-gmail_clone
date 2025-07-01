import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./components/shared/Navbar";
import Inbox from "./components/Inbox";
import Mail from "./components/Mail";
import Body from "./components/Body";
import SendMail from "./components/SendMail";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import store from "./redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Inbox />,
      },
      {
        path: "/mail/:id",
        element: <Mail />,
      },
    ],
  },
]);

function App() {
  const { user } = useSelector(state => state.appSlice);
  // const user = true;
  return (
    <div className="bg-[#F6F8FC] h-screen w-screen overflow-hidden">
      {
      !user ? (
        <Login />
      ) : (
        <>
          <Navbar />
          <RouterProvider router={router} />
          <div className="absolute w-[30%] bottom-0 right-20 z-10">
            <SendMail />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
