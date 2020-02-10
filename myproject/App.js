import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity
} from "react-native";

export default function App() {
  const [people, setpeople] = useState([
    { name: "Ishara", id: 1 },
    { name: "Janaka", id: 2 },
    { name: "Asanka", id: 3 },
    { name: "Dilanka", id: 4 },
    { name: "Ayesha", id: 5 },
    { name: "Ishanka", id: 6 },
    { name: "Kalpa", id: 7 }
  ]);

  const [name, setname] = useState("Kholi");

  const pressHandler = id => {
    console.log(id);
    setpeople(prevPeople => {
      return prevPeople.filter(person => person.id != id);
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <FlatList
          numColumns={3}
          data={people}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => pressHandler(item.id)}>
              <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
      <Text style={styles.item}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 15
    // alignItems: "center",
    // justifyContent: "center"
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200
  },
  item: {
    padding: 10,
    fontSize: 25,
    height: 80,
    backgroundColor: "pink",
    borderRadius: 10,
    marginHorizontal: 15,
    marginTop: 24
  }
});
