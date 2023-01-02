import { Box, Link } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box
      sx={{
        // border:"2px solid red",
        display: "flex",
        justifyContent: "space-around",
        textAlign: "center",
        gap: "5rem",
        margin: "10rem",
      }}
    >
      <Link href="https://www.linkedin.com/in/%C3%B6zkandemir/">
        <svg width="15rem" height="15rem" viewBox="0 0 24 24">
          <path
            fill="#81F249"
            d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
          ></path>
        </svg>
      </Link>

      <Link href="https://github.com/ozkan4186">
        <svg width="15rem" height="15rem" viewBox="0 0 24 24">
          <mask id="svgIDa" width="24" height="24" x="0" y="0">
            <g fill="#81F249">
              <ellipse cx="9.5" cy="9" rx="1.5" ry="1"></ellipse>
              <ellipse cx="14.5" cy="9" rx="1.5" ry="1"></ellipse>
            </g>
          </mask>
          <g
            fill="none"
            stroke="#888888"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path
              strokeDasharray="30"
              strokeDashoffset="30"
              d="M12 4C13.6683 4 14.6122 4.39991 15 4.5C15.5255 4.07463 16.9375 3 18.5 3C18.8438 4 18.7863 5.21921 18.5 6C19.25 7 19.5 8 19.5 9.5C19.5 11.6875 19.017 13.0822 18 14C16.983 14.9178 15.8887 15.3749 14.5 15.5C15.1506 16.038 15 17.3743 15 18C15 18.7256 15 21 15 21M12 4C10.3317 4 9.38784 4.39991 9 4.5C8.47455 4.07463 7.0625 3 5.5 3C5.15625 4 5.21371 5.21921 5.5 6C4.75 7 4.5 8 4.5 9.5C4.5 11.6875 4.98301 13.0822 6 14C7.01699 14.9178 8.1113 15.3749 9.5 15.5C8.84944 16.038 9 17.3743 9 18C9 18.7256 9 21 9 21"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                dur="0.6s"
                values="30;0"
              ></animate>
            </path>
            <path strokeDasharray="10" strokeDashoffset="10" d="M9 19">
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                begin="0.7s"
                dur="0.2s"
                values="10;0"
              ></animate>
              <animate
                attributeName="d"
                dur="3s"
                repeatCount="indefinite"
                values="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5;M9 19c-1.406 0-3-.5-4-.5-.532 0-1 0-2-.5;M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5"
              ></animate>
            </path>
          </g>
          <rect
            width="8"
            height="4"
            x="8"
            y="11"
            fill="currentColor"
            mask="url(#svgIDa)"
          >
            <animate
              attributeName="y"
              dur="10s"
              keyTimes="0;0.45;0.46;0.54;0.55;1"
              repeatCount="indefinite"
              values="11;11;7;7;11;11"
            ></animate>
          </rect>
        </svg>
      </Link>
    </Box>
  );
};

export default About;
