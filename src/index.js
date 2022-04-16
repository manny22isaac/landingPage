import * as React from "react";
import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { ChakraProvider } from "@chakra-ui/react";

import App from "./App";

const rootElement = document.getElementById("root");
render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  rootElement
);