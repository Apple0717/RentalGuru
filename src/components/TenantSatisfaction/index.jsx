import React from "react";
import { Box, Flex, Text, Progress, useColorModeValue } from "@chakra-ui/react";

export default function TenantSatisfaction() {
  const satisfactionData = [
    { level: "Excellent", count: 36, color: "red" },
    { level: "Good", count: 19, color: "blue" },
    { level: "Average", count: 24, color: "green" },
    { level: "Poor", count: 32, color: "orange" },
  ];

  // Use useColorModeValue to set colors based on the color mode
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("#2e2a2a", "white");
  const subtitleColor = useColorModeValue("#77838f", "gray.400");

  return (
    <Box
      width="full"
      maxWidth="lg"
      borderRadius="3xl"
      bg={bgColor}
      p={8}
      boxShadow="sm"
    >
      <Box spacing={6}>
        {satisfactionData.map((item) => (
          <Box key={item.level} mb={4}>
            <Flex justify="space-between" mb={1}>
              <Text fontSize="lg" color={subtitleColor}>
                {item.level}
              </Text>
              <Text fontWeight="semibold" color={textColor}>
                {item.count}
              </Text>
            </Flex>
            <Progress
              value={item.count}
              colorScheme={item.color}
              borderRadius="full"
              size="sm"
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
