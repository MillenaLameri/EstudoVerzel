import { Box, Typography } from "@mui/material";
import Car from "../../../../assents/img/Car.png";
import { Colors } from "../../../../utils/colors";

export const Banner = ({}) => {
  return (
    <Box
      mt={10}
      justifyContent="space-between"
      flexDirection="row"
      display="flex"
    >
      <Box
        textAlign="center"
        alignItems="center"
        mt={24}
        ml={5}
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "block",
            xl: "block",
            backgroundPosition: "center",
            backgroundSize: "cover",
          },
        }}
      >
        <Typography
          variant="h1"
          fontFamily={"Hanalei Fill"}
          letterSpacing=".3rem"
          fontWeight="700"
          sx={{
            display: { xs: "block", md: "flex" },
          }}
        >
          Keep Calm
        </Typography>
        <Typography
          ml={10}
          variant="h2"
          fontFamily={"Hanalei Fill"}
          letterSpacing=".3rem"
          fontWeight="700"
          color={Colors.red}
          sx={{
            display: { xs: "block", md: "flex" },
          }}
        >
          vá de carro!
        </Typography>
      </Box>

      <Box
        mt={2}
        ml={2}
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "block",
            xl: "block",
            backgroundPosition: "center",
            backgroundSize: "cover",
          },
        }}
      >
        <img src={Car} alt="car" style={{ height: "45rem", width: "70rem" }} />
      </Box>
    </Box>
  );
};
