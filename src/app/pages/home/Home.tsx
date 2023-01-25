import { Box } from "@mui/material";
import { PageHeader } from "../../components/pageHeader/PageHeader";
import { Banner } from "./components/Banner";

export const Home = ({}) => {
  return (
    <Box display="flex" flexDirection="column">
      <PageHeader />
      <Banner />
    </Box>
  );
};
