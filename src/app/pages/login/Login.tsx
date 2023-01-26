import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Colors } from "../../../utils/colors";
import { BoxCentralizado } from "../../components/BoxCentralizado";
import Peoples from "../../../assents/img/peoples.jpg";
import { PageHeader } from "../../components/pageHeader/PageHeader";

const styles = {
  image: {
    backgroundImage: `url(${Peoples})`,
    backgroundSize: "cover",
  },
};
export const Login = () => {
  return (
    <Box display="flex" flexDirection="column">
      <PageHeader />
      <Grid container height="100vh">
        <Grid
          item
          style={styles.image}
          xs={7}
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "block",
              xl: "block",
              backgroundImage: `url(${Peoples})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            },
          }}
        ></Grid>
        <BoxCentralizado>
          <Box
            display={{
              xs: "block",
              sm: "block",
              md: "none",
              xl: "none",
            }}
            alignSelf="flex-start"
            ml={4}
          ></Box>
          <Box maxWidth="sm" p={3}>
            <Box>
              <Typography variant="h4" fontWeight="bold" color={Colors.gray2}>
                Olá!
              </Typography>
              <Box>
                <Typography color={Colors.gray2} variant="h6">
                  Crie sua conta ou inicie sessão
                </Typography>
              </Box>
            </Box>
            <Box sx={{ mt: 4 }}>
              <Typography
                fontWeight="bold"
                color={Colors.gray2}
                variant="body1"
                mb={1}
              >
                Email
              </Typography>
              <TextField
                sx={{ mb: 1, borderColor: Colors.black }}
                placeholder="exemple@example.com"
                fullWidth
              />
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography
                fontWeight="bold"
                color={Colors.gray2}
                variant="body1"
                mb={1}
              >
                Senha
              </Typography>
              <TextField
                sx={{ mb: 1, borderColor: Colors.black }}
                placeholder="***********"
                fullWidth
              />
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography
                fontWeight="bold"
                color={Colors.gray2}
                variant="body1"
                mb={1}
              >
                Repita sua senha
              </Typography>
              <TextField
                sx={{ mb: 1, borderColor: Colors.black }}
                placeholder="***********"
                fullWidth
              />
            </Box>
            <Box mt={6}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  borderRadius: 10,
                  minHeight: "56px",
                  backgroundColor: Colors.black,
                  "&:hover": {
                    backgroundColor: Colors.black,
                    boxShadow: "none",
                  },
                }}
              >
                <Typography color={Colors.gray6} variant="button">
                  Confirmar
                </Typography>
              </Button>
            </Box>
          </Box>
        </BoxCentralizado>
      </Grid>
    </Box>
  );
};
