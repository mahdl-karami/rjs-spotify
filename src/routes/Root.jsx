import { Outlet, Link } from "react-router-dom";
//? import components
import Sidebar from "../components/Sidebar";

function Root() {
  return (
    <div>
      <Sidebar />
      <h1>Root Page</h1>
      <button>
        <Link to={`/artist/1wJm5nKEUlhdV48hMMwzAm`}>Artist Page</Link>
      </button>
      <Outlet />
    </div>
  );
}

export default Root;
