import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";

const Search = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{
        boxShadow: "2px 2px 10px rgba(0,0,0)",
        padding: "2rem",
      }}
    >
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <TextField
          fullWidth
          label="Search Cocktail"
          id="Search Cocktail"
         
          sx={{
            borderColor: "secondary",
          }}
        />
      </Box>
    </Grid>
  );
};
export default Search;
