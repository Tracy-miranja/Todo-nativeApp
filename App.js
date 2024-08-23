import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  TouchableOpacity,
  TextInput,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
} from "react-native";
import { IconButton } from "react-native-paper";
import LandingPage from "./src/components/landingPage";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editedTodo, setEditedTodo] = useState(null);

  const handleTodo = () => {
    if (todo === "") {
      return;
    }
    setTodoList([...todoList, { id: Date.now().toString(), title: todo }]);
    setTodo("");
  };

  const deleteTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  const handleEditTodo = (todo) => {
    setEditedTodo(todo); // Set the entire object, not an array
    setTodo(todo.title);
  };

  const handleUpdateTodo = () => {
    const updatedTodoList = todoList.map((item) => {
      if (item.id === editedTodo.id) {
        return { ...item, title: todo };
      }
      return item;
    });
    setTodoList(updatedTodoList);
    setEditedTodo(null);
    setTodo("");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="auto" />
      <View
        style={{
          backgroundColor: "#bf0fff",
          height: 70,
          width: "100%",
          color: "#fff",
        }}
      ></View>
      <View style={{ marginHorizontal: 16 }}>
        <TextInput
          style={{
            borderWidth: 2,
            borderColor: "#00ff87",
            marginTop: 20,
            borderRadius: 5,
            paddingVertical: 1,
            paddingHorizontal: 16,
          }}
          value={todo}
          onChangeText={(userText) => setTodo(userText)}
          placeholder="Add a task"
        />
        {editedTodo ? (
          <TouchableOpacity
            style={{
              backgroundColor: "#000",
              borderRadius: 5,
              padding: 2,
              marginTop: 15,
              alignItems: "center",
              marginVertical: 34,
            }}
            onPress={() => handleUpdateTodo()}
          >
            <Text style={{ color: "#fff", fontWeight: "bold" }}>Save</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              backgroundColor: "#000",
              borderRadius: 5,
              padding: 2,
              marginTop: 15,
              alignItems: "center",
              marginVertical: 34,
            }}
            onPress={() => handleTodo()}
          >
            <Text style={{ color: "#fff", fontWeight: "bold" }}>
              Add to List
            </Text>
          </TouchableOpacity>
        )}
        {todoList.map((item) => (
          <View
            key={item.id}
            style={{
              backgroundColor: "#60efff",
              borderRadius: 5,
              paddingVertical: 6,
              paddingHorizontal: 6,
              marginTop: 5,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 2,
            }}
          >
            <Text
              style={{
                color: "#000",
                fontSize: 14,
                fontWeight: "800",
                flex: 1,
              }}
            >
              {item.title}
            </Text>
            <IconButton icon="pencil" onPress={() => handleEditTodo(item)} />
            <IconButton icon="trash-can" onPress={() => deleteTodo(item.id)} />
          </View>
        ))}
        {todoList.length <= 0 && <LandingPage />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
