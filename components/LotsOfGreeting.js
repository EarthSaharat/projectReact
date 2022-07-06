import { View, Text } from "react-native";
import React from "react";

const Gtreeting = (name,date) => {
  return (
    <view style={{ alignItem: "center" }}>
      <text>Hello {name} {date}</text>
    </view>
  );
};

const LotsOfGreeting = () => {
  return (
    <View style={{ alignItems: "center", top: 50 }}>
      <Gtreeting name="Marry Christmas" date='25-Dec-2022'/>
      <Gtreeting name="Happy New Year" date='1-Jan-2022'/>
      <Gtreeting name="Songkran Festival" date='13-Apr-2022'/>
    </View>
  );
};

export default LotsOfGreeting;
