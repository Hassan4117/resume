import { Box, Divider, LinearProgress, styled, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { linearProgressClasses } from "@mui/material/LinearProgress";

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
  marginBottom: "20px",

  [theme.breakpoints.down("md")]: {
    fontSize: "22px",
  },
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "20px",
  color: theme.palette.common.paua,

  [theme.breakpoints.down("md")]: {
    fontSize: "18px",
  },
}));

const Description = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: "16px",
  color: theme.palette.common.paua,
  opacity: 0.5,
  marginBottom: "10px",

  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
}));

const MuiDivider = styled(Divider)(({ theme }) => ({
  width: "100%",
  marginBottom: "40px",
}));

const SkillContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  marginBottom: "30px",
}));

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  width: "500px",
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },

  [theme.breakpoints.down("lg")]: {
    width: "100%",
  },
}));

const Skills = () => {
  const WORKINGS = [
    "Front end website with Nextjs, Typescript and Material UI",
    "Creating Chrome Extension with React js",
    "SEO friendly frontend with Gatsby js & Tailwind CSS",
    "Full Stack project of automated reservation bot using 3rd party APIs",
    "Backend project with Nodejs with CRUDS & cron jobs",
    "React js project using react-flow library to build nodes based UI",
  ];

  const SKILLS = [
    {
      value: 95,
      label: "Javascript & Typescript",
    },
    {
      value: 85,
      label: "React JS (Next js + Gatsby js + MUI + tailwind css + Chakra UI)",
    },
    {
      value: 90,
      label: "GraphQL",
    },
    {
      value: 50,
      label: "Nodejs + Express",
    },
    {
      value: 50,
      label: "MYSQL/Postgress",
    },
    {
      value: 35,
      label: "Devops",
    },
  ];

  return (
    <Wrapper>
      <Title>Recent Workings</Title>
      {WORKINGS.map((working, index) => (
        <Description>
          <Box sx={{ display: "flex" }}>
            <FiberManualRecordIcon color="inherit" fontSize="inherit" sx={{ margin: "3px 10px 0 0" }} />
            {working}
          </Box>
        </Description>
      ))}
      <MuiDivider />
      <Title>Skills</Title>
      {SKILLS.map(({ value, label }, index) => (
        <SkillContainer key={index}>
          <Heading>{label}</Heading>
          <BorderLinearProgress value={value} variant="determinate" />
        </SkillContainer>
      ))}
    </Wrapper>
  );
};

export default Skills;
