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

// define kiểu đối tượng
interface ITodo {
  id: number;
  name: string;
}

export default function App() {
  // return jsx
  // hooks in react native, and use typescript
  // input todo
  const [todo, setTodo] = useState("");
  const [listTodo, setListTodo] = useState<ITodo[]>([]);

  // random number
  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleAddTodo = () => {
    if (!todo) {
      // if todo is empty
      return;
    }
    setListTodo([...listTodo, { id: randomInteger(1, 2000), name: todo }]);
    setTodo("");
  };

  return (
    <View style={styles.container}>
      {/* header */}
      <Text style={styles.header}>Todo App</Text>
      {/* marginVertical: marginTop and marginBottom */}
      {/* form */}
      <View>
        <TextInput
          value={todo}
          style={styles.todoInput}
          onChangeText={(value) => setTodo(value)}
        />
        <Button title="Add todo" onPress={handleAddTodo} />
      </View>

      {/* list todo */}
      <View>
        {/* <Text>list todo: {todo}</Text> */}
        <FlatList
          data={listTodo}
          renderItem={(data) => {
            return <Text style={styles.todoItem}>{data.item.name}</Text>;
          }}
          keyExtractor={(item) => item.id + ""}
        />

        {/* <Text>{JSON.stringify(listTodo)}</Text> */}
      </View>
    </View>
  );
}

// style sheet, ở react native không có css

const styles = StyleSheet.create({
  // css in js
  header: {
    fontSize: 24,
    paddingHorizontal: 20,
    backgroundColor: "yellow",
    textAlign: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,

    // alignItems: "center",
    // justifyContent: "center",
  },
  todoInput: {
    borderWidth: 1,
    borderColor: "green",
    padding: 5,
    margin: 15,
  },
  todoItem: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    marginVertical: 20,
    marginHorizontal: 40,
  },
});
