import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Carro from "../../../../assents/img/carro.jpg";

export const CardCar = () => {
  return (
    <Card sx={{ maxWidth: "20rem" }}>
      <Box>
        <img
          src={Carro}
          alt="carro"
          style={{ height: "15rem", width: "20rem" }}
        />
      </Box>
      <CardContent>
        <Box display="flex" flexDirection="column" justifyContent="center">
          <Typography marginLeft={2} variant="body1" fontFamily={"Roboto"}>
            Peugeot 208 GRIFFE AT6
          </Typography>

          <Typography fontFamily={"Roboto"} marginLeft={2} variant="body2">
            2022 • 18.680 km • São Paulo
          </Typography>
          <Typography mt={1} fontWeight="bold" marginLeft={2} variant="h6">
            R$ 99.099
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
