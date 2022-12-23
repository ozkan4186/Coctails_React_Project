import React from "react";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";

const Cocktail = ({ coctail }) => {
  console.log(coctail);

  return (
    <div >
      {coctail?.map((item,id) => {
        return (
          <Grid  key={id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.strDrinkThumb}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.strDrink}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.strGlass}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.strAlcoholic}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </div>
  );
};

export default Cocktail;
