import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { OPENSANS_REGULAR } from "../../utils/const";
import { NavigationProp, useNavigation } from "@react-navigation/native";

function DetailScreen() {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  return (
    <View>
      <Text style={styles.review}>Detail Screen Google</Text>
      {/* back to home page */}
      <Button title="Home" onPress={() => navigation.navigate("home")} />
    </View>
  );
}

export default DetailScreen;

const styles = StyleSheet.create({
  review: {
    fontSize: 30,
    fontFamily: OPENSANS_REGULAR,
  },
});
