import React from "react";
import { Button, Text, View } from "react-native";

function HomeScreen() {
  return (
    <View>
      <Text>Kei Home Screen</Text>
      {/* navigate to detail page */}
      <Button title="View Detail" onPress={() => alert("me!")} />
    </View>
  );
}

export default HomeScreen;
