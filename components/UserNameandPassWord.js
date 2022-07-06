import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";

const UserNameandPassWord = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");

  const showData = () => {
    alert("email: "+(userEmail)+"\npassword: "+(userPass));
  };

  return (
    <View>
      <TextInput
        value={userEmail}
        onChangeText={(userEmail) => {
          setUserEmail(userEmail);
        }}
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#7a42f4"
      />

      <TextInput
        value={userPass}
        onChangeText={(userPass) => {
          setUserPass(userPass);
        }}
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#7a42f4"
      />
      <Button onPress={showData} title="Sunmit" 
      style={styles.submitButton}/>
    </View>
  )
}

export default UserNameandPassWord;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: "white",
  },
});
