import * as React from "react";
// import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import HeaderMenu from "@/components/header/HeaderMenu";
import Logo from "@/components/header/Logo";
import AuthModal from "@/components/modal/AuthModal";
import type {objectType, headerItem} from "@/types/common"
import { useAppSelector } from "@/redux/store"


const role = "guest";
// const role = "company";

const pages: objectType = {
  guest: [{label: "Корзина", code: "GuestCart"}, {label: "Мои заказы", code: "GuestOrders"}],
  company: [{label: "Заказы", code: "CompanyOrders"}, {label: "Блюда", code: "Menu"}, {label: "Аналитика", code: "Analytics"}],
}

const menu: objectType = {
  guest: [],
  company: [{label: "Профиль", code: "Profile"}, {label: "Выйти", code: "Logout"}],
}

function HeaderBar() {
  // const navigate = useNavigate();
  const count = useAppSelector(state => state.cartReducer.count)

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleModalOpen = (value) => setIsModalOpen(value);

  const handleNavMenu = (page) => {
    console.log("Редирект", page.code)
  }

  return (
    <AppBar position="sticky" color="default">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo></Logo>
          
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end", marginRight: "8px" }}>
            {pages[role].map((page: headerItem) => (
              <Box key={page.code} sx={{position: "relative"}}>
                <Button
                  onClick={() => handleNavMenu(page)}
                  sx={{ mx: 1, display: "block" }}
                >
                  {page.label}
                </Button>
                {page.code === "GuestOrders" && count !== 0
                  ? <Box className="count" sx={{position: "absolute", top: "-6px", right: "2px"}}>{count}</Box>
                  : null
                }
              </Box>
            ))}
          </Box>

          <HeaderMenu menu={menu} role={role} handleModalOpen={handleModalOpen}></HeaderMenu>
        </Toolbar>
      </Container>
      <AuthModal isModalOpen={isModalOpen} handleModalOpen={handleModalOpen}></AuthModal>
    </AppBar>
  );
}
export default HeaderBar;