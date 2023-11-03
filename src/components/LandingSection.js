import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Matt!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    p={8}
  >
    <VStack spacing={4}>
      <Avatar
        size="2xl" 
        name="Pete"
        src="https://i.pravatar.cc/150?img=7" // Replace with path to your avatar image
      />
      <Heading as="h1" size="xl" color="white">
        {greeting}
      </Heading>
      <Heading as="h2" size="lg" color="whiteAlpha.800">
        {bio1}
      </Heading>
      <Heading as="h2" size="lg" color="whiteAlpha.800">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;

