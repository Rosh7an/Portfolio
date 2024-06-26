import { React, useEffect } from "react";
import {
  Box,
  SimpleGrid,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import routes from "../../routes";
import Navbar from "../../components/Navbar/Navbar";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import careerManagement from "../../assets/employee-management.jpg";
import medhub from "../../assets/projects/medhub_500x300.jpg";
import collab from "../../assets/projects/lets_collab_img3.jpg";
import blog from "../../assets/projects/bloggers.jpg";
import eeg from "../../assets/projects/eeg_500x300.jpg";
import mtrans from "../../assets/projects/mt_500x300.jpg";
import steg from "../../assets/projects/steg_500x300.jpeg";
import iotApp from "../../assets/IoT-demo-UI.jpg";
import taskManager from "../../assets/taskManager.webp";
import diabeticRetinopathy from "../../assets/diabeticRetinopathy.png";

export default function Projects() {
  const textColorPrimary = useColorModeValue(
    "secondaryGray.900",
    "lightpeach.100"
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const getActiveRoute = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf(routes[i].path) !== -1) {
        return routes[i].navbarDisplayName;
      }
    }
  };

  return (
    <Box>
      <Navbar displayText={getActiveRoute(routes)} />
      <Box pt={{ base: "20px", md: "40px", xl: "40px" }}>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
        ></Flex>
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          gap="25px"
          alignItems="center"
          justifyContent="center"
        >
          <ProjectCard
            projectImage={careerManagement}
            projectName={"Career Management React Application"}
            aboutProject={
              "A management tool for employee management in a tenant"
            }
            techStack={"React JS, TypeScript, Spring Boot, PostgreSQL"}
          />
          <ProjectCard
            projectImage={iotApp}
            projectName={"Iot Device Management React Application"}
            aboutProject={
              "A Realtime IoT Device Data Communication and Management Application"
            }
            techStack={"GoLang, React JS, TypeScript, PostgreSQL"}
          />
          <ProjectCard
            projectImage={taskManager}
            projectName={"Taskify"}
            aboutProject={
              "An Advanced Medical-Healthcare Application To Analyse Medical Reports For Patients And Doctors"
            }
            techStack={"React JS, TypeScript, FireBase"}
          />
          <ProjectCard
            projectImage={diabeticRetinopathy}
            projectName={
              "Detection of Diabetic Retinopathy using Machine Learning"
            }
            aboutProject={
              "Trained with thousands of retinal images to detect an affected diabetic retinopathic retina using CNNs"
            }
            techStack={"PYTORCH, CNN, Google Colab, PYTHON"}
          />
          <ProjectCard
            projectImage={mtrans}
            projectName={"Aura"}
            aboutProject={
              "A secured realtime on-device Virtual Assistant allows to use custom commands"
            }
            techStack={"PYTHON"}
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
}
