"use client";

import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
  Link,
  ListItem,
  OrderedList,
  SimpleGrid,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import Footer from "src/components/Footer";
import Header from "src/components/Header";

export default function Courses() {
  return (
    <>
      <Header />
      <Container py="4" maxW="95%" color="gray.800">
        <Heading size="lg" pt="6">
          Courses
        </Heading>
        <br />
        <Heading size="lg" pt="6">
          Program of Studies
        </Heading>
        <Text textAlign="justify" pt="2">
          This curriculum is intended for beginners who want to learn software
          development from the ground up. The first three quarters are shared by
          all specialties and are dedicated to studying Object-Oriented
          Programming and cutting-edge Full-Stack Web 2.0 development. It is
          going to be a fifteen-month-long hybrid program that includes both
          onsite and online classes and is divided into five quarters of 13
          weeks each. The emphasis will be on hands-on learning by educating
          students to produce projects. To accommodate everyone, courses will be
          held primarily on weekends or after 6:00 p.m. (Pakistan Time) on
          weekdays. It employs a hybrid teaching format, with core onsite
          classes complemented by online Zoom laboratories and recorded videos.
        </Text>
        <br />
        <Heading size="md">
          Core Courses (Common in All Specializations):
        </Heading>
        <Text>
          Every participant of the program will start by completing the
          following three core courses: <br />{" "}
        </Text>
        <SimpleGrid
          mt="4"
          spacing={4}
          textAlign="center"
          minChildWidth="200px"

          // templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        >
          <Card
            bgColor="gray.100"
            boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
          >
            <CardHeader>
              <Heading size="sm">Quarter 1 (Core)</Heading>
            </CardHeader>
            <CardBody bgColor="gray.300">
              <Text as="b">CS-101</Text>
              <Text>Object-Oriented Programming using TypeScript</Text>
            </CardBody>
          </Card>
          <Card
            bgColor="gray.100"
            boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
          >
            <CardHeader>
              <Heading size="sm">Quarter II (Core)</Heading>
            </CardHeader>
            <CardBody bgColor="gray.300">
              <Text as="b">W2-201:</Text>
              <Text>
                Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and
                APIs using Next.js 13 and Cloud Development Kit (CDK) for
                Terraform
              </Text>
            </CardBody>
          </Card>
          <Card
            bgColor="gray.100"
            boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
          >
            <CardHeader>
              <Heading size="sm">Quarter III (Core)</Heading>
            </CardHeader>
            <CardBody bgColor="gray.300">
              <Text as="b">$-101:</Text>
              <Text>
                Dollar Making Bootcamp, Full-Stack Template and API Product
                Development
              </Text>
            </CardBody>
          </Card>
        </SimpleGrid>
        <br />
        <Heading size="md">Specialized Tracks:</Heading>
        <Text textAlign="justify" pt="2">
          After completing the first three quarters the participants will select
          one or more specializations consisting of two courses each:
        </Text>

        {/* ---------------1--------------- */}
        <Box
          borderWidth="1px"
          borderColor="gray.300"
          mt="4"
          pb="2"
          rounded="6"
          boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
        >
          <SimpleGrid
            spacing={4}
            textAlign="center"
            // templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          >
            <Card>
              <CardHeader roundedTop="6" bgColor="gray.300">
                <Heading size="sm">
                  Web 3.0 (Blockchain) and Metaverse Specialization
                </Heading>
              </CardHeader>
            </Card>
          </SimpleGrid>
          <Text textAlign="justify" pt="2" px="2">
            This Web 3.0 and Metaverse specialization focuses on developing
            full-stack Web 3.0 and Metaverse experiences for the next generation
            of the internet by specializing in building worlds that merge the
            best of cutting-edge decentralized distributed blockchains with 3D
            metaverse client experiences.
          </Text>
          <SimpleGrid
            mt="2"
            px="2"
            spacing={4}
            textAlign="center"
            minChildWidth="200px"
            // templateColumns="repeat(auto-fill, 1fr))"
          >
            <Card bgColor="gray.100">
              <CardHeader>
                <Heading size="sm">Quarter IV</Heading>
              </CardHeader>
              <CardBody bgColor="gray.300">
                <Text as="b">W3-351:</Text>
                <Text>
                  Developing Smart Contracts and Planet-Scale Web 3.0 Dapps
                </Text>
              </CardBody>
            </Card>
            <Card bgColor="gray.100">
              <CardHeader>
                <Heading size="sm">Quarter V</Heading>
              </CardHeader>
              <CardBody bgColor="gray.300">
                <Text as="b">MWV-361:</Text>
                <Text>
                  Developing Planet-Scale Open Virtual and Augmented Metaverse
                  Experiences
                </Text>
              </CardBody>
            </Card>
          </SimpleGrid>
        </Box>
        {/* --------------2---------------- */}
        <Box
          borderWidth="1px"
          borderColor="gray.300"
          pb="2"
          rounded="6"
          mt="12"
          boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
        >
          <SimpleGrid
            spacing={4}
            textAlign="center"
            // templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          >
            <Card>
              <CardHeader roundedTop="6" bgColor="gray.300">
                <Heading size="sm">
                  Artificial Intelligence (AI) and Deep Learning Specialization
                </Heading>
              </CardHeader>
            </Card>
          </SimpleGrid>
          <Text textAlign="justify" pt="2" px="2">
            The AI and Deep Learning specialization focuses on building and
            deploying intelligent APIs using OpenAI models and building custom
            Deep Learning Tensorflow models.
          </Text>
          <SimpleGrid
            mt="2"
            px="2"
            spacing={4}
            textAlign="center"
            minChildWidth="200px"
            // templateColumns="repeat(auto-fill, 1fr))"
          >
            <Card bgColor="gray.100">
              <CardHeader>
                <Heading size="sm">Quarter IV</Heading>
              </CardHeader>
              <CardBody bgColor="gray.300">
                <Text as="b">AI-351:</Text>
                <Text>
                  Developing Planet-Scale Intelligent APIs and Python
                  Programming
                </Text>
              </CardBody>
            </Card>
            <Card bgColor="gray.100">
              <CardHeader>
                <Heading size="sm">Quarter V</Heading>
              </CardHeader>
              <CardBody bgColor="gray.300">
                <Text as="b">AI-361:</Text>
                <Text>Deep Learning and MLOps</Text>
              </CardBody>
            </Card>
          </SimpleGrid>
        </Box>

        {/* --------------3---------------- */}
        <Box
          borderWidth="1px"
          borderColor="gray.300"
          pb="2"
          rounded="6"
          mt="12"
          boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
        >
          <SimpleGrid
            spacing={4}
            textAlign="center"
            // templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          >
            <Card>
              <CardHeader roundedTop="6" bgColor="gray.300">
                <Heading size="sm">
                  Cloud-Native Computing Specialization{" "}
                </Heading>
              </CardHeader>
            </Card>
          </SimpleGrid>
          <Text textAlign="justify" pt="2" px="2">
            The Cloud-Native Computing Specialization focuses on Containers,
            Kubernetes, and CDK for Kubernetes.
          </Text>
          <SimpleGrid
            mt="2"
            px="2"
            spacing={4}
            textAlign="center"
            minChildWidth="200px"
            // templateColumns="repeat(auto-fill, 1fr))"
          >
            <Card bgColor="gray.100">
              <CardHeader>
                <Heading size="sm">Quarter IV</Heading>
              </CardHeader>
              <CardBody bgColor="gray.300">
                <Text as="b">CN-351:</Text>
                <Text>Certified Kubernetes Application Developer (CKAD)</Text>
              </CardBody>
            </Card>
            <Card bgColor="gray.100">
              <CardHeader>
                <Heading size="sm">Quarter V</Heading>
              </CardHeader>
              <CardBody bgColor="gray.300">
                <Text as="b">CN-361:</Text>
                <Text>Developing Multi-Cloud APIs using CDK for Terraform</Text>
              </CardBody>
            </Card>
          </SimpleGrid>
        </Box>

        {/* --------------4---------------- */}
        <Box
          borderWidth="1px"
          borderColor="gray.300"
          pb="2"
          rounded="6"
          mt="12"
          boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
        >
          <SimpleGrid
            spacing={4}
            textAlign="center"
            // templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          >
            <Card>
              <CardHeader roundedTop="6" bgColor="gray.300">
                <Heading size="sm">
                  Ambient Computing and IoT Specialization
                </Heading>
              </CardHeader>
            </Card>
          </SimpleGrid>
          <Text textAlign="justify" pt="2" px="2">
            The Ambient Computing and IoT Specialization focuses on building
            Smart Homes, Offices, Factories, and Cities using Voice computing,
            Matter Protocol, and Embedded Devices.
          </Text>
          <SimpleGrid
            mt="2"
            px="2"
            spacing={4}
            textAlign="center"
            minChildWidth="200px"
            // templateColumns="repeat(auto-fill, 1fr))"
          >
            <Card bgColor="gray.100">
              <CardHeader>
                <Heading size="sm">Quarter IV</Heading>
              </CardHeader>
              <CardBody bgColor="gray.300">
                <Text as="b">AC-351:</Text>
                <Text>
                  Ambient Computing with Voice Assistants and Matter Protocol
                  Devices
                </Text>
              </CardBody>
            </Card>
            <Card bgColor="gray.100">
              <CardHeader>
                <Heading size="sm">Quarter V</Heading>
              </CardHeader>
              <CardBody bgColor="gray.300">
                <Text as="b">AC-361:</Text>
                <Text>Embedded Programming using C and Rust</Text>
              </CardBody>
            </Card>
          </SimpleGrid>
        </Box>

        {/* --------------5---------------- */}
        <Box
          borderWidth="1px"
          borderColor="gray.300"
          pb="2"
          rounded="6"
          mt="12"
          boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
        >
          <SimpleGrid
            spacing={4}
            textAlign="center"
            // templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          >
            <Card>
              <CardHeader roundedTop="6" bgColor="gray.300">
                <Heading size="sm">
                  Genomics and Bioinformatics Specialization
                </Heading>
              </CardHeader>
            </Card>
          </SimpleGrid>
          <Text textAlign="justify" pt="2" px="2">
            Genomics is the study of the total genetic makeup of individual
            organisms, and how this genetic information is structured,
            functions, and has evolved; bioinformatics encompasses a diverse
            range of analytical methods and tools applied to genomic data. This
            Specialization focuses on performing complex bioinformatics analysis
            using the most essential Python libraries and applications.
          </Text>
          <SimpleGrid
            mt="2"
            px="2"
            spacing={4}
            textAlign="center"
            minChildWidth="200px"
            // templateColumns="repeat(auto-fill, 1fr))"
          >
            <Card bgColor="gray.100">
              <CardHeader>
                <Heading size="sm">Quarter IV</Heading>
              </CardHeader>
              <CardBody bgColor="gray.300">
                <Text as="b">Bio-351:</Text>
                <Text>Python for Biologists</Text>
              </CardBody>
            </Card>
            <Card bgColor="gray.100">
              <CardHeader>
                <Heading size="sm">Quarter V</Heading>
              </CardHeader>
              <CardBody bgColor="gray.300">
                <Text as="b">Bio-361:</Text>
                <Text>Bioinformatics with Python</Text>
              </CardBody>
            </Card>
          </SimpleGrid>
        </Box>

        {/* --------------6---------------- */}
        <Box
          borderWidth="1px"
          borderColor="gray.300"
          pb="2"
          rounded="6"
          mt="12"
          boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
        >
          <SimpleGrid
            spacing={4}
            textAlign="center"
            // templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          >
            <Card>
              <CardHeader roundedTop="6" bgColor="gray.300">
                <Heading size="sm">
                  Network Programmability and Automation Specialization
                </Heading>
              </CardHeader>
            </Card>
          </SimpleGrid>
          <Text textAlign="justify" pt="2" px="2">
            More than ever, network engineers are finding it challenging to
            complete their duties entirely manually. Network automation is now
            crucial due to new protocols, technologies, delivery models, and the
            requirement for enterprises to become more adaptable and agile. This
            course teaches network engineers how to automate systems with code
            using a variety of technologies and tools, including Linux, Python,
            APIs, and Git.{" "}
          </Text>
          <SimpleGrid
            mt="2"
            px="2"
            spacing={4}
            textAlign="center"
            minChildWidth="200px"
            // templateColumns="repeat(auto-fill, 1fr))"
          >
            <Card bgColor="gray.100">
              <CardHeader>
                <Heading size="sm">Quarter IV</Heading>
              </CardHeader>
              <CardBody bgColor="gray.300">
                <Text as="b">NPA-351:</Text>
                <Text>CCNA 200-301 Certification</Text>
              </CardBody>
            </Card>
            <Card bgColor="gray.100">
              <CardHeader>
                <Heading size="sm">Quarter V</Heading>
              </CardHeader>
              <CardBody bgColor="gray.300">
                <Text as="b">NPA-361:</Text>
                <Text>Network Programmability and Automation</Text>
              </CardBody>
            </Card>
          </SimpleGrid>
        </Box>

        {/* --------------6---------------- */}

        <br />
        <Heading size="lg" pt="6">
          The Outcome for Participants of the Program
        </Heading>
        <Text textAlign="justify" pt="2">
          The graduates of this program will own products (Full-Stack App
          Templates, AR and VR Experiences, and APIs) that are marketed globally
          by the Panaverse DAO and, if they like, will also be able to start off
          by offering services at a rate of $50 per hour ($96,000 per year).
          This would give Pakistani professionals and students a fantastic
          opportunity to better their financial situation while also giving the
          economy a much-needed boost by expanding software exports.{" "}
        </Text>
        <br />
        <OrderedList>
          <ListItem>
            <Link
              href="https://content.techgig.com/hiring/top-5-metaverse-jobs-that-will-rule-the-future-of-tech-industry/articleshow/87581325.cms"
              target="_blank"
            >
              Top 5 &apos;Metaverse&apos; jobs that will rule the future of tech
              industry
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
              Internet&apos;s Uncharted Waters
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.blockchain-council.org/metaverse/how-to-become-metaverse-developer/"
              target="_blank"
            >
              How To Become Metaverse Developer: Scope, Skills, and Salary
            </Link>
          </ListItem>
        </OrderedList>
        <br />
        <Heading size="lg" pt="6">
          Relevant Information Links:
        </Heading>
        <UnorderedList pt="2">
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
        <Footer />
      </Container>
    </>
  );
}
