import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import React from "react";

const table1Data = [
  {
    taskTitle: "Inspection HVAC Unit",
    dueDateOne: "2025-05-03",
    priority: "High",
    assignee: "images/img_avatar_36x36.png",
    tableheader: "images/img_link_square_02_blue_gray_100_16x16.svg",
  },
  // Add more tasks as needed...
];

export default function TasksManagementSection() {
  const [searchBarValue16, setSearchBarValue16] = React.useState("");

  return (
    <Box px={{ base: "20px", sm: "32px" }}>
      <Flex
        gap="24px"
        borderColor="gray.200"
        borderWidth="1px"
        borderStyle="solid"
        bg="white.A700"
        flexDirection="column"
        borderRadius="8px"
      >
        <Flex
          gap="24px"
          alignItems="flex-end"
          px={{ base: "20px", sm: "24px" }}
          flexDirection={{ md: "row", base: "column" }}
        >
          <Flex
            mt="24px"
            gap="6px"
            w="100%"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="center"
          >
            <Heading as="h6" fontSize="18px">
              Tasks Management
            </Heading>
            <Text color="gray.600_01">High priority urgent Tasks.</Text>
          </Flex>
          <Flex
            mb="18px"
            gap="16px"
            w="100%"
            justifyContent="center"
            flexDirection={{ base: "column", sm: "row" }}
          >
            <Flex size="xs">
              <InputGroup >
                <InputLeftElement>
                  <Image
                    src="images/img_search_gray_600_01.svg"
                    alt="Search"
                    h="14px"
                    w="16px"
                    fit="contain"
                  />
                </InputLeftElement>
                <Input
                  placeholder="Search"
                  value={searchBarValue16}
                  onChange={(e) => setSearchBarValue16(e.target.value)}
                  color="gray.600_01"
                  fontWeight={500}
                  gap="10px"
                  borderColor="gray.200"
                  borderWidth="1px"
                  flexGrow={1}
                  borderRadius="8px"
                />
                <InputRightElement>
                  {searchBarValue16?.length > 0 ? (
                    <CloseIcon onClick={() => setSearchBarValue16("")} />
                  ) : null}
                </InputRightElement>
              </InputGroup>
            </Flex>
            <Flex size="xs">
              <Button
                rightIcon={
                  <Image
                    src="images/img_linksquare02_blue_gray_700_02.svg"
                    alt="link-square-02"
                    h="16px"
                    mb="2px"
                    w="16px"
                    fit="contain"
                  />
                }
                fontWeight={500}
                gap="10px"
                borderColor="gray.200"
                borderWidth="1px"
                borderStyle="solid"
                minW="168px"
                borderRadius="8px"
              >
                Explore All Tasks
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th textAlign="center">Task Title</Th>
              <Th textAlign="center">Due Date</Th>
              <Th textAlign="center">Priority</Th>
              <Th textAlign="center">Assignee</Th>
              <Th textAlign="center">Link</Th>
            </Tr>
          </Thead>
          <Tbody>
            {table1Data.map((task, index) => (
              <Tr key={index}>
                <Td textAlign="center">
                  <Input
                    placeholder={task.taskTitle}
                    color="blue_gray.700_02"
                    borderBottomWidth="1px"
                    borderColor="gray.200"
                  />
                </Td>
                <Td textAlign="center">
                  <Input
                    placeholder={task.dueDateOne}
                    type="text"
                    color="blue_gray.700_02"
                    borderBottomWidth="1px"
                    borderColor="gray.200"
                  />
                </Td>
                <Td textAlign="center">
                  <Input
                    placeholder={task.priority}
                    color="red.400"
                    fontWeight={500}
                    borderBottomWidth="1px"
                    borderColor="gray.200"
                  />
                </Td>
                <Td textAlign="center">
                  <Flex alignItems="center" justifyContent="center">
                    <Image
                      src={task.assignee}
                      alt="avatar"
                      h="36px"
                      fit="cover"
                      borderRadius="18px"
                    />
                  </Flex>
                </Td>
                <Td textAlign="center">
                  <Flex justifyContent="center">
                    <Image src={task.tableheader} alt="link" h="16px" />
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Flex>
    </Box>
  );
}
