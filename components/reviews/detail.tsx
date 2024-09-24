import React from "react";
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { OPENSANS_REGULAR } from "../../utils/const";
import {
  NavigationProp,
  useNavigation,
  useRoute,
  RouteProp,
} from "@react-navigation/native";

import startImage from "../../assets/images/star.png";

function DetailScreen() {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const route: RouteProp<RootStackParamList, "review-detail"> = useRoute();

  return (
    <ImageBackground
      source={require("../../assets/images/react-native.png")}
      style={{ flex: 1 }}
    >
      <View>
        <Text style={styles.reviewText}>ID: {route.params?.id}</Text>
        <Text style={styles.reviewText}>Content:{route.params?.title}</Text>
        <Text style={styles.reviewText}>Rating: {route.params?.star}</Text>
        <View style={{ flexDirection: "row", marginRight: 1 }}>
          <Image source={startImage} style={{ height: 50, width: 50 }} />
          <Image source={startImage} style={{ height: 50, width: 50 }} />
          <Image source={startImage} style={{ height: 50, width: 50 }} />
          <Image source={startImage} style={{ height: 50, width: 50 }} />
          <Image source={startImage} style={{ height: 50, width: 50 }} />
        </View>
      </View>
      {/* back to home page */}
      <Button title="Home" onPress={() => navigation.navigate("home")} />
    </ImageBackground>
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
