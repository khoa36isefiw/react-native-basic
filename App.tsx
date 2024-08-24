import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  // return jsx
  // hooks in react native, and use typescript
  const [count, setCount] = useState<number>(0);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 16 }}>Kei is learning react native</Text>
      {/* marginVertical: marginTop and marginBottom */}
      <Text style={{ fontSize: 16, marginVertical: 8 }}>Count = {count}</Text>
      <View>
        <Button
          color="brown"
          title="Set Name"
          onPress={() => setCount((prev) => prev + 1)}
        />
      </View>
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
});
