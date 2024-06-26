import { React, useState, useEffect } from "react";
import {
  Box,
  Flex,
  SimpleGrid,
  Grid,
  useStyleConfig,
  Text,
  useColorModeValue,
  useColorMode,
  Icon,
  Button,
  Link,
  Skeleton,
} from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { GiLoveSong } from "react-icons/gi";
import { BsCameraReelsFill } from "react-icons/bs";
import { GiCricketBat } from "react-icons/gi";
import Navbar from "../../components/Navbar/Navbar";
import routes from "../../routes";
import TechStackCard from "../../components/techStackCard/techStackCard";
import AboutMeInfo from "../../components/aboutMeInfo/aboutMeInfo";
import angular from "../../assets/icons/angular.svg";
import typescript from "../../assets/icons/typescript.svg";
import node from "../../assets/icons/nodejs.svg";
import mongo from "../../assets/icons/mongodb.svg";
import js from "../../assets/icons/javascript.svg";
import react from "../../assets/icons/react.svg";
import html from "../../assets/icons/html.svg";
import css from "../../assets/icons/css3.svg";
import git from "../../assets/icons/git.svg";
import gitlab from "../../assets/icons/gitlab.svg";
import cpp from "../../assets/icons/c++.png";
import express from "../../assets/icons/express.svg";
import myphoto from "../../assets/Roshan.jpg";
import GitHubCalendar from "react-github-calendar";
import springBootLogo from "../../assets/springBootLogo.png";
import goLangLogo from "../../assets/goLangLogo.png";
import postgreSQL from "../../assets/postgreSQL.png";
import flutter from "../../assets/flutter.png";
import dart from "../../assets/dart.png";
import vsCode from "../../assets/vsCode.png";
import python from "../../assets/python.png";
import colab from "../../assets/colab.png";
import jira from "../../assets/jira.png";
import firebase from '../../assets/firebase.png';

export default function About() {
  const [loadedProfileimg, setloadedProfileimg] = useState(false);
  const [loadedgithubimg, setloadedgithubimg] = useState(false);
  const styles = useStyleConfig("Card");
  const { colorMode } = useColorMode();
  const textColorPrimary = useColorModeValue("lightblue.100", "lightpeach.100");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
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
      <Box pt={{ base: "40px", md: "80px", xl: "80px" }}>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
        >
          <Grid
            templateColumns={{
              base: "1fr",
              lg: "1.34fr 1.62fr",
            }}
            templateRows={{
              lg: "1fr",
            }}
            gap={{ base: "20px", xl: "20px" }}
          >
            <Box
              position="relative"
              w={{ base: "100%", "3xl": "100%" }}
              h={{ base: "100%", "3xl": "500px" }}
              borderRadius="20px"
              p="20px"
              overflow="hidden"
            >
              <Box
                __css={styles}
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                bg={textColorPrimary}
                transform="rotate(4deg)"
                // zIndex="-1"
              />
              <Skeleton
                height="100%"
                isLoaded={loadedProfileimg}
                color="white"
                fadeDuration={1}
              >
                <LazyLoadImage
                  src={myphoto}
                  width="100%"
                  height="100%"
                  alt="Image Alt"
                  effect="blur"
                  style={{ height: "100%" }}
                  onLoad={() => setloadedProfileimg(true)}
                />
              </Skeleton>
            </Box>
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Box __css={styles} border="none" bg="transparent">
                <Text
                  color={textColorPrimary}
                  fontSize="2xl"
                  mb="40px"
                  textAlign="center"
                >
                  {"<GENERAL INFORMATION/>"}
                </Text>
                <SimpleGrid columns="2" gap="20px">
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Current Organization"
                    value="Gadgeon Smart Systems"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Designation"
                    value="Software Engineer"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Location"
                    value="Kochi, Kerala"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Education"
                    value="College of Engineering Muttathara, Thiruvananthapuram"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Degree"
                    value="Bachelor of Technology"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Languages"
                    value="English, Malayalam, Tamil"
                  />
                </SimpleGrid>
              </Box>
            </Flex>
          </Grid>
        </Flex>

        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
        >
          <Text color={textColorPrimary} fontSize="2em" textAlign="center">
            {"<SKILLSET AND TOOLS/>"}
          </Text>
        </Flex>
        <SimpleGrid
          columns={{ base: 2, md: 2, lg: 3, xl: 6, "2xl": 6 }}
          gap="20px"
          mb="20px"
          align={{ base: "center", xl: "center" }}
          justify={{ base: "center", xl: "center" }}
        >
          <TechStackCard imagepath={angular} />
          <TechStackCard imagepath={react} />
          <TechStackCard imagepath={js} />
          <TechStackCard imagepath={typescript} />
          <TechStackCard imagepath={springBootLogo} />
          <TechStackCard imagepath={node} />
          <TechStackCard imagepath={goLangLogo} />
          <TechStackCard imagepath={flutter} />
          <TechStackCard imagepath={dart} />
          <TechStackCard imagepath={git} />
          <TechStackCard imagepath={gitlab} />
          <TechStackCard imagepath={html} />
          <TechStackCard imagepath={css} />
          <TechStackCard imagepath={vsCode} />
          <TechStackCard imagepath={python} />
          <TechStackCard imagepath={colab} />
          <TechStackCard imagepath={jira} />
          <TechStackCard imagepath={firebase}/>
        </SimpleGrid>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
          mt="40px"
        >
          <Text color={textColorPrimary} fontSize="2em" textAlign="center">
            {"<MY INTERESTS AND HOBBIES/>"}
          </Text>
        </Flex>
        <SimpleGrid
          columns={{ base: 1, xl: 3, "2xl": 3 }}
          gap="20px"
          mb="20px"
          align={{ base: "center", xl: "center" }}
          justify={{ base: "center", xl: "center" }}
        >
          <Box __css={styles}>
            <Box textAlign="center">
              <Icon
                as={BsCameraReelsFill}
                width="30px"
                height="30px"
                color="inherit"
              />
            </Box>
            <Text textAlign="center">Watching Movies</Text>
            <Text color={textColorPrimary} textAlign="center" mt="5px">
              Movies are my ultimate escape, where thrillers keep me on the edge
              of my seat, suspense unravels mysteries, action pumps adrenaline,
              and comedy sprinkles laughter throughout. It's not just the
              gripping plots and larger-than-life characters that draw me in,
              but the meticulous craft behind every scene. The art of
              filmmaking—from its seamless editing to the pulse-pounding music
              that sets the tone—is a marvel in itself.
            </Text>
          </Box>
          <Box __css={styles}>
            <Box textAlign="center">
              <Icon
                as={GiLoveSong}
                width="30px"
                height="30px"
                color="inherit"
              />
            </Box>
            <Text textAlign="center">Songs and Dance</Text>
            <Text color={textColorPrimary} textAlign="center" mt="5px">
              ChatGPT Dancing to cinematic fast beat songs is where I find my
              rhythm and passion. The pulsating energy of these tracks ignites
              my soul, propelling me into movements that express joy and
              exhilaration. Whether it's the thrill of action-packed sequences
              in movies or the adrenaline rush of a dance floor, I am captivated
              by the artistry in both. Music, with its diverse genres and
              powerful beats, accompanies me through every step, evoking
              emotions that range from euphoria to introspection. It's not just
              about the tempo—it's about the storytelling woven into each song
              and the way it shapes moments both on screen and in life, making
              every beat a dance and every dance a celebration of the music that
              moves me.
            </Text>
          </Box>
          <Box __css={styles}>
            <Box textAlign="center">
              <Icon
                as={GiCricketBat}
                width="30px"
                height="30px"
                color="inherit"
              />
            </Box>
            <Text textAlign="center">Playing and watching cricket</Text>
            <Text color={textColorPrimary} textAlign="center" mt="5px">
              Cricket holds a special place in my heart, even though my skills
              on the field may not match my enthusiasm for the sport. The thrill
              of watching a well-timed shot or a perfectly bowled delivery
              captivates me every time. I may not excel as a player, but my love
              for cricket is evident in how I follow matches, analyze
              strategies, and cheer for my favorite teams with unwavering
              passion. Whether it's the excitement of a tense finish or the
              camaraderie among players, cricket connects me to a world where
              every match is a story waiting to unfold.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
