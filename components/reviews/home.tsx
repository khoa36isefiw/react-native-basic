import React from "react";
import { Button, Text, View } from "react-native";

function HomeScreen(props: any) {
  const { navigation } = props;
  return (
    <View>
      <Text>Kei Home Screen</Text>
      {/* navigate to detail page */}
      <Button
        title="View Detail"
        onPress={() => navigation.navigate("review-detail")}
      />
    </View>
  );
}

export default HomeScreen;
