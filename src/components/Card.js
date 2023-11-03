import React from "react";
import { Box, Heading, Image, Text, VStack, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      _hover={{ boxShadow: "lg" }}
    >
      <Image src={imageSrc} alt={`Image for ${title}`} />

      <VStack align="start" p={5} backgroundColor="white" color="gray.800">
        <Heading size="md" color="gray.900">{title}</Heading>
        <Text mt={2} color="gray.600">{description}</Text>
        <HStack mt={4}>
          <Text fontSize="sm" color="gray.500">
            See More
          </Text>
          <FontAwesomeIcon icon={faArrowRight} color="gray.800" />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;




