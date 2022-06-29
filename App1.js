import { View, Text, StyleSheet ,Button} from "react-native";
import React from "react";
import Styles from "./components/Styles";
import StySheet from "./components/StySheet";
import TextInputExple from "./components/TextinputExample";
import Cat from "./components/cat";
import Logo from "./components/Logo";

const App = () => {

  const showData=() => {
    alert("Hello Button") 
  }


  return (
    <View >
      {/* <Text style={[Styles.title,Styles.warning]}>Hello React Native</Text>*/}
      {/* <StySheet/>  */}
      <Text>Hello React Native</Text>
      <Logo/>
      <Button
        onPress={showData}
        title='Click Me'
      />
      {/* <TextInputExple/> */}
      {/* <Cat/> */}
      {/* <cafe/>
      <cafe/> */}
    </View>
  );
};

export default App;

