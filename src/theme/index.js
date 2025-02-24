import { Text, Heading, Button, Input, Table } from "./components";
import { color, shadows } from "./foundations";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  breakpoints: {
    sm: "550px",
    md: "1050px",
    lg: "1440px",
  },
  color,
  shadows,
  components: {
    Text,
    Heading,
    Button,
    Input,
    Table,
  },
});

export default theme;
