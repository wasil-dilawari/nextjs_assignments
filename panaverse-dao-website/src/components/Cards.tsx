"use client";

import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";

type card = {
  name: string;
  pic: string;
  intro: string;
};

const zia: card = {
  name: "Ziaullah Khan",
  pic: "zia_khan.png",
  intro: "LEAD FACULTY MEMBER",
};
const daniyal: card = {
  name: "Daniyal Nagori",
  pic: "daniyal_nagori.png",
  intro: "SOFTWARE DEVELOPMENT LEAD",
};
const adil: card = {
  name: "Adil Altaf",
  pic: "adil_altaf.jpeg",
  intro: "FULL STACK CLOUD DEVELOPER",
};
const hira: card = {
  name: "Hira Khan",
  pic: "hira_khan.png",
  intro: "FULL STACK CLOUD DEVELOPER",
};
var card: card;

const ZiaCard = () => SocialProfileSimple(zia);
const DaniyalCard = () => SocialProfileSimple(daniyal);
const AdilCard = () => SocialProfileSimple(adil);
const HiraCard = () => SocialProfileSimple(hira);

function SocialProfileSimple(params: card) {
  const card: card = params;

  return (
    <Center py={6}>
      <Box
        maxW={"320px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Avatar
          size={"xl"}
          src={`/images/${card.pic}`}
          //   alt={card.name}
          mb={4}
          pos={"relative"}
          // _after={{
          //   content: '""',
          //   w: 41,
          //   h: 41,
          //   bg: "green.300",
          //   border: "2px solid white",
          //   rounded: "full",
          //   pos: "absolute",
          //   bottom: 0,
          //   right: 3,
          // }}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {card.name}
        </Heading>
        {/* <Text fontWeight={600} color={"gray.500"} mb={4}>
          @lindsey_jam3s
        </Text> */}
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          {card.intro}
        </Text>

        {/* <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            #art
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            #photography
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            #music
          </Badge>
        </Stack>

        <Stack mt={8} direction={"row"} spacing={4}>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            _focus={{
              bg: "gray.200",
            }}
          >
            Message
          </Button>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            bg={"blue.400"}
            color={"white"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "blue.500",
            }}
            _focus={{
              bg: "blue.500",
            }}
          >
            Follow
          </Button>
        </Stack> */}
      </Box>
    </Center>
  );
}

export { ZiaCard, DaniyalCard, AdilCard, HiraCard };
