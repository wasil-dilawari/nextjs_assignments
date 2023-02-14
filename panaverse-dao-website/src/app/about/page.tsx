"use client";

import { Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import Header from "src/components/Header";
import MainMenu from "src/components/Menu";

export default function AboutUs() {
  return (
    <>
      <Header />
      <MainMenu />
      <Heading>About Us</Heading>
      <br />
      <Text>
        <p>
          The internet is without a doubt the most important technological
          development in human history. Web3, 3D Metaverse, AI, IoT, Cloud, and
          Edge technologies expand the internet as we know it by introducing
          novel features and advancements. Metaverse will make use of all
          aspects of modern technology, including 3D, VR, AR, AI, blockchain,
          cloud and edge computing, voice computing, ambient computing, and
          more.
        </p>
        <br />
        <p>
          Citi is the latest Wall Street business to give a positive prognosis
          for Web 3.0 and the Metaverse, terms used to depict a future internet
          vision centered on decentralized technologies and virtual worlds. Citi
          stated in a March 2022 research paper that the metaverse economy might
          have a total addressable market of up to $13 trillion and five billion
          people by 2030.
        </p>
        <br />
        <p>
          <Link
            href="https://www.citivelocity.com/citigps/metaverse-and-money/"
            target="_blank"
          >
            Reference
          </Link>
        </p>
      </Text>{" "}
      <br />
      <Heading>The Program in a Nutshell: Earn While You Learn</Heading>
      <Text>
        In this brand-new type of curriculum, students will learn how to make
        money and boost exports in the classroom and will begin doing so within
        six months of the program's beginning. It resembles a cross between a
        corporate venture and an educational project.
      </Text>{" "}
      <br />
      <Heading>Our Team</Heading>
      <Text>Zia Khan</Text>
      <Text>Daniyal Nagori</Text>
      <Text>Adil Altaf</Text>
      <Text>Hira Khan</Text>
    </>
  );
}
