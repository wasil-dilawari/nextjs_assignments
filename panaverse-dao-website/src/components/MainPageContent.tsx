"use client";

import {
  Text,
  Box,
  Container,
  Heading,
  VStack,
  GridItem,
  chakra,
  Grid,
  Button,
  Flex,
  Divider,
} from "@chakra-ui/react";
import React from "react";

export default function MainPageContent() {
  return (
    <Container maxW="95%" color="gray.700" textAlign="justify">
      <Box
        bgColor="gray.100"
        p="2"
        rounded={{ base: "xl", md: "2xl" }}
        boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
      >
        <Heading
          textAlign={{ base: "center", md: "left" }}
          size={{ base: "lg", md: "xl" }}
          color="gray.600"
        >
          What is Web 3.0?
        </Heading>
        <Text>
          Web 3.0 has the potential to change the internet as we know it
          forever. You're still early in catching the trend and building your
          first blockchain application, acquiring the skills to get a high-
          paying job, or creating your own web 3.0 projects that can make you
          money. In Web 2.0 all the data is controlled by the Big Tech
          companies, such as Google, Apple, etc. In the decentralized web, no
          single person/ company owns any data or information about anyone, and
          everything is visible to the public. Web3, also known as the
          decentralized web, is the third and latest" phase” of the internet.
          Web3 is built on peer-to-peer networks of computers that talk to each
          other without middlemen.
        </Text>
      </Box>
      <Box
        mt="8"
        bgColor="gray.100"
        p="2"
        rounded={{ base: "xl", md: "2xl" }}
        boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
      >
        <Heading
          textAlign={{ base: "center", md: "right" }}
          color="gray.600"
          size={{ base: "lg", md: "xl" }}
        >
          What is Metaverse?
        </Heading>
        <Text>
          A communal environment or virtual world made possible by the fusion of
          physical and virtual reality is referred to as the "metaverse." Users
          can engage in shared interactions with a wide range of virtual objects
          and environments in this imagined networked virtual world. Various
          technology businesses are aggressively pursuing the science fiction
          idea of a metaverse in an effort to give users a seamless and
          immersive experience.{" "}
        </Text>
        <br />
        <Text>
          Metaverse is a highly-anticipated future version of the internet where
          users are able to fully immerse themselves in a shared, virtual world.
          It is expected to have a significant impact on a variety of industries
          and bring people together from all over the world, but also raises
          important questions about privacy and security.{" "}
        </Text>
      </Box>
      {/* 

      -------------------------


       */}
      <Container>
        <Box as={Container} maxW="7xl" mt={14} p={4}>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(2, 1fr)",
            }}
            gap={4}
          >
            <GridItem colSpan={1}>
              <VStack alignItems="flex-start" spacing="20px">
                <chakra.h2 fontSize="3xl" fontWeight="700">
                  Medium length title
                </chakra.h2>
                <Button colorScheme="green" size="md">
                  Call To Action
                </Button>
              </VStack>
            </GridItem>
            <GridItem>
              <Flex>
                <chakra.p>
                  Provide your customers a story they would enjoy keeping in
                  mind the objectives of your website. Pay special attention to
                  the tone of voice.
                </chakra.p>
              </Flex>
            </GridItem>
          </Grid>
          <Divider mt={12} mb={12} />
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            }}
            gap={{ base: "8", sm: "12", md: "16" }}
          >
            <Card_Box
              heading={"First Feature"}
              text={"Short text describing one of you features/service"}
            />
            <Card_Box
              heading={"Second Feature"}
              text={"Short text describing one of you features/service"}
            />
            <Card_Box
              heading={"Third Feature"}
              text={"Short text describing one of you features/service"}
            />
            <Card_Box
              heading={"Fourth Feature"}
              text={"Short text describing one of you features/service"}
            />
          </Grid>
        </Box>
      </Container>
    </Container>
  );
}

interface CardProps {
  heading: string;
  text: string;
}

const Card_Box = ({ heading, text }: CardProps) => {
  return (
    <GridItem>
      <chakra.h3 fontSize="xl" fontWeight="600">
        {heading}
      </chakra.h3>
      <chakra.p>{text}</chakra.p>
    </GridItem>
  );
};
