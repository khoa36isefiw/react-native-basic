import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { OPENSANS_REGULAR } from "../../utils/const";
import {
  NavigationProp,
  useNavigation,
  useRoute,
  RouteProp,
} from "@react-navigation/native";

function DetailScreen() {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const route: RouteProp<RootStackParamList, "review-detail"> = useRoute();

  return (
    <View>
      <View>
        <Text style={styles.reviewText}>ID: {route.params?.id}</Text>
        <Text style={styles.reviewText}>Content:{route.params?.title}</Text>
        <Text style={styles.reviewText}>Rating: {route.params?.star}</Text>
      </View>
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
  reviewText: {
    fontSize: 25,
    fontFamily: OPENSANS_REGULAR,
    padding: 15,
  },
});
