import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./Redux/store";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ReduxProvider store={store}>
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </ReduxProvider>
);
