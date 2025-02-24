import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Text,
  CircularProgress,
  useColorMode,
} from "@chakra-ui/react";

export default function MaintenanceRequests() {
  const { colorMode } = useColorMode();
  const [activeTab, setActiveTab] = useState("Resolved");
  const tabs = ["Resolved", "In-Progress", "Pending"];

  return (
    <Box
      width="full"
      maxWidth="2xl"
      p={8}
      bg={colorMode === "light" ? "white" : "gray.800"}
      borderRadius="xl"
    >
      <Flex gap={4} mb={12} justifyContent="space-between">
        <Flex gap={4}>
          {tabs.map((tab) => (
            <Button
              key={tab}
              onClick={() => setActiveTab(tab)}
              colorScheme={activeTab === tab ? "green" : "gray"}
              variant="solid"
              size="sm"
            >
              {tab}
            </Button>
          ))}
        </Flex>
      </Flex>

      <Box position="relative" width={300} height={150} mx="auto">
        <CircularProgress
          value={65} // Adjust this value as needed for the filled portion
          thickness="16px"
          color="#e6f1d0"
          size="100%"
          position="absolute"
          top={0}
          left={0}
          clipPath="inset(0% 0% 50% 0%)" // This will create a semi-circular effect
        />
        <Box
          position="absolute"
          top="76%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
        >
          <Text
            fontSize="4xl"
            fontWeight="bold"
            color={colorMode === "light" ? "#0a0a0a" : "white"}
          >
            325
          </Text>
          <Text
            color={colorMode === "light" ? "#737373" : "gray.400"}
            fontSize="sm"
            mt={1}
          >
            Resolved
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
