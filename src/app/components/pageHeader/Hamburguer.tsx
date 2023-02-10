import { Box, Button, Typography } from "@mui/material";
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
        <Box justifyContent="space-between" flexDirection="row" display="flex">
          <Typography
            variant="h6"
            fontFamily="monospace"
            fontWeight="700"
            letterSpacing=".3rem"
            mb={2}
          >
            Verzel
          </Typography>
          <CloseIcon onClick={close} />
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
          justifyContent="center"
          display="flex"
          position="absolute"
          bottom={0}
          sx={{
            left: "50%",
            transform: "translate(-50%, 0)",
          }}
        >
          <Button
            variant="contained"
            sx={{ m: 1, width: "10rem", backgroundColor: Colors.black }}
          >
            <Typography
              noWrap
              component="a"
              href="/login"
              sx={{
                textDecoration: "none",
                color: Colors.white,
              }}
            >
              Cadastre-se
            </Typography>
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
            <Typography
              noWrap
              component="a"
              href="/login"
              sx={{
                textDecoration: "none",
                color: Colors.black,
              }}
            >
              Entrar
            </Typography>
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};
