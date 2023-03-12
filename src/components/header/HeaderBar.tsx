import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import IconStorefront from "@mui/icons-material/Storefront";
import HeaderMenu from "@/components/header/HeaderMenu";
import DefaultModal from "@/components/modal/DefaultModal";
import type {objectType, headerItem} from "@/types/common"


const role = "guest";
// const role = "company";

const pages: objectType = {
  guest: [{label: "Мои заказы", code: "GuestOrders"}],
  company: [{label: "Заказы", code: "CompanyOrders"}, {label: "Блюда", code: "Menu"}, {label: "Аналитика", code: "Analytics"}],
}

const menu: objectType = {
  guest: [],
  company: [{label: "Профиль", code: "Profile"}, {label: "Выйти", code: "Logout"}],
}

function HeaderBar() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = React.useState(false);  
  const showLoginModal = () => setIsModalOpen(true);
  const hideLoginModal = () => setIsModalOpen(false);

  const toMain = () => {
    navigate(`${process.env.REACT_APP_REPO}/`);
  }

  const handleNavMenu = (page) => {
    console.log("Редирект", page.code)
  }
  return (
    <AppBar position="static" color="default">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconStorefront sx={{ display: "flex", mr: 1 }} />
          <Typography
            onClick={toMain}
            variant="h6"
            noWrap
            component="span"
            sx={{
              mr: 2,
              display: "flex",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            ByTheWay
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end", marginRight: "8px" }}>
            {pages[role].map((page: headerItem) => (
              <Button
                key={page.code}
                onClick={() => handleNavMenu(page)}
                sx={{ mx: 1, display: "block" }}
              >
                {page.label}
              </Button>
            ))}
          </Box>

          <HeaderMenu menu={menu} role={role} showLoginModal={showLoginModal}></HeaderMenu>
        </Toolbar>
      </Container>
      <DefaultModal isModalOpen={isModalOpen} hideLoginModal={hideLoginModal}></DefaultModal>
    </AppBar>
  );
}
export default HeaderBar;