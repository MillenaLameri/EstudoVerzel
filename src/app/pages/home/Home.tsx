import { Box } from "@mui/material";
import Divider from "@mui/material/Divider";
import { PageHeader } from "../../components/pageHeader/PageHeader";
import { Banner } from "./components/Banner";
import { CarList } from "./components/CarList";

export const Home = () => {
  return (
    <Box>
      <PageHeader />
      <Banner />
      <Divider />
      <CarList />
    </Box>
  );
};
