import React, { useEffect } from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import theme from "./theme";
import axios from "axios";

function App() {
  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const response = await axios.get('https://rentalfrontend/alerts');
        const alerts = response.data;

        if (Array.isArray(alerts)) {
          alerts.forEach((alert) => {
            toast(alert.message, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
            });
          });
        }
      } catch (error) {
        console.error('Error fetching alerts:', error);
        toast.error('Failed to fetch alerts');
      }
    };

    fetchAlerts();
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes />
      </Router>
      <ToastContainer />
    </ChakraProvider>
  );
}

export default App;
