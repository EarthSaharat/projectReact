import { View, Text } from 'react-native'
import React from 'react'

const People = (props) => {
    return(
        <view style={{ alignItem: "center" }}>
            <text>
                Your First Name is {props.fname} and Last name is {props.lname}
            </text>
        </view>
    )
}

const MyCustomTextWith = () => {
  return (
    <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
      <People fname='Saharat' lname='Milang'/>
      <People fname='Punnama' lname='Masud'/>
    </View>
  )
}

export default MyCustomTextWith