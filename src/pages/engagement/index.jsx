import {
  Box,
  Flex,
  Heading,
  Tabs,
  TabList,
  Tab,
  Text,
  IconButton,
  Button,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import KanbanBoard from "components/KanbanBoard";
import NotificationBar from "components/NotificationBar";
import React from "react";
import { LuCalendar, LuFilter, LuList, LuPlus, LuSearch } from "react-icons/lu";

export default function Engagement() {
  return (
    <Box w="100%">
      <Grid templateColumns="repeat(4, 1fr)" gap="6">
        <GridItem colSpan={3} p="20px">
          <Heading size="xl" as="span">
            Engagement Page
          </Heading>
          <Text mt="3" fontSize="16px">
            Manage your assign your task here.
          </Text>
          <Flex pt={6} pb={6} alignItems="center" gap="12">
            <Tabs defaultIndex={0} variant="line">
              <TabList>
                <Tab>Tasks</Tab>
                <Tab>Long Task</Tab>
                <Tab>Maintenance</Tab>
              </TabList>
            </Tabs>
            <Tabs defaultIndex={0} variant="soft-rounded">
              <TabList>
                <Tab>
                  <LuList />
                </Tab>
                <Tab>
                  <LuCalendar />
                </Tab>
              </TabList>
            </Tabs>
            <IconButton aria-label="Search database">
              <LuSearch />
            </IconButton>
            <Button colorPalette="teal" variant="solid">
              <LuFilter /> Filter
            </Button>
            <Button
              colorPalette="teal"
              variant="solid"
              color="white"
              backgroundColor="#6CA700"
            >
              <LuPlus /> Add New Task
            </Button>
          </Flex>
          <Flex gap="4" w="100%">
            <KanbanBoard />
          </Flex>
        </GridItem>
        <GridItem colSpan={1}>
          <NotificationBar />
        </GridItem>
      </Grid>
    </Box>
  );
}
