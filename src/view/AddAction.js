import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import axios from "axios";

const AddAction = () => {
  const [newImage, setImage] = useState("");
  const [newWeb, setWeb] = useState("");
  const [newTitle, setTitle] = useState("");
  const [newTime, setTime] = useState("");

  const addHighlight = () => {
    const abc = {
      image: newImage,
      web: newWeb,
      title: newTitle,
      time: newTime,
    };
    axios
      .post(`https://6627001fb625bf088c071863.mockapi.io/highlight`, abc)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("error post highlight(42): ", error);
      });
      setImage("");
      setWeb("");
      setTitle("");
      setTime("");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1 }}>
        <Text style={{ marginLeft: 20, fontSize: 20, marginTop: 20 }}>
          Image
        </Text>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TextInput
            style={{
              height: 50,
              width: "90%",
              borderWidth: 1,
              borderRadius: 7,
              marginTop: 10,
              backgroundColor: "#FFFFFF",
            }}
            placeholder="Input image"
            value={newImage}
            onChangeText={(text) => setImage(text)}
          />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ marginLeft: 20, fontSize: 20, marginTop: 20 }}>Web</Text>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TextInput
            style={{
              height: 50,
              width: "90%",
              borderWidth: 1,
              borderRadius: 7,
              marginTop: 10,
              backgroundColor: "#FFFFFF",
            }}
            placeholder="Input web"
            value={newWeb}
            onChangeText={(text) => setWeb(text)}
          />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ marginLeft: 20, fontSize: 20, marginTop: 20 }}>
          Title
        </Text>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TextInput
            style={{
              height: 50,
              width: "90%",
              borderWidth: 1,
              borderRadius: 7,
              marginTop: 10,
              backgroundColor: "#FFFFFF",
            }}
            placeholder="Input title"
            value={newTitle}
            onChangeText={(text) => setTitle(text)}
          />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ marginLeft: 20, fontSize: 20, marginTop: 20 }}>
          Time
        </Text>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TextInput
            style={{
              height: 50,
              width: "90%",
              borderWidth: 1,
              borderRadius: 7,
              marginTop: 10,
              backgroundColor: "#FFFFFF",
            }}
            placeholder="Input time"
            value={newTime}
            onChangeText={(text) => setTime(text)}
          />
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
        onPress={() => addHighlight()}
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#535ce9",
            width: "90%",
            height: 50,
            borderRadius: 10,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 18, color: "white" }}>
            ADD
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddAction;

const styles = StyleSheet.create({});
