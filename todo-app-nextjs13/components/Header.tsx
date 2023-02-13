"use client";

import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function Header() {
  return (
    <Box
      as="section"
      bg="teal.500"
      pt={["30px", "30px", "45px"]}
      pb={["30px", "30px", "45px"]}
      px="8"
      color="gray.50"
      textAlign="center"
    >
      <Heading fontWeight="extrabold" fontSize={["3xl", "3xl", "5xl"]}>
        WD To-Do List
      </Heading>
      <Text fontWeight="medium" fontSize={["md", "md", "lg"]}>
        in Next.js 13 and Chakra UI
      </Text>
    </Box>
  );
}
