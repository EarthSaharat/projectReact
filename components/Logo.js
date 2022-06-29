import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const Logo = () => {
  const textLogo = "Thai-Nichi";
  const isTH = true
  return (
    <View>
      <Text style={styles.TextLogo}>TNI</Text>
      <Text>{textLogo}</Text>
      {/* {
        isTH && <Text>ภาษาไทย</Text>
      } */}
      {
        isTH
        ?(<text>ภาษาไทย</text>)
        :(<text>ภาษาอังกฤษ</text>)
      }
    </View>
  )
}
const styles = StyleSheet.create({
  TextLogo:{
      color:"red",
      fontSize:40
  }
})
export default Logo

