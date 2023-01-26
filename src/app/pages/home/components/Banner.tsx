import { Box, Typography } from "@mui/material";
import Car from "../../../../assents/img/Car.png";

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
          variant="h2"
          fontFamily={"Roboto"}
          fontWeight="900"
          sx={{
            display: { xs: "block", md: "flex" },
          }}
        >
          Tudo começa com um sonho
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
