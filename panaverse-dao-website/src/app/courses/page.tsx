"use client";

import { Heading } from "@chakra-ui/react";
import React from "react";
import Header from "src/components/Header";
import MainMenu from "src/components/Menu";

export default function Courses() {
  return (
    <>
      <Header />
      <MainMenu />
      <Heading>Courses</Heading>
    </>
  );
}
