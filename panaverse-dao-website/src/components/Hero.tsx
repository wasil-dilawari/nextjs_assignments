"use client";

import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Text,
  Box,
  Container,
  Heading,
  Stack,
  Highlight,
  Button,
} from "@chakra-ui/react";
import React from "react";

export default function Hero() {
  return (
    <Container maxW="3xl" color="gray.800">
      <Stack
        as={Box}
        textAlign={"center"}
        // spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Text
          fontSize={{ base: "lg", md: "xl" }}
          fontWeight="semibold"
          color="green.600"
        >
          Presidential Initiative for Artificial Intelligence and Computing
          (PIAIC)
        </Text>
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          <Highlight
            query="Certified"
            styles={{
              px: "2",
              // py: "1",
              rounded: "2xl",
              bg: "red.600",
              color: "gray.100",
            }}
          >
            Certified Web 3.0 and Metaverse Developer
          </Highlight>
        </Heading>
        <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600">
          A One and Quarter Years Panaverse DAO Earn as you Learn Program
          Getting Ready for the Next Generation of the Internet{" "}
        </Text>
        <Stack
          direction={"column"}
          spacing={3}
          align={"center"}
          alignSelf={"center"}
          position={"relative"}
        >
          <Button
            variant="outline"
            size={{ base: "sm", md: "md" }}
            colorScheme={"red"}
            // bg={"red.600"}
            rounded={"full"}
            px={6}
            _hover={{
              bg: "red.600",
              color: "gray.50",
            }}
            rightIcon={<ArrowForwardIcon />}
          >
            Learn More
          </Button>
        </Stack>
        <Text
          fontSize={{ base: "md", md: "lg" }}
          color="gray.600"
          textAlign="justify"
          px={{ base: "2", md: "8" }}
        >
          Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud,
          Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics
          Technologies{" "}
        </Text>
      </Stack>
    </Container>
  );
}
