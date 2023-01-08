import { Box, Divider, styled, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Fragment } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Wrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  height: "100%",
  flexDirection: "column",
}));

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "28px",
  color: theme.palette.common.paua,
  marginBottom: "40px",

  [theme.breakpoints.down("md")]: {
    fontSize: "22px",
  },
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "24px",
  color: theme.palette.common.paua,
  marginBottom: "10px",

  [theme.breakpoints.down("md")]: {
    fontSize: "18px",
  },
}));

const Description = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: "16px",
  color: theme.palette.common.paua,
  opacity: 0.5,
  marginBottom: "30px",

  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
}));

const Text = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: "12px",
  color: theme.palette.common.suvaGrey,
  marginBottom: "7px",
}));

const MuiDivider = styled(Divider)(({ theme }) => ({
  width: "100%",
}));

const Experience = () => {
  const EXPERIENCE = [
    {
      heading: "Full Stack Developer at Trimulabs",
      description:
        "From the begining, I have worked as a Frontend developer. In the mid of 2022, I also started my responsibility as Backend developer. I have managed stand alone projects as well as team projects alongwith client communication.",
      url: "https://www.trimulabs.com/",
      date: "October 2020 - Present",
    },

    {
      heading: "Lab Instructor at FAST NUCES, Lahore",
      description: "Designing manuals and conducting programming lab.",
      date: "September 2020 - February 2021",
    },

    {
      heading: "Intern at Arrivy, Lahore",
      description: "Learning of Web development with React js",
      date: "June 2019 - Auguest 2019",
    },
  ];

  return (
    <Wrapper>
      <Title>Experience</Title>
      {EXPERIENCE.map(({ heading, description, url, date }, index) => (
        <Fragment key={index}>
          <Heading>{heading}</Heading>
          {url && (
            <Text>
              <a href={url} target="_blank">
                {url}
              </a>
            </Text>
          )}
          <Text>{date}</Text>
          <Description>{description}</Description>

          {index < EXPERIENCE.length - 1 && <MuiDivider sx={{ marginBottom: "30px" }} />}
        </Fragment>
      ))}
    </Wrapper>
  );
};

export default Experience;
