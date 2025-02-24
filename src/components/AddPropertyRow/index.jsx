import { Image, Heading, Flex } from "@chakra-ui/react";
import React from "react";

export default function AddPropertyRow({
    buildingImage = "images/img_building_02.png",
    propertyTitle = "Add Property",
    ...props
}) {
    return (
        <Flex
            {...props}
            borderColor="gray.200"
            borderWidth="1px"
            borderStyle="solid"
            bg="white.a700"
            flex={1}
            justifyContent="center"
            alignItems="center"
            alignSelf="stretch"
            p="14px"
            borderRadius="8px"
        >
            <Flex gap="9px" flex={1} alignItems="center">
                <Image src={buildingImage} alt="Add Property" h="24px" fit="cover" />
                <Heading
                    size="headings"
                    as="h6"
                    color="blue_gray.700_02"
                    fontWeight={600}
                    alignSelf="flex-end"
                >
                    {propertyTitle}
                </Heading>
            </Flex>
            <Image
                src="images/img_link_square_02_blue_gray_100.svg"
                alt="Add Property"
                h="20px"
            />
        </Flex>
    );
}