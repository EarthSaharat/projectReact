import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const Logo = () => {
  return (
    <View>
      <Text style={styles.textLogo}>TNI</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  textLogo:{
      color:"red",
      fontSize:40
  }
})
export default Logo

