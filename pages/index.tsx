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
  fontSize: "32px",
  color: theme.palette.common.paua,
  marginBottom: "20px",

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
  color: theme.palette.common.text,
  marginBottom: "20px",

  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
}));

const MuiDivider = styled(Divider)(({ theme }) => ({
  width: "100%",
  marginBottom: "20px",
}));

const Home = () => {
  const EDUCATION = [
    {
      heading: "Bachelors in Computer Science",
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
        With over 4 years of experience in web development, I specialize in
        creating dynamic and user-friendly web applications using React and
        Next.js. My focus is on building engaging user interfaces that ensure a
        seamless experience for users. I excel at translating complex design
        concepts into functional and visually appealing applications. While my
        primary expertise lies in frontend development, I also have experience
        with Node.js, which enhances my understanding of the full development
        stack. Looking ahead, I am eager to continue expanding my skills and
        exploring new technologies that can further enhance web application
        performance and user experience. I am passionate about staying
        up-to-date with industry trends and incorporating innovative solutions
        to solve emerging challenges. My goal is to contribute to projects that
        push the boundaries of web development and deliver exceptional results
        for users and clients alike.
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
        <LocationOnIcon
          color="inherit"
          fontSize="inherit"
          sx={{ margin: "0 3px -3px -5px" }}
        />
        <span>Lahore, Pakistan</span>
      </Description>
      <Description sx={{ marginBottom: "10px" }}>
        Contact: +923316675018
      </Description>
      <Description sx={{ marginBottom: "10px" }}>
        Email: hsnminhas@gmail.com
      </Description>
      <Description>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/muhammad-hassan-minhas"
        >
          Linkedin
        </a>
      </Description>
    </Wrapper>
  );
};

export default Home;
