import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Logo from "./components/Logo";
import Styles from "./components/Styles";

const App = () => {
  return (
    <View style={Styles.container}>
      <Text style={[Styles.title,Styles.warning]}>Hello React Native</Text>
    </View>
  );
};

export default App;

