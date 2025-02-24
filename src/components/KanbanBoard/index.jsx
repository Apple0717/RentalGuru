import React, { useState } from "react";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  IconButton,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Draggable, Droppable, DragDropContext } from "react-beautiful-dnd";
import { LuCalendar, LuFlag, LuList, LuUser } from "react-icons/lu";

const KanbanBoard = () => {
  const New = () => (
    <Flex alignItems="center" justifyContent="space-between">
      <Flex alignItems="center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          fill="none"
        >
          <circle cx="4" cy="4" r="4" fill="#A4CF54" />
        </svg>
        &nbsp;
        <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold">
          New
        </Text>
      </Flex>
      <IconButton variant="link" aria-label="View options">
        <LuList />
      </IconButton>
    </Flex>
  );

  const InProgress = () => (
    <Flex alignItems="center" justifyContent="space-between">
      <Flex alignItems="center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="8"
          fill="none"
        >
          <circle cx="4.66602" cy="4" r="4" fill="#FFC107" />
        </svg>
        &nbsp;
        <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold">
          In Progress
        </Text>
      </Flex>
      <IconButton variant="link" aria-label="View options">
        <LuList />
      </IconButton>
    </Flex>
  );

  const Resolved = () => (
    <Flex alignItems="center" justifyContent="space-between">
      <Flex alignItems="center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="8"
          fill="none"
        >
          <circle cx="4.33398" cy="4" r="4" fill="#057A55" />
        </svg>
        &nbsp;
        <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold">
          Resolved
        </Text>
      </Flex>
      <IconButton variant="link" aria-label="View options">
        <LuList />
      </IconButton>
    </Flex>
  );

  const columnTitles = {
    todo: <New />,
    inProgress: <InProgress />,
    done: <Resolved />,
  };

  const initialTasks = {
    todo: [
      {
        id: "task-1",
        title: "Inspection HVAC Unit",
        priority: "High",
        assigned: "./assigned.png",
        due: "Jan 24",
      },
      {
        id: "task-2",
        title: "Inspection HVAC Unit",
        priority: "High",
        assigned: "./assigned.png",
        due: "Jan 24",
      },
      {
        id: "task-3",
        title: "Inspection HVAC Unit",
        priority: "High",
        assigned: "./assigned.png",
        due: "Jan 24",
      },
    ],
    inProgress: [
      {
        id: "task-4",
        title: "Inspection HVAC Unit",
        priority: "High",
        assigned: "./assigned.png",
        due: "Jan 24",
      },
    ],
    done: [],
  };

  const [tasks, setTasks] = useState(initialTasks);
  const [newTaskInput, setNewTaskInput] = useState({
    todo: "",
    inProgress: "",
    done: "",
  });

  const handleAddTask = (column) => {
    const newTaskTitle = newTaskInput[column];
    if (!newTaskTitle) return;

    const newTaskObj = {
      id: `task-${Date.now()}`,
      title: newTaskTitle,
      priority: "Medium",
      assigned: "Unassigned",
      due: "No due date",
    };

    setTasks((prev) => ({
      ...prev,
      [column]: [...prev[column], newTaskObj],
    }));

    setNewTaskInput((prev) => ({
      ...prev,
      [column]: "", // Clear the input for the specific column
    }));
  };

  const handleKeyPress = (e, column) => {
    if (e.key === "Enter") {
      handleAddTask(column);
    }
  };

  const handleInputChange = (e, column) => {
    setNewTaskInput((prev) => ({
      ...prev,
      [column]: e.target.value,
    }));
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = tasks[source.droppableId];
      const destColumn = tasks[destination.droppableId];
      const [removed] = sourceColumn.splice(source.index, 1);
      destColumn.splice(destination.index, 0, removed);

      setTasks({
        ...tasks,
        [source.droppableId]: sourceColumn,
        [destination.droppableId]: destColumn,
      });
    } else {
      const column = tasks[source.droppableId];
      const [removed] = column.splice(source.index, 1);
      column.splice(destination.index, 0, removed);

      setTasks({
        ...tasks,
        [source.droppableId]: column,
      });
    }
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Stack direction={{ base: "column", md: "row" }} spacing={4}>
        {Object.keys(tasks).map((column) => (
          <Droppable droppableId={column} key={column}>
            {(provided) => (
              <Box
                ref={provided.innerRef}
                {...provided.droppableProps}
                p={{ base: 2, md: 4 }}
                borderRadius="md"
                borderWidth={1}
                borderColor="gray.200"
                mb={{ base: 4, md: 0 }} // Margin bottom for mobile
              >
                <Text fontSize="xl" mb={4}>
                  {columnTitles[column]}
                </Text>
                <VStack spacing={2}>
                  {tasks[column].map((task, index) => (
                    <Draggable
                      draggableId={task.id}
                      index={index}
                      key={task.id}
                    >
                      {(provided) => (
                        <Box
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          w="100%"
                          p={4}
                          borderRadius="xl"
                          boxShadow="lg"
                          border="1px"
                          borderColor="gray.200"
                        >
                          <Flex justifyContent="space-between">
                            <Text fontSize={{ base: "sm", md: "lg" }}>
                              {task.title}
                            </Text>
                            <IconButton
                              variant="link"
                              aria-label="View task options"
                            >
                              <LuList />
                            </IconButton>
                          </Flex>
                          <Flex mt={3} justifyContent="space-between">
                            <Flex alignItems="center">
                              <LuFlag /> &nbsp; Priority Level:
                            </Flex>
                            <Badge rounded="2xl" p="1" px="2">
                              {task.priority}
                            </Badge>
                          </Flex>
                          <Flex mt={3} justifyContent="space-between">
                            <Flex alignItems="center">
                              <LuUser /> &nbsp; Assigned To:
                            </Flex>
                            <Avatar size="sm" />
                          </Flex>
                          <Flex mt={3} justifyContent="space-between">
                            <Flex alignItems="center">
                              <LuCalendar /> &nbsp; Due Date:
                            </Flex>
                            <Badge rounded="2xl" p="1" px="2">
                              {task.due}
                            </Badge>
                          </Flex>
                          <Divider my="3" />
                          <Flex
                            alignItems="center"
                            justifyContent="space-between"
                          >
                            <Flex>
                              Mark Completed &nbsp; <Checkbox />
                            </Flex>
                            <Button color="#6CA700" variant="link">
                              View Details
                            </Button>
                          </Flex>
                        </Box>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </VStack>
                <Input
                  placeholder="Add a new task"
                  value={newTaskInput[column]}
                  onChange={(e) => handleInputChange(e, column)}
                  onKeyPress={(e) => handleKeyPress(e, column)}
                  mt={4}
                />
              </Box>
            )}
          </Droppable>
        ))}
      </Stack>
    </DragDropContext>
  );
};

export default KanbanBoard;
