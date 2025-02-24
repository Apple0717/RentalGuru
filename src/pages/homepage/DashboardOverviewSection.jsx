import PropertyStatistics from "../../components/PropertyStatistics";
import { Flex, Text, Heading } from "@chakra-ui/react";
import React, { Suspense } from "react";

const propertyOverviewList = [
  {
    headingText: "Total Properties",
    propertyCount: "27",
    trendIcon: "images/img_arrow_up_right_01_sharp.svg",
    trendPercentage: "05%",
  },
  {
    headingText: "Occupancy Rate",
    propertyCount: "85%",
    trendIcon: "images/img_arrow_down_left_01_sharp.svg",
    trendPercentage: "7%",
  },
  {
    headingText: "Rent Collection Rate",
    propertyCount: "90%",
    trendIcon: "images/img_arrow_up_right_01_sharp.svg",
    trendPercentage: "02%",
  },
  {
    headingText: "Maintenance Requests",
    propertyCount: "09",
    trendIcon: "images/img_arrow_down_left_01_sharp.svg",
    trendPercentage: "7%",
  },
];

export default function DashboardOverviewSection() {
  return (
    <>
      {/* dashboard overview section */}
      <Flex gap="18px" flexDirection="column" px={{ base: "20px", sm: "32px" }}>
        <Flex gap="6px" flexDirection="column" alignItems="flex-start">
          <Heading size="xl" as="h1" color="blue_gray.900">
            <Heading size="headingxl" as="span" color="blue_gray.900">
              Good Morning,&nbsp;
            </Heading>
            <Heading
              size="headingxl"
              as="span"
              color="transparent"
              bgGradient="linear-gradient(90deg, #77b800,#4ecdc4)"
              sx={{ "background-clip": "text" }}
            >
              Welcome Amon!
            </Heading>
          </Heading>
          <Text size="texts" color="gray.600_01" fontSize="16px">
            Manage your properties and your tasks here.
          </Text>
        </Flex>
        <Flex gap="20px" flexDirection={{ md: "row", base: "column" }}>
          <Suspense fallback={<div>Loading feed...</div>}>
            {propertyOverviewList.map((d, index) => (
              <PropertyStatistics {...d} key={"content" + index} />
            ))}
          </Suspense>
        </Flex>
      </Flex>
    </>
  );
}
