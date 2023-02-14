"use client";

import {
  Heading,
  Link,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import Header from "src/components/Header";
import MainMenu from "src/components/Menu";

export default function Courses() {
  return (
    <>
      <Header />
      <MainMenu />
      <Heading>Courses</Heading>
      <br />
      <Heading>Program of Studies</Heading>
      <Text>
        This curriculum is intended for beginners who want to learn software
        development from the ground up. The first three quarters are shared by
        all specialties and are dedicated to studying Object-Oriented
        Programming and cutting-edge Full-Stack Web 2.0 development. It is going
        to be a fifteen-month-long hybrid program that includes both onsite and
        online classes and is divided into five quarters of 13 weeks each. The
        emphasis will be on hands-on learning by educating students to produce
        projects. To accommodate everyone, courses will be held primarily on
        weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a
        hybrid teaching format, with core onsite classes complemented by online
        Zoom laboratories and recorded videos.
      </Text>
      <br />
      <Text as="b">Core Courses (Common in All Specializations):</Text>
      <Text>
        Every participant of the program will start by completing the following
        three core courses: <br />{" "}
      </Text>
      <UnorderedList>
        <ListItem>
          <Text as="b">Quarter I (Core)</Text>
          <br />
          CS-101:{" "}
          <Text as="i">Object-Oriented Programming using TypeScript</Text>
        </ListItem>
        <ListItem>
          <Text as="b">Quarter II (Core)</Text>
          <br />
          W2-201:{" "}
          <Text as="i">
            Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs
            using Next.js 13 and Cloud Development Kit (CDK) for Terraform
          </Text>
        </ListItem>
        <ListItem>
          <Text as="b">Quarter III (Core)</Text>
          <br />
          $-101:{" "}
          <Text as="i">
            Dollar Making Bootcamp - Full-Stack Template and API Product
            Development
          </Text>
        </ListItem>
      </UnorderedList>
      <br />
      <Text as="b">Specialized Tracks:</Text>
      <Text>
        After completing the first three quarters the participants will select
        one or more specializations consisting of two courses each:
      </Text>
      <OrderedList>
        <ListItem>
          <Text as="b">Web 3.0 (Blockchain) and Metaverse Specialization</Text>
          <br />
          <Text as="i">
            This Web 3.0 and Metaverse specialization focuses on developing
            full-stack Web 3.0 and Metaverse experiences for the next generation
            of the internet by specializing in building worlds that merge the
            best of cutting-edge decentralized distributed blockchains with 3D
            metaverse client experiences.
          </Text>
          <br />
          <br />
          <Text as="b">Quarter IV</Text>
          <br />
          W3-351:{" "}
          <Text as="i">
            Developing Smart Contracts and Planet-Scale Web 3.0 Dapps
          </Text>
          <br />
          <br />
          <Text as="b">Quarter V</Text>
          <br />
          MWV-361:{" "}
          <Text as="i">
            Developing Planet-Scale Open Virtual and Augmented Metaverse
            Experiences
          </Text>
        </ListItem>
        <br />
        <ListItem>
          <Text as="b">
            Artificial Intelligence (AI) and Deep Learning Specialization
          </Text>
          <br />
          <Text as="i">
            The AI and Deep Learning specialization focuses on building and
            deploying intelligent APIs using OpenAI models and building custom
            Deep Learning Tensorflow models.
          </Text>
          <br />
          <br />
          <Text as="b">Quarter IV</Text>
          <br />
          AI-351:{" "}
          <Text as="i">
            Developing Planet-Scale Intelligent APIs and Python Programming{" "}
          </Text>
          <br />
          <br />
          <Text as="b">Quarter V</Text>
          <br />
          AI-361: <Text as="i">Deep Learning and MLOps </Text>
        </ListItem>
        <br />
        <ListItem>
          <Text as="b">Cloud-Native Computing Specialization </Text>
          <br />
          <Text as="i">
            The Cloud-Native Computing Specialization focuses on Containers,
            Kubernetes, and CDK for Kubernetes.{" "}
          </Text>
          <br />
          <br />
          <Text as="b">Quarter IV</Text>
          <br />
          CN-351:{" "}
          <Text as="i">Certified Kubernetes Application Developer (CKAD) </Text>
          <br />
          <br />
          <Text as="b">Quarter V</Text>
          <br />
          CN-361: <Text as="i">Deep Learning and MLOps </Text>
        </ListItem>
        <br />
        <ListItem>
          <Text as="b">Ambient Computing and IoT Specialization</Text>
          <br />
          <Text as="i">
            The Ambient Computing and IoT Specialization focuses on building
            Smart Homes, Offices, Factories, and Cities using Voice computing,
            Matter Protocol, and Embedded Devices.{" "}
          </Text>
          <br />
          <br />
          <Text as="b">Quarter IV</Text>
          <br />
          AC-351:{" "}
          <Text as="i">
            Ambient Computing with Voice Assistants and Matter Protocol Devices
          </Text>
          <br />
          <br />
          <Text as="b">Quarter V</Text>
          <br />
          AC-361: <Text as="i">Embedded Programming using C and Rust</Text>
        </ListItem>
        <br />
        <ListItem>
          <Text as="b">Genomics and Bioinformatics Specialization</Text>
          <br />
          <Text as="i">
            Genomics is the study of the total genetic makeup of individual
            organisms, and how this genetic information is structured,
            functions, and has evolved; bioinformatics encompasses a diverse
            range of analytical methods and tools applied to genomic data. This
            Specialization focuses on performing complex bioinformatics analysis
            using the most essential Python libraries and applications.{" "}
          </Text>
          <br />
          <br />
          <Text as="b">Quarter IV</Text>
          <br />
          Bio-351: <Text as="i">Python for Biologists </Text>
          <br />
          <br />
          <Text as="b">Quarter V</Text>
          <br />
          Bio-361: <Text as="i">Bioinformatics with Python</Text>
        </ListItem>
        <br />
        <ListItem>
          <Text as="b">
            Network Programmability and Automation Specialization
          </Text>
          <br />
          <Text as="i">
            More than ever, network engineers are finding it challenging to
            complete their duties entirely manually. Network automation is now
            crucial due to new protocols, technologies, delivery models, and the
            requirement for enterprises to become more adaptable and agile. This
            course teaches network engineers how to automate systems with code
            using a variety of technologies and tools, including Linux, Python,
            APIs, and Git.{" "}
          </Text>
          <br />
          <br />
          <Text as="b">Quarter IV</Text>
          <br />
          NPA-351: <Text as="i">CCNA 200-301 Certification</Text>
          <br />
          <br />
          <Text as="b">Quarter V</Text>
          <br />
          NPA-361: <Text as="i">Network Programmability and Automation</Text>
        </ListItem>
      </OrderedList>
      <br />
      <Heading>The Outcome for Participants of the Program</Heading>
      <Text>
        The graduates of this program will own products (Full-Stack App
        Templates, AR and VR Experiences, and APIs) that are marketed globally
        by the Panaverse DAO and, if they like, will also be able to start off
        by offering services at a rate of $50 per hour ($96,000 per year). This
        would give Pakistani professionals and students a fantastic opportunity
        to better their financial situation while also giving the economy a
        much-needed boost by expanding software exports.{" "}
      </Text>
      <br />
      <OrderedList>
        <ListItem>
          <Link
            href="https://content.techgig.com/hiring/top-5-metaverse-jobs-that-will-rule-the-future-of-tech-industry/articleshow/87581325.cms"
            target="_blank"
          >
            Top 5 'Metaverse' jobs that will rule the future of tech industry
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://web3.career/web3-salaries/blockchain-developer"
            target="_blank"
          >
            Blockchain Developer Salary - Jun 2022{" "}
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://thedefiant.io/web3-soaring-salaries/"
            target="_blank"
          >
            Web3 Salaries Soar to $750,000 for Rank-and-File Devs{" "}
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://newzoo.com/insights/trend-reports/newzoo-report-on-metaverse-blockchain-gaming-nft-2022"
            target="_blank"
          >
            The Metaverse, Blockchain Gaming, and NFTs: Navigating the
            Internet's Uncharted Waters
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://www.blockchain-council.org/metaverse/how-to-become-metaverse-developer/"
            target="_blank"
          >
            How To Become Metaverse Developer: Scope, Skills, and Salary{" "}
          </Link>
        </ListItem>
      </OrderedList>
      <br />
      <Heading>Relevant Information Links:</Heading>
      <UnorderedList>
        <ListItem>
          <Link href="https://www.piaic.org/" target="_blank">
            Admission Website
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://www.panaverse.co/" target="_blank">
            Syllabus and Community Website
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://www.facebook.com/groups/panaverse"
            target="_blank"
          >
            Facebook
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://www.youtube.com/@panaverse/streams"
            target="_blank"
          >
            YouTube Live Channel
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://github.com/panaverse" target="_blank">
            GitHub Repos
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://twitter.com/Panaverse_edu" target="_blank">
            Twitter
          </Link>
        </ListItem>
      </UnorderedList>
    </>
  );
}
