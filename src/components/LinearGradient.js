import React from "react";
import { LinearGradient } from "expo";

const GeneralLinearGradient = ({ children }) => (
  <LinearGradient
    style={{
      flex: 1
    }}
    start={{ x: 0.0, y: 0.5 }}
    end={{ x: 1.0, y: 0.5 }}
    colors={["#77990d", "#611b00"]}
  >
    {children}
  </LinearGradient>
);

export default GeneralLinearGradient;
