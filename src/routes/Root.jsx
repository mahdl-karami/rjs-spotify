//? react router dom
import { Outlet } from "react-router-dom";
//? import components (header, footer, sidebar and ...)
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
