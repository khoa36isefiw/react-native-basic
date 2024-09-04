import { StyleSheet, Text, View } from "react-native";
const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    // flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
    borderWidth: 1,
    borderColor: "green",
    // flex: 1,
  },
  item1: {
    backgroundColor: "green",
    padding: 30,
    flex: 2,
  },
  item2: {
    backgroundColor: "orange",
    padding: 30,
  },
  item3: {
    backgroundColor: "yellowgreen",
    padding: 30,
    flex: 1,
  },
  item4: {
    backgroundColor: "red",
    padding: 30,
  },
});
function FlexBox() {
  return (
    <View style={styles.container}>
      <View style={styles.item1}>
        <Text>item 1</Text>
      </View>
      <View style={styles.item2}>
        <Text>item 2</Text>
      </View>
      <View style={styles.item3}>
        <Text>item 3</Text>
      </View>
      <View style={styles.item4}>
        <Text>item 4</Text>
      </View>
    </View>
  );
}

export default FlexBox;
