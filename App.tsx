import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  // return jsx
  // hooks in react native, and use typescript

  // array
  const [students, setStudents] = useState([
    { id: 1, name: "Kei1", age: 18 },
    { id: 2, name: "Kei2", age: 19 },
    { id: 3, name: "Kei3", age: 20 },
    { id: 4, name: "Kei4", age: 21 },
    { id: 5, name: "Kei5", age: 22 },
    { id: 6, name: "Kei6", age: 23 },
    { id: 7, name: "Kei7", age: 24 },
    { id: 8, name: "Kei8", age: 18 },
    { id: 9, name: "Kei9", age: 18 },
    { id: 10, name: "Kei10", age: 18 },
    { id: 11, name: "Kei11", age: 18 },
  ]);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 16 }}>Kei is learning react native</Text>
      {/* marginVertical: marginTop and marginBottom */}
      <FlatList
        keyExtractor={(item) => item.id + ""}
        data={students}
        // return an object containing the index and an object item containing the data
        renderItem={(data) => {
          // console.log("data: ", data);
          // so to get the daat, we need use: data.item.key
          return (
            <View
              style={{
                padding: 15,
                backgroundColor: "pink",
                marginBottom: 30,
                marginHorizontal: 30,
              }}
            >
              <Text>
                {data.item.id}. {data.item.name} - {data.item.age}
              </Text>
            </View>
          );
        }}
      />
      {/* <ScrollView>
        {students.map((student) => {
          return (
            <View
              style={{ padding: 15, backgroundColor: "pink", marginBottom: 30 }}
              key={student.id}
            >
              <Text>
                {student.id}. {student.name}
              </Text>
            </View>
          );
        })}
      </ScrollView> */}
    </View>
  );
}

// style sheet, ở react native không có css

const styles = StyleSheet.create({
  // css in js
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
