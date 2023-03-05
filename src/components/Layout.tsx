import {Outlet} from "react-router-dom"
import CustomLink from "./CustomLink";

function Layout() {
  return (
    <div className="layout">
      <header>
        <CustomLink to="/">Главная</CustomLink>
        <CustomLink to="/registration">Регистрация</CustomLink>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
}

export default Layout;