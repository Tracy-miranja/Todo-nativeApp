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

  const handleTodo = () => {
    setTodoList([...todoList, { id: Date.now().toString(), title: todo }]);
    setTodo("");
  };

  const deleteTodo = (id) => {
    const updateTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updateTodoList);
  };
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "#000", height: 10, width: "screen" }}>
        <Text>Hello</Text>
      </View>
      <View style={{ marginHorizontal: 16 }}>
        <TextInput
          style={{
            borderWidth: 2,
            borderColor: "#00ff87",
            marginTop: 60,
            borderRadius: 5,
            paddingVertical: 1,
            paddingHorizontal: 16,
          }}
          value={todo}
          onChangeText={(userText) => setTodo(userText)}
          placeholder="Add a task"
        />
        <TouchableOpacity
          style={{
            backgroundColor: "#000",
            borderRadius: 20,
            padding: 2,
            marginTop: 5,
            alignItems: "center",
            marginVertical: 34, // alignText should be alignItems
          }}
          onPress={() => handleTodo()}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>
            Add to List{" "}
          </Text>
        </TouchableOpacity>
        {/* render Todo list */}
        {/* <FlatList data={} renderItem={} keyExtractor={item => item.id} /> */}
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

            <Text>
              <IconButton icon="pencil" />
              <IconButton
                icon="trash-can"
                onPress={() => deleteTodo(item.id)}
              />
            </Text>
          </View>
        ))}
        {todoList.length <= 0 && <LandingPage />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
