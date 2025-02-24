import { Heading, Image, Flex, Text, IconButton } from "@chakra-ui/react";
import React from "react";

export default function PropertyStatistics({
    headingText = "Total Properties",
    propertyCount = "27",
    trendIcon = "images/img_arrow_up_right_01_sharp.svg",
    trendPercentage = "05%",
    ...props
}) {
    return (
        <Flex
            {...props}
            gap="24px"
            borderColor="blue_gray.50"
            borderWidth="1px"
            borderStyle="solid"
            bg="white.a700"
            boxShadow="xs"
            w={{ md: "24%", base: "100%" }}
            justifyContent="center"
            alignItems="flex-start"
            p="20px"
            borderRadius="12px"
        >
            <IconButton
                className="cityone_one_border"
                size="xl"
                variant=""
                icon={<Image src="images/img_city_01.svg" />}
                aria-label="1917:334865-cityone_one"
                bgGradient="linear-gradient(90deg, #77b80019,#4ecdc419)"
                w="38px"
                borderRadius="8px"
            />
            <Flex
                gap="2px"
                alignSelf="center"
                flex={1}
                flexDirection="column"
                alignItems="flex-start"
                justifyContent="center"
            >
                <Text color="blue_gray.700_01" fontWeight={500}>
                    {headingText}
                </Text>
                <Flex alignSelf="stretch" alignItems="center">
                    <Heading as="h4" color="gray.900_03">
                        {propertyCount}
                    </Heading>
                    <Flex flex={1} alignItems="center" px="8px">
                        <Image src={trendIcon} alt="Image" h="20px" p="5px" />
                        <Heading size="headingxs" as="h6" color="teal.400_01" fontSize="14px">
                            {trendPercentage}
                        </Heading>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}