import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  TouchableOpacity,
  TextInput,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ImageBackground,
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
          backgroundColor: "rgba(52, 152, 219, 0.5)",
          height: 70,
          width: "100%",
          color: "#fff",
          alignContent: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 4,
          fontWeight: "bold",
        }}
      >
        <Text style={{ color: "#fff" }}>TO DO LIST</Text>
        <ImageBackground></ImageBackground>
      </View>
      <View style={{ marginHorizontal: 16 }}>
        <TextInput
          style={{
            borderWidth: 2,
            borderColor: "#00ff87",
            marginTop: 20,
            borderRadius: 5,
            paddingVertical: 1,
            paddingHorizontal: 16,
            color: "#000",
            backgroundColor: "#fff",
            shadowColor: "#000",
            shadowOffset: { width: 5, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 4,
            elevation: 5,
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
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 4,
              elevation: 5,
            }}
            onPress={() => handleUpdateTodo()}
          >
            <Text style={{ color: "#fff", fontWeight: "bold" }}>Save</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              backgroundColor: "#103783",
              borderRadius: 20,
              padding: 10,
              marginTop: 15,
              alignItems: "center",
              marginVertical: 34,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 4,
              elevation: 5,
            }}
            onPress={() => handleTodo()}
          >
            <Text style={{ color: "#fff", fontWeight: "bold" }}>Add Task</Text>
          </TouchableOpacity>
        )}
        {todoList.map((item) => (
          <View
            key={item.id}
            style={{
              backgroundColor: "#c11e38",
              borderRadius: 5,
              paddingVertical: 6,
              paddingHorizontal: 6,
              marginTop: 5,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 4,
              elevation: 5,
              color: "#fff",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 14,
                fontWeight: "800",
                flex: 1,
              }}
            >
              {item.title}
            </Text>
            <IconButton
              icon="pencil"
              onPress={() => handleEditTodo(item)}
              iconColor="#fff"
            />
            <IconButton
              icon="trash-can"
              onPress={() => deleteTodo(item.id)}
              iconColor="#fff"
            />
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
    backgroundColor: "#220b34",
  },
});
