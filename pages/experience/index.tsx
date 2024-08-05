import { Box, Button, Divider, styled, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Fragment } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Link from "next/link";

const Wrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  height: "100%",
  flexDirection: "column",
}));

const ArrowButton = styled(Box)(({ theme }) => ({
  fontSize: "16px",
  height: "42px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "13px 8px",
  border: "1px solid rgba(0, 0, 0, 0.12)",
  borderRadius: "8px",
  cursor: "pointer",
  color: "rgba(25, 118, 210)",

  ":hover": {
    background: "rgba(0, 0, 0, 0.06)",
  },
}));

const ExperienceDetailsTopContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
}));

const ExperienceDetailsTopContainerLeft = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginBottom: "10px",
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
  fontWeight: 700,
  fontSize: "24px",
  color: theme.palette.common.paua,
  marginBottom: "0px",

  [theme.breakpoints.down("md")]: {
    fontSize: "18px",
  },
}));

const SubHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "20px",
  color: theme.palette.common.lightBlue900,
  marginBottom: "0px",

  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
}));

const LinkText = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "16px",
  color: theme.palette.common.link,
  marginBottom: "0px",

  [theme.breakpoints.down("md")]: {
    fontSize: "12px",
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

const Text = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: "12px",
  color: theme.palette.common.suvaGrey,
}));

const MuiDivider = styled(Divider)(({ theme }) => ({
  width: "100%",
}));

const Experience = () => {
  const EXPERIENCE = [
    {
      heading: "MERN Stack Developer",
      subHeading: "Makula (Remote)",
      url: "https://makula.io/",
      date: "July 2023 - Present",
      link: "/experience/makula",
      description:
        "At Makula, I primarily worked as a frontend developer, creating and maintaining user interfaces to ensure a seamless user experience. I collaborated closely with design teams to translate their visions into functional, visually appealing web applications. Additionally, I contributed to backend development, which enhanced my skills and understanding of both frontend and backend processes.",
    },
    {
      heading: "Frontend Developer",
      subHeading: "Coding Crafts (Lahore, Pakistan)",
      description:
        "I started as a Frontend Developer and expanded my role to include Backend development in mid-2022. I had experience managing standalone and team projects, including client communication, ensuring seamless project execution and delivery.",
      url: "https://www.codingcrafts.io/",
      date: "October 2020 - June 2023",
      link: "/experience/coding-crafts",
    },

    {
      heading: "Lab Instructor",
      subHeading: "FAST NUCES (Lahore, Pakistan)",
      description:
        "As a Lab Instructor, I designed comprehensive lab manuals and conducted programming labs, guiding students through hands-on exercises and real-world problem-solving scenarios. I provided personalized support, encouraging a collaborative learning environment, and ensured alignment with course objectives to enhance students' practical coding skills and conceptual understanding.",
      url: "https://lhr.nu.edu.pk/",
      date: "September 2020 - February 2021",
      link: "/experience/fast-nuces",
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
      {EXPERIENCE.map(
        ({ heading, description, url, date, subHeading, link = "" }, index) => (
          <Fragment key={index}>
            <ExperienceDetailsTopContainer>
              <ExperienceDetailsTopContainerLeft>
                <Heading>{heading}</Heading>
                {subHeading && <SubHeading>{subHeading}</SubHeading>}
                {url && (
                  <LinkText>
                    <a href={url} target="_blank">
                      {url}
                    </a>
                  </LinkText>
                )}
                <Text>{date}</Text>
              </ExperienceDetailsTopContainerLeft>
              {link && (
                <Link href={link}>
                  <ArrowButton>
                    <KeyboardArrowRightIcon />
                  </ArrowButton>
                </Link>
              )}
            </ExperienceDetailsTopContainer>
            <Description>{description}</Description>

            {index < EXPERIENCE.length - 1 && (
              <MuiDivider sx={{ marginBottom: "30px" }} />
            )}
          </Fragment>
        )
      )}
    </Wrapper>
  );
};

export default Experience;
