import { Box } from "@mui/material";
import { AppRoutes } from "../../routes/AppRoutes";
import { PageHeader } from "../components/pageHeader/PageHeader";

export const App = () => {
  return (
    <Box display="flex" flexDirection="column" flex={1}>
     
      <AppRoutes />
    </Box>
  );
};
