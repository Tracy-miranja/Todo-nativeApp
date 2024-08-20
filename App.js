import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import TodoScreen from "./src/screen/TodoScreen";
import { SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView>
      <View style={{ marginHorizontal: 16 }}>
        <TodoScreen />
        <TextInput
          style={{
            borderWidth: 2,
            borderColor: "#00ff87",
            marginTop: 10,
            borderRadius: 20,
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
