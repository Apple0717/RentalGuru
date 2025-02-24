import {
  Box,
  Divider,
  Flex,
  IconButton,
  List,
  ListItem,
} from "@chakra-ui/react";
import NotificationCard from "components/NotificationCard";
import React from "react";
import {
  LuEllipsis,
  LuLayoutPanelLeft,
  LuListFilter,
  LuSearch,
} from "react-icons/lu";

function NotificationBar() {
  const notifications = [
    {
      key: "0",
      type: "taskoverdue",
      description: "Initial Inspection to Capture the Unit Condition",
      assigned: "assinged.png",
      attached: "02",
      comments: "03",
      due: "Jan 24",
    },
    {
      key: "1",
      type: "paymentreminder",
      description: "Water Dripping from Celling",
      assigned: "assinged.png",
      assignedName: "Logan Kim",
    },
    {
      key: "2",
      type: "maintenance",
      description: "Water Dripping from Celling",
      assigned: "assinged.png",
      assignedName: "Logan Kim",
    },
    {
      key: "3",
      type: "paymentreminder",
      description: "Whitewash Job for Walls",
      assigned: "assinged.png",
      assignedName: "Logan Kim",
    },
  ];

  return (
    <Box
      minH="100vh"
      borderLeft="1px"
      borderColor="gray.200"
      p="0px 20px 40px 20px"
      borderStyle="solid"
    >
      <Flex justifyContent="space-between" pt="8">
        <Flex>
          <IconButton variant="link" fontSize="2xl" color="gray.500">
            <LuLayoutPanelLeft />
          </IconButton>
        </Flex>
        <Flex>
          <Box mr="6">
            <IconButton variant="link" fontSize="2xl" color="gray.500">
              <LuSearch />
            </IconButton>
          </Box>
          <IconButton variant="link" fontSize="2xl" color="gray.500">
            <LuListFilter />
          </IconButton>
        </Flex>
      </Flex>
      <Divider my={5} />
      <Flex
        justify="space-between"
        fontSize="2xl"
        fontWeight="bold"
        alignItems="center"
        py="2"
      >
        Notifications
        <IconButton fontSize="2xl" variant="link">
          <LuEllipsis />
        </IconButton>
      </Flex>
      <List>
        {notifications.map((item, index) => (
          <ListItem key={index}>
            <NotificationCard data={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default NotificationBar;
