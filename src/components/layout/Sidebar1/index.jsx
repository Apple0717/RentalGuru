import { Image, Box, useColorMode } from "@chakra-ui/react";
import React from "react";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";
import { Link } from "@chakra-ui/react";

export default function Sidebar1({ ...props }) {
  const { colorMode } = useColorMode();

  // Define styles based on the current color mode
  const sidebarBg = colorMode === "dark" ? "gray.800" : "white";
  const menuItemColor = colorMode === "dark" ? "gray.300" : "gray.700";
  const menuItemHoverColor = colorMode === "dark" ? "teal.300" : "#2b9f97";
  const menuItemBgHover = colorMode === "dark" ? "gray.700" : "#f1fffe";

  return (
    <Box
      {...props}
      width="274px !important"
      collapsedWidth="80px !important"
      as={Sidebar}
      pt={{ base: "20px", sm: "32px" }}
      flexDirection="column"
      display="flex"
      borderColor="light_green.100_01"
      borderStyle="solid"
      bg={sidebarBg}
      h="100vh"
      top="0px"
      overflow="auto"
      px="16px"
      sx={{ position: "sticky !important" }}
    >
      <Box
        menuItemStyles={{
          button: {
            padding: "8px",
            gap: "10px",
            backgroundColor: sidebarBg,
            color: menuItemColor,
            fontWeight: 500,
            fontSize: "16px",
            borderRadius: "6px",
            ["&:hover, &.ps-active"]: {
              color: menuItemHoverColor,
              backgroundColor: menuItemBgHover,
            },
          },
        }}
        rootStyles={{ ["&>ul"]: { gap: "4px" } }}
        as={Menu}
        display="flex"
        alignSelf="stretch"
        flexDirection="column"
        w="100%"
      >
        <MenuItem
          icon={
            <Image
              src="images/img_dashboard.svg"
              alt="Dashboard"
              h="20px"
              w="20px"
            />
          }
        >
          Home
        </MenuItem>
        <MenuItem
          icon={
            <Image
              src="images/img_note_03.svg"
              alt="Notethree"
              h="20px"
              w="20px"
            />
          }
        >
          <Link href="/engagement">Engagement</Link>
        </MenuItem>
        <MenuItem
          icon={<Image src="images/img_bot.svg" alt="Bot" h="20px" w="20px" />}
        >
          Guru AI
        </MenuItem>
        <MenuItem
          icon={
            <Image
              src="images/img_building_03.svg"
              alt="Buildingthree"
              h="20px"
              w="20px"
            />
          }
        >
          My Properties{" "}
        </MenuItem>
        <MenuItem
          icon={
            <Image
              src="images/img_power_service.svg"
              alt="Powerservice"
              h="20px"
              w="20px"
            />
          }
        >
          My Services{" "}
        </MenuItem>
        <MenuItem
          icon={
            <Image
              src="images/img_message_01.svg"
              alt="Messageone"
              h="20px"
              w="20px"
            />
          }
        >
          Chats
        </MenuItem>
        <MenuItem
          icon={
            <Image
              src="images/img_thumbs_up.svg"
              alt="Thumbsup"
              h="20px"
              w="20px"
            />
          }
        >
          Payments
        </MenuItem>
        <MenuItem
          icon={
            <Image
              src="images/img_file_01.svg"
              alt="Fileone"
              h="20px"
              w="20px"
            />
          }
        >
          Portfolios
        </MenuItem>
        <MenuItem
          icon={
            <Image
              src="images/img_chart_average.svg"
              alt="Chartaverage"
              h="20px"
              w="20px"
            />
          }
        >
          Analytics
        </MenuItem>
      </Box>
    </Box>
  );
}
