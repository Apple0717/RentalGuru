import { Button, Text, Image, Flex, Heading } from "@chakra-ui/react";
import React from "react";

export default function PropertyDetails({
    mainImage = "images/img_rectangle_3.png",
    price = "$546,999",
    bedroomCount = "4",
    bedroomLabel = "Bedroom",
    bathroomCount = "2",
    bathroomLabel = "Bathroom",
    distance = "800m",
    livingAreaLabel = "Living area",
    address = "61 Street Springfield, IL 62704 USA",
    viewButtonText = "View",
    ...props
}) {
    return (
        <Flex
            {...props}
            gap="16px"
            borderColor="gray.200"
            borderWidth="1px"
            borderStyle="solid"
            bg="white.a700"
            w={{ md: "24%", base: "100%" }}
            flexDirection="column"
            p="16px"
            borderRadius="16px"
        >
            <Flex gap="16px" alignSelf="stretch" flexDirection="column">
                <Image src={mainImage} alt="Image" h="170px" fit="cover" borderRadius="12px" />
                <Flex gap="12px" flexDirection="column" alignItems="flex-start" justifyContent="center">
                    <Heading as="h6" color="black.900_02" fontSize="18px">
                        {price}
                    </Heading>
                    <Flex alignSelf="stretch" justifyContent="space-between" gap="20px">
                        <Flex gap="4px" w="22%" flexDirection="column" alignItems="center" justifyContent="center">
                            <Flex gap="8px" alignSelf="stretch" justifyContent="start" alignItems="center">
                                <Image src="images/img_building.svg" alt="Image" h="20px" />
                                <Text color="gray.900" fontSize="12px" fontWeight={500}>
                                    {bedroomCount}
                                </Text>
                            </Flex>
                            <Text color="blue_gray.300" fontSize="12px" fontWeight={500}>
                                {bedroomLabel}
                            </Text>
                        </Flex>
                        <Flex gap="4px" w="24%" flexDirection="column" alignItems="center" justifyContent="center">
                            <Flex gap="8px" alignSelf="stretch" alignItems="center">
                                <Image src="images/img_device_meeting_room.svg" alt="Image" h="20px" />
                                <Text color="gray.900" fontSize="12px" fontWeight={500}>
                                    {bathroomCount}
                                </Text>
                            </Flex>
                            <Text color="blue_gray.300" fontSize="12px" fontWeight={500}>
                                {bathroomLabel}
                            </Text>
                        </Flex>
                        <Flex gap="4px" w="28%" flexDirection="column" alignItems="center">
                            <Flex gap="8px" alignSelf="stretch" justifyContent="center" alignItems="center">
                                <Image src="images/img_system.svg" alt="800m" h="20px" />
                                <Text color="gray.900" fontSize="12px" fontWeight={500}>
                                    {distance}
                                </Text>
                            </Flex>
                            <Text color="blue_gray.300" fontSize="12px" fontWeight={500}>
                                {livingAreaLabel}
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Flex gap="16px" alignSelf="stretch" justifyContent="center" alignItems="center">
                <Flex gap="8px" flex={1} justifyContent="center" alignItems="center">
                    <Image src="images/img_location.svg" alt="Image" h="20px" />
                    <Text color="gray.600_01" fontSize="12px" w="84%" lineHeight="18px">
                        {address}
                    </Text>
                </Flex>
                <Button colorScheme="light_green_A700" fontWeight={600} minW="62px" borderRadius="8px" backgroundColor="var(--primary-500, #77B800)">
                    {viewButtonText}
                </Button>
            </Flex>
        </Flex>
    );
}