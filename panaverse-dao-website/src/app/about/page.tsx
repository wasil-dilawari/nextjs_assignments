"use client";

import { Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { AdilCard, DaniyalCard, HiraCard, ZiaCard } from "src/components/Cards";
import Footer from "src/components/Footer";
import Header from "src/components/Header";

export default function AboutUs() {
  return (
    <>
      <Header />
      <Container py="4" maxW="95%" color="gray.800">
        <Heading size="lg">The Program in a Nutshell:</Heading>
        <Heading size="xl" color="red.500" mt="-1.5">
          Earn While You Learn
        </Heading>
        <Text textAlign="justify" pt="2">
          In this brand-new type of curriculum, students will learn how to make
          money and boost exports in the classroom and will begin doing so
          within six months of the program's beginning. It resembles a cross
          between a corporate venture and an educational project.
        </Text>
        <Heading size="lg" pt="6">
          About Panaverse DAO
        </Heading>
        <Text textAlign="justify" pt="2">
          The internet is without a doubt the most important technological
          development in human history. Web3, 3D Metaverse, AI, IoT, Cloud, and
          Edge technologies expand the internet as we know it by introducing
          novel features and advancements. Metaverse will make use of all
          aspects of modern technology, including 3D, VR, AR, AI, blockchain,
          cloud and edge computing, voice computing, ambient computing, and
          more.
        </Text>

        <Text textAlign="justify" pt="2">
          Citi is the latest Wall Street business to give a positive prognosis
          for Web 3.0 and the Metaverse, terms used to depict a future internet
          vision centered on decentralized technologies and virtual worlds. Citi
          stated in a March 2022 research paper that the metaverse economy might
          have a total addressable market of up to $13 trillion and five billion
          people by 2030.
        </Text>
        <Text as="cite" color="gray.500" pt="2">
          <Link
            href="https://www.citivelocity.com/citigps/metaverse-and-money/"
            target="_blank"
          >
            Reference
          </Link>
        </Text>
        <Heading size="lg" pt="6">
          Our Team
        </Heading>
        <SimpleGrid
          bgColor="gray.100"
          rounded="xl"
          px="2"
          minChildWidth="320px"
        >
          <ZiaCard />
          <DaniyalCard />
          <AdilCard />
          <HiraCard />
        </SimpleGrid>
        <Footer />
      </Container>
    </>
  );
}
