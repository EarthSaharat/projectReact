import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Logo from "./components/Logo";

const Styles = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title,styles.warning]}>Hello React Native</Text>
      <Logo />
    </View>
  );
};

export default Styles;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignContent: 'center' 
  },
  title:{
    fontSize:20,
  },
    warning:{
      color:'red'
    }
  });
