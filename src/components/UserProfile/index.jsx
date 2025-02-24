import { Text, Flex, Image } from "@chakra-ui/react";
import React from "react";

export default function UserProfile({
    userImage = "images/img_avatar.png",
    userName = "David Pinnacle",
    userMessage = "The new tax regulations for real estate investments are now live. Let's review how this impacts our projects.",
    notificationBadge = "12",
    ...props
}) {
    return (
        <Flex
            {...props}
            gap="10px"
            flex={1}
            justifyContent="center"
            alignItems="center"
            alignSelf="stretch"
            p="6px"
            borderRadius="8px"
            flexDirection={{ base: "column", sm: "row" }}
        >
            <Flex gap="12px" flex={1} justifyContent="center" alignItems="center" alignSelf={{ base: "stretch", sm: "auto" }}>
                <Image src={userImage} alt="David Pinnacle" h="40px" fit="cover" borderRadius="20px" />
                <Flex gap="4px" flex={1} flexDirection="column" alignItems="flex-start" justifyContent="center">
                    <Text color="gray.900" fontWeight={500}>
                        {userName}
                    </Text>
                    <Text color="gray.600_01">{userMessage}</Text>
                </Flex>
            </Flex>
            <Text
                color="white.a700"
                fontSize="12px"
                fontWeight={500}
                borderColor="red.400"
                borderWidth="1px"
                borderStyle="solid"
                bg="red.400"
                justifyContent="center"
                display="flex"
                alignItems="center"
                px="6px"
                py="2px"
                borderRadius="10px"
            >
                {notificationBadge}
            </Text>
        </Flex>
    );
}