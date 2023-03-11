import {Outlet} from "react-router-dom"
import HeaderBar from "@/components/header/HeaderBar";
import Container from "@mui/material/Container";

function Layout() {
  return (
    <div className="layout">
      <HeaderBar></HeaderBar>
      <main>
        <Container maxWidth="xl" sx={{mt: "20px"}}>
          <Outlet></Outlet>
        </Container>
      </main>
    </div>
  );
}

export default Layout;