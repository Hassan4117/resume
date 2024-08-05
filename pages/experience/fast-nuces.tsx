import React from "react";
import { Typography, Box, List, ListItem, ListItemText } from "@mui/material";
import { styled } from "@mui/system";

const Section = styled(Box)({
  marginBottom: "1.5em",
});

const SubSection = styled(Box)({
  marginBottom: "1em",
});

const StyledList = styled(List)({
  paddingLeft: "1.5em",
});

const FastNucesExperience = () => {
  return (
    <Box sx={{ margin: "auto" }}>
      <Typography variant="h4" sx={{ fontWeight: 600 }} gutterBottom>
        Lab Instructor
      </Typography>

      <Section>
        <Typography variant="body1" paragraph>
          As a Lab Instructor, I played a pivotal role in shaping the learning
          experiences of students by designing comprehensive manuals and
          conducting hands-on programming labs. My responsibilities included:
        </Typography>

        <SubSection>
          <Typography variant="h6" sx={{ fontWeight: 600 }} gutterBottom>
            Designing Educational Manuals:
          </Typography>
          <StyledList>
            <ListItem>
              <ListItemText primary="Developed detailed and structured lab manuals that served as a critical resource for students. These manuals provided clear instructions, step-by-step guidance, and practical examples to help students grasp complex programming concepts." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Ensured that the manuals were aligned with the course curriculum, enhancing the learning process by bridging theoretical knowledge with practical application." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Included problem-solving exercises and real-world scenarios to challenge students and encourage critical thinking and innovation." />
            </ListItem>
          </StyledList>
        </SubSection>

        <SubSection>
          <Typography variant="h6" sx={{ fontWeight: 600 }} gutterBottom>
            Conducting Programming Labs:
          </Typography>
          <StyledList>
            <ListItem>
              <ListItemText primary="Led programming lab sessions, demonstrating coding techniques, best practices, and the application of various programming languages and tools." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Provided personalized guidance and support to students, helping them troubleshoot code, understand debugging techniques, and overcome challenges." />
            </ListItem>
          </StyledList>
        </SubSection>

        <SubSection>
          <Typography variant="h6" sx={{ fontWeight: 600 }} gutterBottom>
            Assessment and Feedback:
          </Typography>
          <StyledList>
            <ListItem>
              <ListItemText primary="Evaluated students' progress through lab exercises, providing constructive feedback to help them improve their coding skills and understanding of key concepts." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Conducted assessments and practical exams to measure the students' competency in applying what they learned in the labs." />
            </ListItem>
          </StyledList>
        </SubSection>

        <SubSection>
          <Typography variant="h6" sx={{ fontWeight: 600 }} gutterBottom>
            Continuous Improvement:
          </Typography>
          <StyledList>
            <ListItem>
              <ListItemText primary="Regularly updated the lab manuals to incorporate new technologies, methodologies, and educational best practices." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Collected feedback from students and peers to refine lab activities and enhance the overall effectiveness of the learning experience." />
            </ListItem>
          </StyledList>
        </SubSection>

        <Typography variant="body1" paragraph>
          This experience enhanced my ability to communicate complex technical
          information in an accessible and engaging manner, develop educational
          materials, and bring up a positive and productive learning
          environment.
        </Typography>
      </Section>
    </Box>
  );
};

export default FastNucesExperience;
