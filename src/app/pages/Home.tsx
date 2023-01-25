import { Box, Grid } from "@mui/material";
import { PageHeader } from "../components/pageHeader/PageHeader";

export const Home = ({}) => {
  return (
    <Box display="flex" flexDirection="column">
      <PageHeader />
      <Grid></Grid>
    </Box>
  );
};
