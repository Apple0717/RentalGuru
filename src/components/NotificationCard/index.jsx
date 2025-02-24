import { Avatar, Badge, Box, Button, Card, Flex, Text } from "@chakra-ui/react";
import React from "react";
import {
  LuClock,
  LuHammer,
  LuInfo,
  LuMessageCircle,
  LuTags,
  LuWallet,
} from "react-icons/lu";

export default function NotificationCard(props) {
  console.log(props.data);
  const TaskOverdue = () => (
    <Box>
      <Flex justifyContent="space-between" fontSize="lg">
        <Flex color="red.800" fontWeight="bold">
          <LuInfo /> &nbsp; Task Overdue
        </Flex>
        <Button variant="link">Details</Button>
      </Flex>
      <Box borderLeft="4px" borderColor="gray.200" mt="3" pl="2" py="1">
        <Flex fontSize="md" fontWeight="bold">
          {props.data.description}
        </Flex>
        <Flex justify="space-between" py="4">
          <Flex alignItems="center">
            <Flex pr="2">
              <Avatar size="sm" />
            </Flex>
            <Flex
              px="2"
              color="gray.500"
              borderLeft="2px"
              borderColor="gray.200"
            >
              {props.data.attached}
              <LuTags />
            </Flex>
            <Flex
              px="2"
              color="gray.500"
              borderLeft="2px"
              borderColor="gray.200"
            >
              {props.data.comments}
              <LuMessageCircle />
            </Flex>
          </Flex>
          <Flex alignItems="center">
            <Badge colorScheme="red" rounded="2xl" p="1.5" display="flex">
              <LuClock />
              {props.data.due}
            </Badge>
          </Flex>
        </Flex>
        <Flex color="gray.500">
          <Text>2 mins ago</Text>
        </Flex>
      </Box>
    </Box>
  );

  const PaymentReminder = () => (
    <Box>
      <Flex justifyContent="space-between">
        <Flex color="green.700" fontWeight="bold" fontSize="lg">
          <LuWallet /> &nbsp; Payment Reminder
        </Flex>
        <Button variant="link">Details</Button>
      </Flex>
      <Box borderLeft="4px" borderColor="gray.200" mt="3" pl="2" py="1">
        <Flex>
          <Flex alignItems="center">
            <Flex>
              <Avatar size="sm" />
            </Flex>
            <Flex px="2" fontSize="md" fontWeight="bold" display="inline">
              <Text>{props.data.assignedName}</Text>
              <Text color="gray.500" fontWeight="normal">
                completed task
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex>
          <Box
            p="4"
            border="1px"
            rounded="2xl"
            my="2"
            borderColor="gray.200"
            backgroundColor="gray.50"
          >
            <Flex fontWeight="bold">{props.data.description}</Flex>
            <Flex pt="2">
              <Badge
                bgColor="orange"
                color="white"
                fontSize="md"
                rounded="2xl"
                p="1.5"
                px="3"
              >
                Maintenance
              </Badge>
            </Flex>
          </Box>
        </Flex>
        <Flex color="gray.500">
          <Text>2 mins ago</Text>
        </Flex>
      </Box>
    </Box>
  );

  const Maintenance = () => (
    <Box>
      <Flex justifyContent="space-between">
        <Flex color="orange.500" fontWeight="bold" fontSize="lg">
          <LuHammer /> &nbsp; Payment Reminder
        </Flex>
        <Button variant="link">Details</Button>
      </Flex>
      <Box borderLeft="4px" borderColor="gray.200" mt="3" pl="2" py="1">
        <Flex>
          <Flex alignItems="center">
            <Flex>
              <Avatar size="sm" />
            </Flex>
            <Flex px="2" fontSize="md" fontWeight="bold" display="inline">
              <Text>{props.data.assignedName}</Text>
              <Text color="gray.500" fontWeight="normal">
                forwarded a maintenance request
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex>
          <Box
            p="4"
            border="1px"
            rounded="2xl"
            my="2"
            borderColor="gray.200"
            backgroundColor="gray.50"
          >
            <Flex fontWeight="bold">{props.data.description}</Flex>
          </Box>
        </Flex>
        <Flex color="gray.500">
          <Text>2 mins ago</Text>
        </Flex>
      </Box>
    </Box>
  );

  return (
    <Card
      borderRadius="2xl"
      border="1px"
      borderColor="gray.200"
      padding="16px"
      boxShadow="lg"
      my="3"
    >
      {props.data.type === "taskoverdue" ? (
        <TaskOverdue />
      ) : props.data.type === "maintenance" ? (
        <Maintenance />
      ) : (
        <PaymentReminder />
      )}
    </Card>
  );
}
