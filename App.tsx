import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  // return jsx
  // hooks in react native, and use typescript
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
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
      {/* TextInput in react native */}
      <View>
        <Text>Name: {name}</Text>
        <TextInput
          // will show the current text is typing
          onChangeText={(value) => setName(value)}
          multiline // like textarea
          autoCapitalize="words" // capitalize
          style={{
            borderWidth: 1,
            borderColor: "brown",
            width: 200,
            padding: 1,
          }}
        />
      </View>

      {/* Age, check number for this TextInput */}
      <View style={{ marginTop: 8 }}>
        <Text>Age: {age}</Text>
        <TextInput
          // get value
          // use: +value --> will convert string to number
          onChangeText={(value) => setAge(+value)}
          keyboardType="numeric" // only show number for typing
          maxLength={2} // only 2 numbers are allowed
          style={{
            borderWidth: 1,
            borderColor: "orange",
            width: 200,
            padding: 2,
          }}
          placeholder="Enter your age..."
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
