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
      <Box sx={{
        display: "flex",
        justifyContent: "center",
      }} >
        <button>
          <svg
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 1024 1024"
          >
            <path
              d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.
083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.
996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.
046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.
992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 
604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"
            ></path>
          </svg>
          <span>Back</span>
        </button>
      </Box>
    </>
  );
}
