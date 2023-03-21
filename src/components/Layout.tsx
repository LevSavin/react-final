import {Outlet} from "react-router-dom"
import HeaderBar from "@/components/header/HeaderBar";
import Footer from "@/components/footer/Footer";
import Container from "@mui/material/Container";

function Layout() {
  return (
    <div className="layout">
      <HeaderBar></HeaderBar>
      <main>
        <Container maxWidth="xl" sx={{mt: "20px", minHeight: "70vh"}}>
          <Outlet></Outlet>
        </Container>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Layout;