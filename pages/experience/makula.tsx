import React from "react";
import { Typography, Box, List } from "@mui/material";
import { styled } from "@mui/system";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const SubHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "20px",
  color: theme.palette.common.lightBlue900,
  marginBottom: "0px",

  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
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

const ListItemText = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: "16px",
  color: theme.palette.common.text,
  marginBottom: "8px",
  marginLeft: "15px",

  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
    marginLeft: "8px",
  },
}));

const ListItemBox = styled(Box)(({ theme }) => ({
  marginBottom: "8px",
  display: "flex",
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "24px",
  color: theme.palette.common.paua,
  marginBottom: "10px",

  [theme.breakpoints.down("md")]: {
    fontSize: "18px",
  },
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

const Makula = () => {
  const FEATURES = [
    "Functionality that allowed users to upload large 3D model files using the multipart upload feature of AWS services. This approach ensured efficient handling of large files by splitting them into smaller, manageable parts during the upload process. For displaying these models, I utilized the Threedy library, which provided robust tools for rendering and interacting with 3D models within the application.",
    "Pagination across application lists, significantlym enhancing the scalability of the platform. This feature allowed for the efficient handling of large datasets by loading only a subset of data at a time, which improved the application's performance.",
    "I enhanced map functionality to display tagged location pins within the visible area, ensuring that users could easily see relevant locations as they navigated the map. Additionally, I maintained data integrity during drag-and-drop actions, allowing users to reposition location pins without losing any associated information.",
    "Implemented a paginated Kanban board similar to Jira, which enabled users to manage tasks more effectively. This feature allowed users to handle large numbers of tasks efficiently by loading tasks in pages, rather than all at once. This not only improved the overall workflow efficiency but also provided a smoother and more organized user experience, making task management more intuitive and less cluttered.",
    "Worked on real-time in-app notifications for chat messages and other time-sensitive processes using PubNub. This implementation ensured that users received updates promptly, enhancing overall user engagement.",
    "I optimized data management and processing speed by maintaining a cache with Apollo services. This approach significantly reduced the number of network calls, enhancing the overall performance of the application.",
    "I worked on implementing drag-and-drop functionality for items within a list, allowing users to rearrange items according to their needs. This feature enhanced the user experience by providing a flexible and intuitive way to organize and customize lists, making the application more user-friendly and adaptable to individual preferences.",
  ];
  return (
    <Box sx={{ margin: "auto" }}>
      <Title>MERN Stack Developer</Title>

      <Description>
        Makula is a product-based company that offers after-sales services to
        original equipment manufacturers (OEMs) and their clients. The company
        has developed three user portals: CRM, OEM, and client portals. My
        primary role at Makula has been as a frontend developer, where I focus
        on creating and maintaining user interfaces to ensure a seamless user
        experience. This involves working closely with design teams to translate
        their visions into functional and visually appealing web applications.
        Additionally, I have contributed to backend development, which has
        allowed me to gain valuable experience in both frontend and backend
        areas. This dual-role experience has enriched my skills and
        understanding of the complete development process.
      </Description>

      <SubHeading>Technologies used:</SubHeading>
      <Description>
        React js, Typescript, Scss, Tailwind, Mapbox, 3D, AWS, Dnd, MongoDB,
        GraphQL, Cache management, Nylas, Figma, Log Rocket, Mixpanel, Pubnub
      </Description>

      <Heading sx={{ marginTop: "30px" }}>Features I worked on</Heading>
      {FEATURES.map((feature) => (
        <ListItemBox>
          <FiberManualRecordIcon
            color="inherit"
            fontSize="small"
            sx={{ margin: "0 5px 0 0" }}
          />
          <ListItemText>{feature}</ListItemText>
        </ListItemBox>
      ))}
    </Box>
  );
};

export default Makula;
