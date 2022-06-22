import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Styles from "./components/Styles";
import StySheet from "./components/StySheet";

const App = () => {
  return (
    <View style={Styles.container}>
      {/* <Text style={[Styles.title,Styles.warning]}>Hello React Native</Text> */}
      <StySheet/>
    </View>
  );
};

export default App;

