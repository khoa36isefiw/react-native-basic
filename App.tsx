import { useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Keyboard,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import FlexBox from "./components/flex.box";

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
      return Alert.alert("Lỗi input todo", "Input todo không được để trống", [
        {
          text: "Huỷ",
          onPress: () => {
            console.log("Pressed Cancel");
          },
          style: "cancel",
        },
        {
          text: "Xác nhận",
          onPress: () => {
            console.log("Pressed Xác nhận");
          },
        },
      ]);
    }
    setListTodo([...listTodo, { id: randomInteger(1, 2000), name: todo }]);
    setTodo("");
  };

  const deleteTodo = (id: number) => {
    // lọc ra những todo có id khác với id truyền vào
    // giữ lại những todo có id khác với id truyền vào
    const newTodo = listTodo.filter((item) => item.id !== id);

    // update list to
    setListTodo(newTodo);
  };

  return (
    // hide keyboard if click outside the textinput
    <View>
      <FlexBox />
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
