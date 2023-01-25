import { Box, Button, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Help from "@mui/icons-material/Help";
import CarRental from "@mui/icons-material/CarRental";
import DescriptionIcon from "@mui/icons-material/CarRentalRounded";
import { Colors } from "../../../utils/colors";

type Props = {
  open: boolean;
  close: () => void;
};

export const Hamburguer = ({ open, close }: Props) => {
  return (
    <Drawer
      anchor="right"
      PaperProps={{
        sx: { width: "100%" },
      }}
      onClose={close}
      open={open}
    >
      <Box
        sx={{
          p: 2,
          height: 1,
          backgroundColor: Colors.white,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mb: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Verzel
          </Typography>
          <IconButton sx={{ mb: 2 }}>
            <CloseIcon onClick={close} />
          </IconButton>
        </Box>

        <Divider sx={{ mb: 2 }} />

        <Box sx={{ mb: 2 }}>
          <ListItemButton>
            <ListItemIcon>
              <CarRental sx={{ color: Colors.black }} />
            </ListItemIcon>
            <ListItemText primary="Comprar carro" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <DescriptionIcon sx={{ color: Colors.black }} />
            </ListItemIcon>
            <ListItemText primary="Vender Carro" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <Help sx={{ color: Colors.black }} />
            </ListItemIcon>
            <ListItemText primary="Sobre nós" />
          </ListItemButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            bottom: "0",
            left: "50%",
            transform: "translate(-50%, 0)",
          }}
        >
          <Button
            variant="contained"
            sx={{ m: 1, width: "10rem", backgroundColor: Colors.black }}
          >
            Cadastre-se
          </Button>
          <Button
            variant="outlined"
            sx={{
              m: 1,
              width: "10rem",
              borderColor: Colors.black,
              color: Colors.black,
            }}
          >
            Entrar
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};
