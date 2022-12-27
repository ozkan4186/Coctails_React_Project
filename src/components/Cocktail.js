import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import CocktailList from "./CocktailList";

const Cocktail = ({ coctail }) => {
  console.log(coctail);
  const navigate = useNavigate();

  return (
    <Grid
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "3rem",
        justifyContent: "center",
        margin: "2rem",
        borderRadius: "22px",
      }}
    >
      {coctail?.map((item,id) => {
          return (
            <Grid key={id}>
              <Card
                sx={{
                  width: 300,
                  height: 365,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  boxShadow: "rgba(0, 0, 0, 0.18) 0px 2px 4px",
                  cursor: "pointer",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    sx={{
                      padding: "0.1rem",
                      borderRadius: "5px",
                    }}
                    component="img"
                    height="180"
                    image={item.strDrinkThumb}
                    alt="coctail"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.strDrink}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      {item.strGlass}
                    </Typography>
                    <Typography gutterBottom variant="p" component="div">
                      {item.strAlcoholic}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <button
                    className="cta"
                    style={{
                      border: "none",
                      cursor: "pointer",
                    }}
                    onClick={() => navigate("/detail/", {state:item})}
                  >
                    <span className="hover-underline-animation">Details</span>
                    <svg
                      viewBox="0 0 46 16"
                      height="10"
                      width="30"
                      xmlns="http://www.w3.org/2000/svg"
                      id="arrow-horizontal"
                    >
                      <path
                        transform="translate(30)"
                        d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                        data-name="Path 10"
                        id="Path_10"
                      ></path>
                    </svg>
                  </button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default Cocktail;
