"use client";

import { Box, chakra, Flex, Link } from "@chakra-ui/react";
import React from "react";

interface CardProps {
  heading: string;
  text: string;
}

export default function Card_Box({ heading, text }: CardProps) {
  return (
    <>
      {/* <GridItem bgColor="red.100" pb="2">
       <chakra.h3 fontSize={{ base: "lg", md: "xl" }} fontWeight="600">
         {heading}
       </chakra.h3>
       <chakra.p>{text}</chakra.p>
     </GridItem> */}
      <Box
        w="full"
        maxW="sm"
        mx="auto"
        px={4}
        py={3}
        bg="white"
        _dark={{
          bg: "gray.800",
        }}
        shadow="md"
        borderWidth="thin"
        borderColor="red.600"
        rounded="md"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <chakra.span
            w="100%"
            textAlign="center"
            fontSize="sm"
            color="gray.800"
            _dark={{
              color: "gray.400",
            }}
          >
            {heading}
          </chakra.span>
        </Flex>

        <Box>
          <chakra.h1
            fontSize={{ base: "sm", md: "md" }}
            fontWeight="semibold"
            mt={2}
            color="gray.600"
            _dark={{
              color: "white",
            }}
          >
            {text}
          </chakra.h1>
        </Box>
      </Box>
    </>
  );
}
