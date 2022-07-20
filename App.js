import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Count from "./components/Count";
import InputText from "./components/InputText";
import UserNameandPassWord from "./components/UserNameandPassWord";
import UserNamePassword from "./components/UserNamePassword";

const App = () => {
  return (
    <View style={styles.container}>
      <UserNamePassword/>
      {/* <UserNameandPassWord /> */}
      {/* <InputText/> */}
      {/* <Count/>
      <LotsOfGreeting/> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  textInputStyle: {
    width: "100%",
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginTop: 15,
  },
});
