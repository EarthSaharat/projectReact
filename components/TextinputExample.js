import React from "react";
import { View, TextInput,Button } from "react-native";

const TextInputExple = () => {
  return (
    <View style={{ padding: 50 }}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="Course Goal"
          style={{
            width: "80%",
            borderColor: "black",
            borderWidth: 1,
            padding: 10,
          }}
        />
        <Button title='ADD'/>
      </View>
    </View>
  );
};

export default TextInputExple;
