import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import IconStorefront from "@mui/icons-material/Storefront";
import Box from "@mui/material/Box";

const style = {
  display: "flex",
  alignItems: "center"
}
export default function Logo() {
  const navigate = useNavigate();

  const toMain = () => {
    navigate(`${process.env.REACT_APP_REPO}/`);
  }

  return (
    <Box className={"sdfsdd"} sx={style}>
      <IconStorefront sx={{ display: "flex", mr: 1 }} />
      <Typography
        onClick={toMain}
        variant="h6"
        noWrap
        component="span"
        sx={{
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
    </Box>
  );
}