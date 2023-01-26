import { Box, Button, Container, Toolbar, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Hamburguer } from "./Hamburguer";
import { Colors } from "../../../utils/colors";
import { ROUTES } from "../../../routes/Routes";
import { Link } from "react-router-dom";

export const PageHeader = () => {
  const [open, setOpen] = useState(false);

  const closeHambuguer = () => {
    setOpen(false);
  };
  const openHamburguer = () => {
    setOpen(true);
  };

  return (
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Typography
          mr={2}
          noWrap
          component="a"
          href="/"
          fontFamily={"monospace"}
          letterSpacing=".3rem"
          fontWeight="700"
          variant="h5"
          display={{ xs: "block", md: "flex" }}
          sx={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          Verzel
        </Typography>
        <Box>
          <IconButton
            edge="end"
            color="inherit"
            onClick={openHamburguer}
            sx={{
              mr: 2,
              display: {
                xs: "block",
                sm: "block",
                md: "none",
                xl: "none",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
        <Box alignItems="center" justifyContent="center" flexGrow="1"></Box>
        <Box display={{ xs: "none", md: "flex" }}>
          <Box>
            <Button sx={{ my: 2 }}>
              <Typography
                ml={1}
                color={Colors.black}
                fontSize="0.8rem"
                fontWeight="bold"
              >
                Comprar carro
              </Typography>
            </Button>
          </Box>
          <Box>
            <Button sx={{ my: 2 }}>
              <Typography
                ml={1}
                fontWeight="bold"
                color={Colors.black}
                fontSize="0.8rem"
              >
                Vender carro
              </Typography>
            </Button>
          </Box>
          <Box>
            <Button sx={{ my: 2 }}>
              <Typography
                fontWeight="bold"
                color={Colors.black}
                fontSize="0.8rem"
                ml={1}
              >
                Sobre nós
              </Typography>
            </Button>
          </Box>
        </Box>
        <Box ml={2} display={{ xs: "none", md: "flex" }}>
          <Typography
            noWrap
            component="a"
            href="/login"
            fontWeight="bold"
            color={Colors.white}
            fontSize="0.8rem"
            sx={{
              my: 2,
              backgroundColor: Colors.black,
              borderRadius: 10,
              p: 1,
              textDecoration: "none",
            }}
          >
            Cadastre-se
          </Typography>
        </Box>
        <Hamburguer open={open} close={closeHambuguer} />
      </Toolbar>
    </Container>
  );
};
