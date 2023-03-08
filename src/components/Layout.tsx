import {Outlet} from "react-router-dom"
import HeaderBar from "./HeaderBar";

function Layout() {
  return (
    <div className="layout">
      <HeaderBar></HeaderBar>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
}

export default Layout;