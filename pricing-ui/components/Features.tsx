"use client";

import { HStack, Icon, StackProps, Text, Box, Stack } from "@chakra-ui/react";
import React, { ElementType } from "react";
import { MoneyBackIcon, HassleFreeIcon, MonthlySubIcon } from "@/icons/Icon";

interface FeatureProps extends StackProps {
  icon: ElementType;
}

function Feature(props: FeatureProps) {
  const { icon, children, ...rest } = props;
  return (
    <HStack {...rest} spacing="6" align="start">
      <Icon as={icon} boxSize={["8", "8", "12"]} />
      <Text fontSize="lg" fontWeight="bold" textAlign="left">
        {children}
      </Text>
    </HStack>
  );
}

export function Features() {
  return (
    <Box maxW="1024px" m="auto" pt="60px" pb="8" as="section">
      <Stack
        px="12"
        spacing={["6", "6", "5"]}
        direction={["column", "column", "row"]}
      >
        <Feature icon={MoneyBackIcon}>30 days money back Guarantee</Feature>
        <Feature icon={HassleFreeIcon}>No setup fees 100% hassle-free</Feature>
        <Feature icon={MonthlySubIcon}>
          No monthly subscription Pay once and for all
        </Feature>
      </Stack>
    </Box>
  );
}
