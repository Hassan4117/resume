import { Box, Divider, styled, Typography } from "@mui/material";
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

const MuiDivider = styled(Divider)(({ theme }) => ({
  width: "100%",
  marginBottom: "40px",
}));

const Home = () => {
  const EDUCATION = [
    {
      heading: "BS(CS)",
      description: "FAST NUCES, Lahore",
    },

    {
      heading: "FSc (Pre Engineering)",
      description: "GCU, Lahore",
    },
  ];

  return (
    <Wrapper>
      <Title sx={{ marginBottom: "20px" }}>About</Title>
      <Description>
        Full stack developer with enthusiasm in learning more technologies and gaining more experience with various
        frameworks. I want to be part of an organization where I can polish my skills and also take part in the growth
        of the organization.
      </Description>
      <MuiDivider />
      <Title>Education</Title>
      {EDUCATION.map(({ heading, description }, index) => (
        <Fragment key={index}>
          <Heading>{heading}</Heading>
          <Description>{description}</Description>
        </Fragment>
      ))}
      <MuiDivider />
      <Title sx={{ marginBottom: "20px" }}>Personal Information</Title>
      <Description sx={{ marginBottom: "10px" }}>
        <LocationOnIcon color="inherit" fontSize="inherit" sx={{ margin: "0 3px -3px -5px" }} />
        <span>Lahore, Pakistan</span>
      </Description>
      <Description sx={{ marginBottom: "10px" }}>Contact: +923316675018</Description>
      <Description sx={{ marginBottom: "10px" }}>Email: hsnminhas@gmail.com</Description>
      <Description>
        <a target="_blank" href="https://www.linkedin.com/in/muhammad-hassan-minhas-58b319175/">
          Linkedin
        </a>
      </Description>
    </Wrapper>
  );
};

export default Home;
