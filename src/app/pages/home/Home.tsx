import { Box } from "@mui/material";
import { Colors } from "../../../utils/colors";
import { PageHeader } from "../../components/pageHeader/PageHeader";
import { Search } from "../../components/pageHeader/Search";
import { Banner } from "./components/Banner";
import { CarList } from "./components/CarList";

export const Home = () => {
  return (
    <Box>
      <PageHeader />
      <Banner />
      <Box
        display={{ xs: "none", md: "flex" }}
        sx={{
          bgcolor: Colors.gray8,
          height: "64px",
        }}
      ></Box>
      <Search />
      <Box display="flex" alignItems="center" justifyContent="center">
        <CarList />
      </Box>
    </Box>
  );
};
