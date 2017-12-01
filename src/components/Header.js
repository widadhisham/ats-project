import React from "react";
import { Header } from "react-native-elements";

const PageHeader = ({}) => (
  <Header
    leftComponent={{ icon: "menu", color: "#fff" }}
    rightComponent={{ icon: "home", color: "#fff" }}
  />
);

export default PageHeader;
