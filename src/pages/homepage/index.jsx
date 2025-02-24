import { Helmet } from "react-helmet";
import AddPropertyRow from "../../components/AddPropertyRow";
import { DatePicker } from "../../components/DatePicker";
import UserStatsRow from "../../components/TenantSatisfaction";
import DashboardOverviewSection from "./DashboardOverviewSection";
import DashboardSection from "./DashboardSection";
import TasksManagementSection from "./TasksManagementSection";
import UnitManagementSection from "./UnitManagementSection";
import {
  Image,
  Box,
  Flex,
  Heading,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@chakra-ui/react";
import React, { Suspense, useRef } from "react";
import { Doughnut, Line, responsive } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import Utils from "../../utils/Utils";
import MaintenanceRequests from "components/MaintenanceRequests";

Chart.register(...registerables);

const propertyActionsList = [
  {
    buildingImage: "images/img_building_02.png",
    propertyTitle: "Add Property",
  },
  { buildingImage: "images/img_door_02.png", propertyTitle: "Add Unit" },
  { buildingImage: "images/img_money_01.png", propertyTitle: "View Payment" },
  {
    buildingImage: "images/img_building_02.png",
    propertyTitle: "Add Property",
  },
  { buildingImage: "images/img_task_add_01.png", propertyTitle: "Add Tasks" },
];

export default function Homepage() {
  const chartRef = useRef(null);

  const DATA_COUNT = 5;
  const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

  const LineChart = () => {
    const data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          data: [1000, 1200, 1800, 1400, 3000, 3000, 3000, 3000, 3000, 3200, 7000, 7500],
          borderColor: "#80E1D1",
          backgroundColor: "#80E1D1",
          pointBackgroundColor: "#00A76F",
          pointBorderColor: "#fff",
          pointBorderWidth: 2,
          pointRadius: 4,
          tension: 0.4,
        },
      ],
    }

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 8000,
          grid: {
            color: "#f0f0f0",
          },
          ticks: {
            stepSize: 1000,
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    }

    return <Line options={options} data={data} />;
  };

  const data = {
    labels: ["Occupied", "Repairing", "New", "Closed", "Available"],
    datasets: [
      {
        label: "Dataset 1",
        data: Utils.numbers(NUMBER_CFG),
        backgroundColor: Object.values(Utils.CHART_COLORS),
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Dashboard Home - Manage Your Properties and Tasks</title>
        <meta
          name="description"
          content="Welcome to your Dashboard Home. Manage properties, tasks, and view analytics like occupancy and rent collection rates. Engage with the community and access resources for property management."
        />
      </Helmet>
      <Box bg="gray.50_01" w="100%">
        <Box>
          <Box
            h={{ md: "2442px", base: "auto" }}
            position="relative"
            alignContent="center"
          >
            <Flex flex={1} alignItems="flex-start">
              <Flex
                gap="20px"
                bg="white.a700"
                flex={1}
                flexDirection="column"
                py={{ base: "20px", sm: "32px" }}
              >
                <DashboardOverviewSection />
                <Flex
                  gap="20px"
                  flexDirection="column"
                  mx={{ md: "32px", base: "0px" }}
                >
                  <Flex
                    gap="20px"
                    flexDirection={{ md: "row", base: "column" }}
                  >
                    <Box
                      flex={1}
                      alignSelf={{ md: "auto", base: "stretch" }}
                      px={{ md: 0, base: "20px" }}
                    >
                      <Flex
                        gap="24px"
                        borderColor="gray.200"
                        borderWidth="1px"
                        borderStyle="solid"
                        bg="white.a700"
                        flexDirection="column"
                        p={{ base: "20px", sm: "22px" }}
                        borderRadius="12px"
                      >
                        <Flex gap="8px" flexDirection="column">
                          <Flex gap="16px">
                            <Flex flex={1} py="6px">
                              <Heading color="gray.900_01" fontSize="18px">
                                Total revenue
                              </Heading>
                            </Flex>
                            <Box
                              color="gray.600_01"
                              fontSize="14px"
                              fontWeight={600}
                              gap="8px"
                              display="flex"
                              borderColor="gray.200"
                              borderWidth="1px"
                              borderStyle="solid"
                              bg="white.a700"
                              w="20x"
                              p="10px"
                              borderRadius="8px"
                            >
                              <DatePicker
                                name="button_one"
                                placeholder={"View Report"}
                              />
                            </Box>
                          </Flex>
                          <Flex justifyContent="center" alignItems="center">
                            <Heading
                              size="headinglg"
                              as="h3"
                              color="gray.900_01"
                              fontSize={30}
                            >
                              $14,843.82
                            </Heading>
                            <Flex alignSelf="flex-end" flex={1} px="16px">
                              <Button
                                size="sm"
                                leftIcon={
                                  <Image
                                    src="images/img_arrowup.svg"
                                    alt="Arrow Up"
                                    h="12px"
                                    w="12px"
                                    fit="contain"
                                    my="2px"
                                  />
                                }
                                color="blue_gray.800"
                                mb="6px"
                                fontWeight={500}
                                borderColor="blue_gray.100_01"
                                borderWidth="1px"
                                borderStyle="solid"
                                backgroundColor="gray.900_01"
                                boxShadow="md"
                                minW="62px"
                                borderRadius="6px"
                                h="24px"
                              >
                                4.2%
                              </Button>
                            </Flex>
                          </Flex>
                        </Flex>
                        <Box base="auto" position="relative" h="255px" w="100% !important">
                          <LineChart />
                        </Box>
                      </Flex>
                    </Box>
                    <Box
                      w={{ md: "32%", base: "100%" }}
                      px={{ md: 0, base: "20px" }}
                    >
                      <Flex
                        gap="24px"
                        borderColor="gray.200"
                        borderWidth="1px"
                        borderStyle="solid"
                        bg="white.A700"
                        flexDirection="column"
                        p={{ base: "20px", sm: "24px" }}
                        borderRadius="8px"
                      >
                        <Flex>
                          <Heading as="h4" fontSize="18px">
                            Quick Links
                          </Heading>
                        </Flex>
                        <Flex gap="12px" flexDirection="column">
                          <Suspense fallback={<div>Loading feed...</div>}>
                            {propertyActionsList.map((d, index) => (
                              <AddPropertyRow {...d} key={"listadd" + index} />
                            ))}
                          </Suspense>
                        </Flex>
                      </Flex>
                    </Box>
                  </Flex>
                  <Flex
                    gap="18px"
                    flexDirection={{ md: "row", base: "column" }}
                  >
                    <Flex
                      gap="18px"
                      flex={1}
                      alignSelf={{ md: "auto", base: "stretch" }}
                      flexDirection={{ md: "row", base: "column" }}
                      px={{ md: 0, base: "20px" }}
                    >
                      <Box w="100%">
                        <Box
                          borderColor="gray.200"
                          borderWidth="1px"
                          borderStyle="solid"
                          bg="white.a700"
                          p={{ base: "20px", sm: "24px" }}
                          borderRadius="8px"
                        >
                          <Flex gap="4px" flexDirection="column">
                            <Flex
                              gap="24px"
                              justifyContent="center"
                              alignItems="center"
                            >
                              <Flex flex={1}>
                                <Heading
                                  as="h5"
                                  fontSize="18px"
                                  alignSelf="flex-end"
                                >
                                  Properties Status
                                </Heading>
                              </Flex>
                              <Button
                                rightIcon={
                                  <Image
                                    src="images/img_linksquare02.svg"
                                    alt="link-square-02"
                                    h="16px"
                                    mb="2px"
                                    w="16px"
                                    fit="contain"
                                  />
                                }
                                color="gray.600_01"
                                fontWeight={600}
                                gap="8px"
                                borderColor="gray.200"
                                borderWidth="1px"
                                borderStyle="solid"
                                minW="94px"
                                borderRadius="8px"
                              >
                                Report
                              </Button>
                            </Flex>
                            <Flex
                              direction="column"
                              alignItems="center"
                              justifyContent="center"
                              margin="auto"
                            >
                              <Doughnut
                                data={data}
                                ref={chartRef}
                                options={{
                                  plugins: { legend: { position: "right" } },
                                }}
                              />
                            </Flex>
                          </Flex>
                        </Box>
                      </Box>
                      <Box w="100%">
                        <Flex
                          gap="24px"
                          borderColor="gray.200"
                          borderWidth="1px"
                          borderStyle="solid"
                          bg="white.a700"
                          flexDirection="column"
                          p={{ base: "20px", sm: "24px" }}
                          borderRadius="8px"
                        >
                          <Flex
                            justifyContent="space-between"
                            alignItems="center"
                            gap="20px"
                          >
                            <Heading as="h6" fontSize="18px">
                              Tenant Satisfaction
                            </Heading>

                            <Button
                              rightIcon={
                                <Image
                                  src="images/img_linksquare02.svg"
                                  alt="link-square-02"
                                  h="16px"
                                  mb="2px"
                                  w="16px"
                                  fit="contain"
                                />
                              }
                              color="gray.600_01"
                              fontWeight={600}
                              gap="8px"
                              borderColor="gray.200"
                              borderWidth="1px"
                              borderStyle="solid"
                              minW="94px"
                              borderRadius="8px"
                            >
                              Report
                            </Button>
                          </Flex>
                          <Flex mb="8px" gap="24px" flexDirection="column">
                            <UserStatsRow />
                          </Flex>
                        </Flex>
                      </Box>
                      <Box w="100%">
                        <Flex
                          justifyContent="center"
                          px={{ md: 0, base: "20px" }}
                        >
                          <Flex
                            gap="24px"
                            borderColor="gray.200"
                            borderWidth="1px"
                            borderStyle="solid"
                            bg="white. a700"
                            W="100%"
                            flexDirection="column"
                            p={{ base: "20px", sm: "24px" }}
                            borderRadius="8px"
                          >
                            <Flex>
                              <Heading as="h6" fontSize="18px" alignSelf="flex-end">
                                Maintenance Requests
                              </Heading>
                            </Flex>
                            <MaintenanceRequests />
                          </Flex>
                        </Flex>
                      </Box>
                    </Flex>
                  </Flex>
                </Flex>
                <UnitManagementSection />
                <DashboardSection />
                <TasksManagementSection />
              </Flex>
            </Flex>
            <Box
              h={{ md: "574px", base: "auto" }}
              flex={1}
              position="absolute"
              alignContent="flex-end"
              bottom="23px"
              right="0px"
              left="0px"
              mx={{ md: "24px", base: "0px" }}
            >
              <Popover closeOnBlur={false}>
                <PopoverTrigger>
                  <Box
                    className="gurulogo_border"
                    bg="light_green.50"
                    W="5%"
                    position="fixed"
                    bottom="7%"
                    left="1%"
                    p="10px"
                    m="auto"
                    borderRadius="36px"
                  >
                    <Image
                      src="images/img_logo_new_colors_54x54.png"
                      alt="Logonewcolors"
                      h={{ md: "54px", base: "auto" }}
                      W="100%"
                      fit="cover"
                    />
                  </Box>
                </PopoverTrigger>
                <PopoverContent>
                  <div
                    style={{
                      width: "100%",
                      height: "500px",
                      overflow: "hidden",
                    }}
                  >
                    <iframe
                      src="https://landbot.online/v3/H-2773369-ULW4JSVR09M5YVDZ/index.html"
                      style={{ width: "100%", height: "100%", border: "none" }}
                      title="Landbot Chatbot"
                    />
                  </div>
                </PopoverContent>
              </Popover>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
