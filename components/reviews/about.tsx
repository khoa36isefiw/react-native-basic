import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../utils/const";

const styles = StyleSheet.create({
  about: {
    fontSize: 30,
  },
});

function AboutScreen() {
  return (
    <View>
      <Text style={{ color: "yellowgreen", fontWeight: "bold", fontSize: 24 }}>
        Gộp CSS trong react native thông qua mảng []
      </Text>
      <Text style={[styles.about, globalStyles.globalFont]}>About Screen</Text>
    </View>
  );
}

export default AboutScreen;
