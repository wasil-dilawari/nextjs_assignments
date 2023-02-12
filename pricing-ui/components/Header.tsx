"use client";

import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function Header() {
  return (
    <Box
      as="section"
      bg="purple.600"
      pt={["60px", "60px", "90px"]}
      pb="198px"
      px="8"
      color="gray.50"
      textAlign={["left", "center", "center"]}
    >
      <Heading fontWeight="extrabold" fontSize={["3xl", "3xl", "5xl"]}>
        Simple pricing for you business
      </Heading>
      <Text fontWeight="medium" fontSize={["lg", "lg", "2xl"]} pt="4">
        Plans that are carefully crafted to suit your business.
      </Text>
    </Box>
  );
}
