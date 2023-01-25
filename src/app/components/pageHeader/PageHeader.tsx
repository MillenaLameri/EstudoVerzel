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
          variant="h6"
          sx={{
            mr: 2,
            display: { xs: "block", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
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
              ml: 25,
              mr: 2,
              display: {
                xs: "block",
                sm: "none",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            justifyContent: "center",
          }}
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
        <Box
          mr={2}
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
          <Button sx={{ my: 2, color: Colors.black }}>Login</Button>
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{
              my: 2,
              color: Colors.white,
              display: { xs: "none", md: "flex" },
              backgroundColor: Colors.black,
              "&:hover": {
                backgroundColor: Colors.black,
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
