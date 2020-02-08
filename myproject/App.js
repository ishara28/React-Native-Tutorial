import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [name, setname] = useState("Ishara");

  const clickHanlder = () => {
    setname("Janaka")
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.boldText}>My name is {name}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Click Here" onPress={clickHanlder} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    backgroundColor: "pink",
    padding: 20
  },
  boldText: {
    fontWeight: "bold"
  },
  background: {
    backgroundColor: "yellow",
    padding: 10,
    textAlign: "justify"
  },
  buttonContainer: {
    marginTop: 20
  }
});
