import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid/Grid";

import Typography from "@mui/material/Typography";
import { CardCar } from "./CardCar";

export const CarList = () => {
  return (
    <Box display="flex">
      <Container>
        <Box mt={5} p={2}>
          <Typography
            fontFamily={"Roboto"}
            fontWeight="bold"
            mb={2}
            variant="h5"
          >
            Carros usados
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <CardCar />
            </Grid>
            <Grid item xs={12} sm={4}>
              <CardCar />
            </Grid>
            <Grid item xs={12} sm={4}>
              <CardCar />
            </Grid>
            <Grid item xs={12} sm={4}>
              <CardCar />
            </Grid>
            <Grid item xs={12} sm={4}>
              <CardCar />
            </Grid>
            <Grid item xs={12} sm={4}>
              <CardCar />
            </Grid>
            <Grid item xs={12} sm={4}>
              <CardCar />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
