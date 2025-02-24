import React from "react";
import { BellIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  List,
  ListIcon,
  ListItem,
  Divider,
} from "@chakra-ui/react";

export default function NotificationMenu() {
  return (
    <Box
      width="full"
      maxW="md"
      mx="auto"
      bg="white.a700"
      borderRadius="lg"
      boxShadow="lg"
      overflow="hidden"
    >
      <Flex
        backgroundColor="white.a700"
        justifyContent="space-between"
        alignItems="center"
        p={3}
      >
        <h3>Notifications</h3>
        <Button
          variant="link"
          color="#6ca700"
          _hover={{ color: "#6ca700", opacity: 0.9 }}
        >
          Mark as unread
        </Button>
      </Flex>

      <Box p={3}>
        <List spacing={2}>
          <ListItem>
            <ListIcon as={BellIcon} color="gray.900_01" />
            You have been assigned to Review Property Details.
          </ListItem>
          <Divider />
          <ListItem>
            <ListIcon as={BellIcon} color="gray.900_01" />
            Sunset Villas payment is due tomorrow.
          </ListItem>
          <Divider />
          <ListItem>
            <ListIcon as={BellIcon} color="gray.900_01" />
            Riverfront Apartments inspection is overdue.
          </ListItem>
          <Divider />
        </List>
      </Box>

      <Flex justifyContent="center" p={1}>
        <Button
          variant="ghost"
          color="gray.600"
          _hover={{ color: "gray.900" }}
          leftIcon={<ViewIcon boxSize={4} />}
        >
          View all
        </Button>
      </Flex>
    </Box>
  );
}
