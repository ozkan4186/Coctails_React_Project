import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { useLocation } from "react-router-dom";

export default function MediaControlCard() {
  const theme = useTheme();
  const item = useLocation();
  console.log(item);

  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexWrap: "wrap",
          maxWidth: "65rem",
          margin: "3rem auto",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          borderRadius: "20px",
          lineHeight: "2rem",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", width: "40rem" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              <Box
                component="span"
                sx={{
                  backgroundColor: "secondary.main",
                  borderRadius: "10px",
                  padding: "5px",
                  marginRight: "15px",
                }}
              >
                Name :
              </Box>
              {item.state.strDrink}
            </Typography>
            <br />
            <Typography component="div" variant="h5">
              <Box
                component="span"
                sx={{
                  backgroundColor: "secondary.main",
                  borderRadius: "10px",
                  padding: "5px",
                  marginRight: "15px",
                }}
              >
                Category:
              </Box>
              {item.state.strCategory}
            </Typography>
            <br />
            <Typography component="div" variant="h5">
              <Box
                component="span"
                sx={{
                  backgroundColor: "secondary.main",
                  borderRadius: "10px",
                  padding: "5px",
                  marginRight: "15px",
                }}
              >
                İnfo:
              </Box>
              {item.state.strAlcoholic}
            </Typography>
            <br />
            <Typography component="div" variant="h5">
              <Box
                component="span"
                sx={{
                  backgroundColor: "secondary.main",
                  borderRadius: "10px",
                  padding: "5px",
                  marginRight: "15px",
                }}
              >
                Glass:
              </Box>
              {item.state.strGlass}
            </Typography>
            <br />
            <Typography component="div" variant="h5">
              <Box
                component="span"
                sx={{
                  backgroundColor: "secondary.main",
                  borderRadius: "10px",
                  padding: "5px",
                  marginRight: "15px",
                }}
              >
                İnstructons:
              </Box>
              {item.state.strInstructions}
            </Typography>
            <br />
            <Typography component="div" variant="h5">
              <Box
                component="span"
                sx={{
                  backgroundColor: "secondary.main",
                  borderRadius: "10px",
                  padding: "5px",
                  marginRight: "15px",
                }}
              >
                İngredients:
              </Box>
              {item.state.strIngredient1},{item.state.strIngredient2},
              {item.state.strIngredient3}
            </Typography>
            <br />
          </CardContent>
        </Box>

        <CardMedia
          component="img"
          sx={{ width: 400, margin: "0 auto" }}
          image={item.state.strDrinkThumb}
          alt="Live from space album cover"
        />
      </Card>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button>
          <svg  width="32" height="32" viewBox="0 0 24 24" sx={{
            backgroundColor:"lightgreen",
          }} >
            <path
              fill="#888888"
              d="m12 20l-8-8l8-8l1.425 1.4l-5.6 5.6H20v2H7.825l5.6 5.6Z"
            />
          </svg>

          <span>Back</span>
        </button>
      </Box>
    </>
  );
}
