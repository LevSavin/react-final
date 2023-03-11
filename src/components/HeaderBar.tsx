import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import IconStorefront from "@mui/icons-material/Storefront";

const companyPages = [{label: "Заказы", code: "Orders"}, {label: "Блюда", code: "Menu"}, {label: "Аналитика", code: "Analytics"}];
const companyMenu = [{label: "Профиль", code: "Profile"}, {label: "Выйти", code: "Logout"}];

function HeaderBar() {
  const navigate = useNavigate();

  const toMain = () => {
    navigate(`${process.env.REACT_APP_REPO}/`);
  }

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavMenu = (page) => {
    console.log("Редирект", page.code)
  }

  const handleMenu = (page) => {
    console.log("Редирект", page.code)
    handleCloseUserMenu();
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
            {companyPages.map((page) => (
              <Button
                key={page.code}
                onClick={() => handleNavMenu(page)}
                sx={{ my: 2, display: "block" }}
              >
                {page.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Открыть меню">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Андрей" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {companyMenu.map((page) => (
                <MenuItem key={page.code} onClick={() => handleMenu(page)}>
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default HeaderBar;