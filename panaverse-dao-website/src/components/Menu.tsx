"use client";

import { HStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function MainMenu() {
  return (
    <>
      <HStack>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/courses">Courses</Link>
      </HStack>
    </>
  );
}
