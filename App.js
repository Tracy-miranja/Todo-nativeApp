import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
  FlatList,
} from "react-native";

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
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ marginHorizontal: 16 }}>
        <TextInput
          style={{
            borderWidth: 2,
            borderColor: "#000",
            marginTop: 60,
            borderRadius: 5,
            paddingVertical: 1,
            paddingHorizontal: 16,
          }}
          placeholder="Add a task"
        />
        <TouchableOpacity
          style={{
            backgroundColor: "#00ff87",
            borderRadius: 20,
            padding: 2,
            marginTop: 5,
            alignItems: "center", // alignText should be alignItems
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Add</Text>
        </TouchableOpacity>
        {/* render Todo list */}
        {/* <FlatList data={} renderItem={} keyExtractor={item => item.id} /> */}
        {dummyData.map((item) => (
          <View key={item.id}>
            <Text>{item.title}</Text>
            <Text>{item.Duration}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
