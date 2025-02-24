import { Box, Text, Link, Flex, useColorMode } from "@chakra-ui/react";
import React from "react";

export default function MegaMenu1() {
  const { colorMode } = useColorMode();

  return (
    <Box
      position="absolute"
      top="auto"
      minW="200px"
      pt="12px"
      zIndex={99}
      bg='white.a700'
    >
      <Box
        bg={colorMode === 'dark' ? 'gray.700' : 'white'}
        boxShadow="0px 4px 12px rgba(0, 0, 0, 0.3)"
        w="100%"
        p="24px"
        borderRadius="8px"
      >
        <Flex gap="30px">
          <Flex gap="16px" flexDirection="column" alignItems="flex-start">
            <Text
              color="black.900_02"
              fontSize={{ base: "15px", sm: "18px" }}
              fontWeight={700}
            >
              Title 1
            </Text>
            <Flex gap="12px" flexDirection="column" alignItems="flex-start">
              <Link href="#" fontSize={{ base: "13px", sm: "medium" }}>
                <Text color="black.600" fontSize="16px" fontWeight={400}>
                  Menu 1
                </Text>
              </Link>
              <Link
                href="#"
                alignSelf="center"
                fontSize={{ base: "13px", sm: "medium" }}
              >
                <Text color="black.600" fontSize="16px" fontWeight={400}>
                  Menu 2
                </Text>
              </Link>
              <Link
                href="#"
                alignSelf="center"
                fontSize={{ base: "13px", sm: "medium" }}
              >
                <Text color="black.600" fontSize="16px" fontWeight={400}>
                  Menu 3
                </Text>
              </Link>
              <Link
                href="#"
                alignSelf="center"
                fontSize={{ base: "13px", sm: "medium" }}
              >
                <Text color="black.600" fontSize="16px" fontWeight={400}>
                  Menu 4
                </Text>
              </Link>
              <Link
                href="#"
                alignSelf="center"
                fontSize={{ base: "13px", sm: "medium" }}
              >
                <Text color="black.600" fontSize="16px" fontWeight={400}>
                  Menu 5
                </Text>
              </Link>
            </Flex>
          </Flex>
          <Flex gap="16px" flexDirection="column" alignItems="flex-start">
            <Text
              color="black.900_02"
              fontSize={{ base: "15px", sm: "18px" }}
              fontWeight={700}
            >
              Title 2
            </Text>
            <Flex gap="12px" flexDirection="column" alignItems="flex-start">
              <Link href="#" fontSize={{ base: "13px", sm: "medium" }}>
                <Text color="black.600" fontSize="16px" fontWeight={400}>
                  Menu 1
                </Text>
              </Link>
              <Text
                color="black.600"
                fontSize={{ base: "13px", sm: "16px" }}
                fontWeight={400}
                alignSelf="center"
              >
                Menu 2
              </Text>
              <Text
                color="black.600"
                fontSize={{ base: "13px", sm: "16px" }}
                fontWeight={400}
                alignSelf="center"
              >
                Menu 3
              </Text>
              <Text
                color="black.600"
                fontSize={{ base: "13px", sm: "16px" }}
                fontWeight={400}
                alignSelf="center"
              >
                Menu 4
              </Text>
              <Link
                href="#"
                alignSelf="center"
                fontSize={{ base: "13px", sm: "medium" }}
              >
                <Text color="black.600" fontSize="16px" fontWeight={400}>
                  Menu 5
                </Text>
              </Link>
            </Flex>
          </Flex>
          <Flex gap="16px" flexDirection="column" alignItems="flex-start">
            <Text
              color="black.900_02"
              fontSize={{ base: "15px", sm: "18px" }}
              fontWeight={700}
            >
              Title 3
            </Text>
            <Flex gap="12px" flexDirection="column" alignItems="flex-start">
              <Link href="#" fontSize={{ base: "13px", sm: "medium" }}>
                <Text color="black.600" fontSize="16px" fontWeight={400}>
                  Menu 1
                </Text>
              </Link>
              <Link
                href="#"
                alignSelf="center"
                fontSize={{ base: "13px", sm: "medium" }}
              >
                <Text color="black.600" fontSize="16px" fontWeight={400}>
                  Menu 2
                </Text>
              </Link>
              <Link
                href="#"
                alignSelf="center"
                fontSize={{ base: "13px", sm: "medium" }}
              >
                <Text color="black.600" fontSize="16px" fontWeight={400}>
                  Menu 3
                </Text>
              </Link>
              <Link
                href="#"
                alignSelf="center"
                fontSize={{ base: "13px", sm: "medium" }}
              >
                <Text color="black.600" fontSize="16px" fontWeight={400}>
                  Menu 4
                </Text>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
