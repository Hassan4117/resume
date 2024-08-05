import { Box, styled, Typography } from "@mui/material";

const Wrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  height: "100%",
  flexDirection: "column",
}));

const Section = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  marginBottom: "30px",
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

const Title2 = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "28px",
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

const CodingCraftsExperience = () => {
  return (
    <Wrapper>
      <Title>Frontend Developer</Title>
      <Description>
        I began my career as a Frontend Developer. Over time, I have gained
        experience in managing both standalone and team projects. This involved
        handling client communications, coordinating project activities, and
        ensuring the seamless execution and delivery of projects. My experience
        in both frontend and backend development has equipped me with a
        comprehensive understanding of the full development lifecycle, enabling
        me to oversee projects effectively and deliver high-quality results.
      </Description>
      <Title2>Projects</Title2>
      <Section>
        <Heading>Dentalwhale</Heading>
        <LinkText>
          <a>https://www.dentalwhaleacquisition.com/</a>
        </LinkText>
        <Description>
          The project included a marketing site and multiple user portals.
          Initially built with React.js and SCSS, the user portals were later
          migrated to MUI. Clients could list their clinics and provide detailed
          information about them, order equipment, and access an education
          portal to purchase courses. All of this was managed through admin
          portals. These portals used a single authentication source through
          OAuth. The marketing site was built using Next.js and MUI for SEO
          optimization.
        </Description>
        <SubHeading>Technologies used:</SubHeading>
        <Description>React js, Next js, Redux, Scss, MUI, OAuth</Description>
      </Section>

      {/* Ezaula */}
      <Section>
        <Heading>Ezaula</Heading>
        <LinkText>
          <a>https://ezaula.com/</a>
        </LinkText>
        <Description>
          The project included two user portals: admin and client. The admin
          portal allowed the creation of courses and the addition of relevant
          content. The client portal enabled users to preview and purchase
          courses as needed. Both portals were built using React.js and AntD,
          with Apollo GraphQL used for backend integration.
        </Description>
        <SubHeading>Technologies used:</SubHeading>
        <Description>React js, Axios, AntD, AWS</Description>
      </Section>

      {/* Yoga Joint */}
      <Section>
        <Heading>Yoga Joint</Heading>
        <LinkText>
          <a>https://www.yogajoint.com/</a>
        </LinkText>
        <Description>
          The marketing website was built using React.js and Chakra UI. It
          provided information about classes, schedules, and the locations of
          the yoga organization's joints. Additionally, it prompted users to
          sign up for memberships. Chakra UI was instrumental in managing the UI
          and animations. Apollo GraphQL was integrated to fetch data and keep
          the site up to date.
        </Description>
        <SubHeading>Technologies used:</SubHeading>
        <Description>React js, Chakra UI, GraphQL</Description>
      </Section>

      {/* Hotel Booking Bot */}
      <Section>
        <Heading>Hotel Booking Bot</Heading>
        <Description>
          This was a full stack project aimed at securing restaurant
          reservations as soon as slots became available. Users could sign up
          and view available locations using Resy's API. Additionally, users
          could set preferences for booking their desired restaurant along with
          the preferred date and time. These preferences were stored, and an
          hourly cron job checked for available slots and booked them for the
          respective users.
        </Description>
        <SubHeading>Technologies used:</SubHeading>
        <Description>
          React js, Node js, Express, SQL, Resy API, Axios
        </Description>
      </Section>

      {/* Crosscheck */}
      <Section>
        <Heading>Crosscheck</Heading>
        <Description>
          This was a pre-built Full Stack project. My responsibility was to add
          a feature for updating compliance statuses of employees according to a
          provided matrix of compliance rules. This was managed by writing a
          daily cron job. Additionally, the compliance statuses could be updated
          by around 10 different services, which I also handled.
        </Description>
        <SubHeading>Technologies used:</SubHeading>
        <Description>React js, Node js, Express, SQL, Axios</Description>
      </Section>

      {/* Demogenie */}
      <Section>
        <Heading>Demogenie</Heading>
        <Description>
          The aim of the project was to enable users to set up the flow for
          demos. It allowed users to record videos using the in-app Loom SDK,
          create surveys with MCQs or descriptive answers, customize the flow
          based on answers, and customize the text within the demos. The React
          Flow library was used to create and customize the nodes' UI, allowing
          users to connect nodes to generate a complete demo. Each demo had a
          unique link that could be shared with others.
        </Description>
        <SubHeading>Technologies used:</SubHeading>
        <Description>React js, GraphQL, MUI, React Flow, Loom SDK</Description>
      </Section>

      {/* 1Tul */}
      <Section>
        <Heading>1Tul</Heading>
        <LinkText>https://1tul.com/</LinkText>
        <Description>
          {" "}
          This project served as a data management platform for players and
          organizations. My responsibility was to build the frontend according
          to the tickets provided by the client. This involved implementing user
          interfaces, ensuring functionality, and maintaining code quality. The
          project used MUI v4 for styling, which required me to effectively use
          its components and customization options to achieve the desired design
          and functionality.
        </Description>
        <SubHeading>Technologies used:</SubHeading>
        <Description>React js, MUI v4, Axios</Description>
      </Section>

      {/* World Pulse */}
      <Section>
        <Heading>World Pulse</Heading>
        <LinkText>
          <a>https://www.worldpulse.org/</a>
        </LinkText>
        <Description>
          This was my initial project, where I was responsible for implementing
          responsive designs from Figma. My tasks included translating design
          specifications into functional web pages, ensuring compatibility
          across various devices and screen sizes, and maintaining the visual
          integrity of the original design. This experience provided me with a
          solid foundation in responsive web design principles and enhanced my
          ability to work closely with design teams to bring their visions to
          life.
        </Description>
        <SubHeading>Technologies used:</SubHeading>
        <Description>React js, Styled components</Description>
      </Section>
    </Wrapper>
  );
};

export default CodingCraftsExperience;
