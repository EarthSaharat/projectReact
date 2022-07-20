import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UserNamePassword from "./components/UserNamePassword";
import AlertComponent from "./components/AlertComponent";
import ImageWithTextInput from "./components/ImageWithTextInput";
import Touchable_Example from "./components/Touchable_Example";
import ButtonExample from "./components/ButtonExample";

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Touchable_Example/> */}
      <ButtonExample/>
      {/* <ImageWithTextInput/> */}
      {/* <AlertComponent/> */}
      {/* <UserNamePassword/> */}

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
