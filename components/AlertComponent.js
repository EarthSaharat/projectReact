import { StyleSheet, Text, View ,Button, Alert} from "react-native";
import React from "react";

const AlertComponent = () => {
  const simpleAlertHanler = () => {
    alert('Hello I am simple alert from ')
     }
   const twoOptionAlertHanler = () => {
        //use Alert from React Native
        Alert.alert(
            //title
            'Hello',
            //Button
            'I am two option alert from React Native',
            [
                {
                    text: 'Yes',
                    onPress: () => alert('Yes Pressed')
                },
                {
                    text: 'No',
                    onPress: () => alert('No Pressed')
                }

            ],
            //clicking out side of alert will
            {cancelable:false}
        )}
   

  return (
    <View style={styles.container}>
      <Button title="Simple Alert" 
      onPress={simpleAlertHanler} 
      />
      <Button title="Alert with Two Options" 
      onPress={twoOptionAlertHanler} 
      />
    </View>
  );
  };

export default AlertComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
});
