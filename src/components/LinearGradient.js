import React from "react";
import { LinearGradient } from "expo";
import { View } from "react-native";
const GeneralLinearGradient = ({ children }) => (
  <View
    style={{
      flex: 1,
      backgroundColor: "#179543"
    }}
  >
    {children}
  </View>
);

export default GeneralLinearGradient;
