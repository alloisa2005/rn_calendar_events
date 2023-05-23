import React from "react";
import { Provider } from "react-redux";
import { StatusBar } from "react-native";
import { Home } from "./components";

import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <Home />
      <StatusBar />
    </Provider>
  );
}
