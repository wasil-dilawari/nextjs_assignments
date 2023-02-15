"use client";

import { ArrowForwardIcon, CheckCircleIcon, CheckIcon } from "@chakra-ui/icons";
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
  SimpleGrid,
  Stack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import Card_Box from "./Card_Box";

export default function MainPageContent() {
  const Features = [
    "Product Ownership",
    "Global Marketing by Panaverse DAO",
    "Boosting Economy",
    "Freelancing",
  ];
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
      <Box mt={14} width="100%" p={4} borderWidth="2px" borderColor="red.600">
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
          }}
          gap={1}
        >
          <GridItem colSpan={1}>
            <VStack alignItems="flex-start" spacing="20px">
              <chakra.h2
                fontSize={{ base: "2xl", md: "3xl" }}
                fontWeight="700"
                textAlign="left"
                color="red.600"
              >
                Program of Studies
              </chakra.h2>
              <Button
                variant="outline"
                size={{ base: "sm", md: "md" }}
                colorScheme={"black"}
                color="red.600"
                rounded={"full"}
                _hover={{
                  bg: "red.600",
                  color: "gray.50",
                }}
                rightIcon={<ArrowForwardIcon />}
                as={"a"}
                href={"/courses"}
              >
                Learn More
              </Button>
            </VStack>
          </GridItem>
          <GridItem>
            <Flex>
              <chakra.p>
                The first three quarters are shared by all specialties and are
                dedicated to studying Object-Oriented Programming and
                cutting-edge Full-Stack Web 2.0 development The graduates of
                this program will own products (Full-Stack App Templates, AR and
                VR Experiences, and APIs) that are marketed globally by the
                Panaverse DAO and, if they like, will also be able to start off
                by offering services at a rate of $50 per hour ($96,000 per
                year).
              </chakra.p>
            </Flex>
          </GridItem>
        </Grid>
        <Divider mt={4} mb={4} />
        <SimpleGrid
          // mt="2"
          // px="2"
          spacing={4}
          textAlign="center"
          minChildWidth="200px"
        >
          <Card_Box
            heading={"Quarter 1"}
            text={"Object-Oriented Programming using TypeScript"}
          />
          <Card_Box
            heading={"Quarter 2"}
            text={
              "Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13"
            }
          />
          <Card_Box
            heading={"Quarter 3"}
            text={
              "Dollar making Bootcamp - Full-Stack Templates and API Product Development"
            }
          />
          <Card_Box
            heading={"Quarter 4 & 5"}
            text={
              "Web 3.0 (Blockchain), Metaverse, AI, Cloud-Native, Genomics & IoT Specialization"
            }
          />
        </SimpleGrid>
      </Box>
      {/* 

      -------------------------

       */}
      <Box
        mt="14"
        bgColor="gray.100"
        p="2"
        rounded={{ base: "xl", md: "2xl" }}
        boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
        width="100%"
      >
        <Stack spacing={2} as={Container} maxW="100%" textAlign={"justify"}>
          <Box textAlign="center" pt="2">
            <CheckCircleIcon
              textAlign="center"
              boxSize={"50px"}
              color={"green.500"}
            />
          </Box>
          <Heading fontSize={"3xl"} textAlign="center">
            The Outcome for Participants of the Program
          </Heading>
          <Text color={"gray.600"}>
            As a graduate of this program, you will own valuable products such
            as Full-Stack App Templates, AR and VR Experiences, and APIs that
            are marketed globally by the Panaverse DAO. You will also have the
            opportunity to offer your services at a rate of $50 per hour,
            providing a path to financial stability while contributing to the
            growth of Pakistan's software exports.
          </Text>
        </Stack>

        <Container maxW="100%" mt={4}>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 4 }}
            spacing={4}
            textAlign="left"
          >
            {Features.map((feature) => (
              <HStack key={feature} align={"top"}>
                <Box color={"green.500"} px={2}>
                  <Icon as={CheckCircleIcon} boxSize="5" />
                </Box>
                <VStack align={"start"}>
                  <Text fontWeight={600}>{feature}</Text>
                </VStack>
              </HStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Container>
  );
}
