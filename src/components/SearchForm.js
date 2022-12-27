import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import theme from "@mui/material";
import axios from "axios";
import Cocktail from "./Cocktail";

const Search = () => {
  const [search, setSearch] = useState("");
  const [coctail, setCoctail] = useState([]);
  // console.log(search);
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`;

  const getApi = async () => {
    const { data } = await axios(url);
    // console.log(data);
    setCoctail(data.drinks);
  };

  useEffect(() => {
    getApi();
  }, [search]);

  return (
    <Grid>
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
            id="search"
            color="secondary"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{
              fontSize: "2rem",
            }}
          />
        </Box>
      </Grid>
      <Cocktail coctail={coctail} />
    </Grid>
  );
};
export default Search;
