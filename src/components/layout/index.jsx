import { ChakraProvider, Box, Flex } from "@chakra-ui/react";
import Header from "./Header";
import Sidebar1 from "./Sidebar1";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <ChakraProvider>
      <Box minH="100vh">
        <Header />
        <Flex w="1480px" justifySelf="center">
          <Sidebar1 />
          <Outlet />
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default Layout;
