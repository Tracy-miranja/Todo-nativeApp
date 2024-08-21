import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  TouchableOpacity,
  TextInput,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { IconButton } from "react-native-paper";

const dummyData = [
  {
    id: "1",
    title: "Practice react native",
    Duration: "3hrs",
  },
  {
    id: "2",
    title: "Go to the gym",
    Duration: "1hr",
  },
  {
    id: "3",
    title: "Take a cold shower",
    Duration: "30min",
  },
];

export default function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState(dummyData);

  const handleTodo = () => {
    setTodoList([...todoList, { id: Date.now().toString(), title: todo }]);
    setTodo("");
  };
  return (
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
        <Text style={{ color: "#fff", fontWeight: "bold" }}>Add</Text>
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
          }}
        >
          <Text
            style={{ color: "#000", fontSize: 14, fontWeight: "800", flex: 1 }}
          >
            {item.title}
          </Text>
          <Text>{item.Duration}</Text>
          <Text>
            <IconButton icon="pencil" />
            <IconButton icon="trash-can" />
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
