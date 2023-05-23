import React from "react";


import { Provider } from "react-redux";
import { StatusBar } from "react-native";

import store from "./redux/store";
import { Home } from "./components";

export default function App() {
  return (
    <Provider store={store}>
      <Home />
      <StatusBar />
    </Provider>
  );
}
