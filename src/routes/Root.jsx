import { Outlet, Link } from "react-router-dom";
//? import components
import Sidebar from "../components/Sidebar";

function Root() {
  return (
    <>
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Root;
