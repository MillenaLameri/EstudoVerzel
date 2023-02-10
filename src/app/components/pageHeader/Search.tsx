import React from "react";
import Textfield from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputAdornment from "@mui/material/InputAdornment";
import { styled } from "@mui/material/styles";
import { Box, IconButton, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "../../../utils/colors";

const StyledTextField = styled(Textfield)(({ theme }) => ({
  "& .MuiInputBase-root": {
    color: Colors.white,
    backgroundColor: "rgba(255,255,255, .38)",
    width: "50vw",

    "&::hover fieldset": {
      border: "none",
    },

    [theme.breakpoints.up("md")]: {
      width: "30vw",
    },
  },

  "& .Mui-focused fieldset": {
    border: "none",
  },

  "& .MuiInputBase-input": {
    "&::placeholder": {
      opacity: 1,
    },
  },
}));

export const Search = () => {
  const [search, setSearch] = React.useState("");

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        bgcolor: "black",
        height: "64px",
      }}
    >
      <StyledTextField
        onKeyDown={(e) => console.log(e)}
        size="small"
        value={search}
        placeholder="Busque por marca,modelo, ano, cor..."
        onChange={(e) => setSearch(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={(tm) => ({ fill: tm.palette.common.white })} />
            </InputAdornment>
          ),
          endAdornment: search ? (
            <InputAdornment position="end">
              <IconButton onClick={() => setSearch("")}>
                <CloseIcon
                  sx={(tm) => ({
                    fill: tm.palette.common.white,
                  })}
                />
              </IconButton>
            </InputAdornment>
          ) : null,
        }}
      />
    </Box>
  );
};
