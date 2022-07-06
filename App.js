import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Count from './components/Count'
import InputText from './components/InputText'
import UserNameandPassWord from './components/UserNameandPassWord'

const App = () => {
  return (
    <View style={styles.container}>
      <UserNameandPassWord/>
      {/* <InputText/> */}
      {/* <Count/>
      <LotsOfGreeting/> */}
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  containar :{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})