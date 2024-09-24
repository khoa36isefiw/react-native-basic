import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AppHeader from "../navigation/app.header";

// dinh nghia 1 review co gi?
// what is the defination of review
interface IReview {
  id: number;
  title: string;
  star: number;
}

function HomeScreen(props: any) {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const [reviews, setReviews] = useState<IReview[]>([
    {
      id: 1,
      title: "React Native",
      star: 5,
    },
    {
      id: 2,
      title: "Dev lord",
      star: 2,
    },
  ]);
  return (
    <View>
      <Text style={{ fontSize: 24 }}>Review List:</Text>

      {/* navigate to detail page */}
      <FlatList
        data={reviews}
        keyExtractor={(item) => item.id + ""}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              // passing data
              onPress={() => navigation.navigate("review-detail", item)}
            >
              <View style={styles.reviewItem}>
                <Text>{item.title}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  reviewItem: {
    padding: 15,
    backgroundColor: "#ccc",
    margin: 15,
  },
});
