import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

function KanbanCard({ task }) {
  return (
    <Box
      bg="white"
      p={4}
      borderRadius="lg"
      boxShadow="sm"
      borderWidth="1px"
      borderColor="gray.200"
      _hover={{ boxShadow: "md" }}
      transition="all 0.2s"
    >
      <Heading as="h3" size="md" color="gray.800" mb={2}>
        {task.title}
      </Heading>
      <Text fontSize="sm" color="gray.600">
        {task.description}
      </Text>
    </Box>
  );
}

export default KanbanCard;
