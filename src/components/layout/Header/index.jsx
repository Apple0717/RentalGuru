import MegaMenu1 from "../../MegaMenu1";
import { CloseIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import {
  Box,
  Text,
  Image,
  Link,
  IconButton,
  Flex,
  UnorderedList,
  ListItem,
  InputLeftElement,
  InputGroup,
  InputRightElement,
  Input,
  Container,
  useColorMode,
  useColorModeValue,
  Popover,
  PopoverContent,
  PopoverTrigger, // Import useColorModeValue for conditional styling
} from "@chakra-ui/react";
import NotificationMenu from "../../NotificationMenu";
import React from "react";

export default function Header({ ...props }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [menuOpen1, setMenuOpen1] = React.useState(false);
  const [menuOpen2, setMenuOpen2] = React.useState(false);

  // Define color values based on the current color mode
  const bgColor = useColorModeValue("orange.50", "gray.800"); // Background color
  const borderColor = useColorModeValue("light_green.100_02", "gray.600"); // Border color
  const textColor = useColorModeValue("gray.700", "white"); // Text color
  const iconButtonBg = useColorModeValue("gray.100", "gray.700"); // Icon button background

  return (
    <Flex
      {...props}
      borderColor={borderColor}
      borderBottomWidth="1px"
      borderStyle="solid"
      bg={bgColor}
      alignItems="center"
      position="relative"
      p="18px"
      as="header"
    >
      <Container
        w="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        maxW="1440px"
        gap="20px"
        px="0px"
        mx="auto"
        flexDirection={{ md: "row", base: "column" }}
      >
        <Flex
          w={{ md: "44%", base: "100%" }}
          justifyContent="space-between"
          alignItems="center"
          gap="80px"
          flexDirection={{ base: "column", sm: "row" }}
        >
          <Flex gap="4px" alignItems="center" maxW="221px" w="100%">
            <Link href="#">
              <Image
                src="images/img_logo_1.png"
                alt="Logoone"
                h="46px"
                fit="cover"
              />
            </Link>
            <Image
              src="images/img_settings.svg"
              alt="Settings"
              h="22px"
              fit="contain"
            />
          </Flex>
          <Flex p="1px" w={{ base: "100%", sm: "52%" }} size="xs" maxW="321px" >
            <InputGroup >
              <InputLeftElement h="37px">
                <Image
                  src="images/img_search.svg"
                  alt="search"
                  h="14px"
                  w="16px"
                  fit="contain"
                />
              </InputLeftElement>
              <Input
                colorScheme="white_A700_7a"
                placeholder="Search"
                value={searchBarValue}
                onChange={(e) => setSearchBarValue(e.target.value)}
                color={textColor}
                gap="18px"
                backgroundColor="light_green.200"
                borderWidth="1px"
                borderRadius="8px"
                px="4px"
                h="37px"
              />
              <InputRightElement>
                {searchBarValue?.length > 0 ? (
                  <CloseIcon onClick={() => setSearchBarValue("")} />
                ) : null}
              </InputRightElement>
            </InputGroup>
          </Flex>
        </Flex>
        <Flex>
          <UnorderedList
            styleType="none"
            gap="28px"
            display="flex"
            alignItems="center"
            flexDirection={{ base: "column", sm: "row" }}
            fontSize={14}
          >
            <ListItem>
              <Link href="#">
                <Text color="blue_gray.900" fontWeight={500}>
                  Listings
                </Text>
              </Link>
            </ListItem>
            <ListItem
              onMouseLeave={() => {
                setMenuOpen(false);
              }}
              onMouseEnter={() => {
                setMenuOpen(true);
              }}
            >
              <Flex gap="4px" alignItems="center" cursor="pointer">
                <Text color="blue_gray.900" fontWeight={500}>
                  Features
                </Text>
                <Image
                  src="images/img_arrow_down.svg"
                  alt="Arrowdown"
                  h="20px"
                  w="20px"
                />
              </Flex>
              {menuOpen ? <MegaMenu1 /> : null}
            </ListItem>
            <ListItem
              onMouseLeave={() => {
                setMenuOpen1(false);
              }}
              onMouseEnter={() => {
                setMenuOpen1(true);
              }}
            >
              <Flex gap="4px" alignItems="center" cursor="pointer">
                <Text color="blue_gray.900" fontWeight={500}>
                  Community & News
                </Text>
                <Image
                  src="images/img_arrow_down.svg"
                  alt="Arrowdown"
                  h="20px"
                  w="20px"
                />
              </Flex>
              {menuOpen1 ? <MegaMenu1 /> : null}
            </ListItem>
            <ListItem
              onMouseLeave={() => {
                setMenuOpen2(false);
              }}
              onMouseEnter={() => {
                setMenuOpen2(true);
              }}
            >
              <Flex gap="4px" alignItems="center" cursor="pointer">
                <Text color="blue_gray.900" fontWeight={500}>
                  Resources
                </Text>
                <Image
                  src="images/img_arrow_down.svg"
                  alt="Arrowdown"
                  h="20px"
                  w="20px"
                />
              </Flex>
              {menuOpen2 ? <MegaMenu1 /> : null}
            </ListItem>
          </UnorderedList>
        </Flex>
        <Flex
          gap="16px"
          w={{ md: "13%", base: "100%" }}
          justifyContent="center"
          alignItems="center"
        >
          <Flex p="4px" bg={iconButtonBg} w="100%" borderRadius="20px">
            <Link href="#">
              <IconButton
                size="xs"
                onClick={toggleColorMode}
                icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                aria-label="Toggle Dark Mode"
                boxShadow="sm"
                w="20px"
                borderRadius="10px"
                transform={colorMode === "light" ? "translateX(27px)" : "translateX(3px)"}
                transition=""
              />
            </Link>
          </Flex>
          <Popover closeOnBlur={false}>
            <PopoverTrigger>
              <Box h="36px" w="100%" position="relative" px="4px" maxW="45px">
                <Link href="#">
                  <Image
                    src="images/img_bell_01.svg"
                    alt="Bellone"
                    h="20px"
                    position="absolute"
                    left="0px"
                    bottom="0px"
                    right="0px"
                    top="0px"
                    m="auto"
                  />
                </Link>
                <Text
                  color="white"
                  fontFamily="DM Sans"
                  fontSize="12px"
                  bg="red.500"
                  justifyContent="center"
                  display="flex"
                  alignItems="center"
                  textAlign="center"
                  w="16px"
                  h="16px"
                  position="absolute"
                  right="4px"
                  top="0px"
                  m="auto"
                  borderRadius="8px"
                >
                  7
                </Text>
              </Box>
            </PopoverTrigger>
            <PopoverContent>
              <NotificationMenu />
            </PopoverContent>
          </Popover>

          <Box
            sx={{
              width: "50px",
              height: "50px",
              flex: "none",
              position: "relative",
              borderRadius: "50%",
              backgroundImage: "url(images/img_header_avatar.png)",
              backgroundPosition: "center",
              backgroundSize: "cover", // Ensures the background image covers the entire box
            }}
          ></Box>
        </Flex>
      </Container >
    </Flex >
  );
}
