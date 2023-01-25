import { Box, Button, Container, Toolbar, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Hamburguer } from "./Hamburguer";
import { Colors } from "../../../utils/colors";

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
          variant="h6"
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
        <Box
          display={{ xs: "none", md: "flex" }}
          alignItems="center"
          justifyContent="center"
          flexGrow="1"
        >
          <Box>
            <Button sx={{ my: 2, fontWeight: 700, color: Colors.gray2 }}>
              Comprar carro
            </Button>
          </Box>
          <Box>
            <Button sx={{ my: 2, fontWeight: 700, color: Colors.gray2 }}>
              Vender carro
            </Button>
          </Box>
          <Box>
            <Button sx={{ my: 2, fontWeight: 700, color: Colors.gray2 }}>
              Sobre nós
            </Button>
          </Box>
        </Box>
        <Box display={{ xs: "none", md: "flex" }} mr={2}>
          <Button sx={{ my: 2, color: Colors.red }}>Login</Button>
        </Box>
        <Box display={{ xs: "none", md: "flex" }}>
          <Button
            variant="contained"
            sx={{
              my: 2,
              color: Colors.white,
              backgroundColor: Colors.red,
              "&:hover": {
                backgroundColor: Colors.red,
                boxShadow: "none",
              },
            }}
          >
            Cadastre-se
          </Button>
        </Box>

        <Hamburguer open={open} close={closeHambuguer} />
      </Toolbar>
    </Container>
  );
};
