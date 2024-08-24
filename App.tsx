import { StyleSheet, Text, View } from "react-native";

export default function App() {
  // return jsx
  return (
    // view ==== div
    // text === text
    <View style={styles.container}>
      {/* css view không ảnh hưởng đến các thẻ con của nó */}
      <View>
        <Text style={styles.header}>View likes DIV</Text>
        <Text style={styles.parents}>
          Parent
          <Text style={styles.child}>child</Text>
        </Text>
      </View>
      <Text
        style={{
          color: "green",
          borderColor: "pink",
          borderWidth: 1,
          padding: 9,
        }}
      >
        Hello world in React Native!
      </Text>
      <Text style={{ color: "blue", fontSize: 32 }}>FontSize!</Text>
      <Text style={styles.styleSheet}>Use StyleSheet</Text>
    </View>
  );
}

// style sheet, ở react native không có css

const styles = StyleSheet.create({
  // css in js
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  styleSheet: {
    color: "yellow",

    padding: 2,
    borderWidth: 9,
    borderColor: "yellowgreen",
  },
  header: {
    fontWeight: "600",
    color: "pink",
  },
  parents: { display: "flex" },
  child: {
    color: "orange",
  },
});
