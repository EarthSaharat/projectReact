import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

const App = () => {

  const showData=() => {
    alert("Hello") 
  }

  return (
    <View style={styles.container}>
      <Text>Button Example</Text>
      <Button
      
      onPress={showData}
        title='Click Me'
        color='black'
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  }
});
export default App