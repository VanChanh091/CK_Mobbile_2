import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    axios
      .get(`https://6627001fb625bf088c071863.mockapi.io/emailLogin`)
      .then((response) => {
        const data = response.data;
        const user = data.find((user) => user.email === email);
        if (user) {
          console.log("Login successful");
          navigation.navigate("TabNavigation");
        } else {
          console.log("Login failed");
        }
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "90%",
            height: "100%",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 25 }}>Sign in</Text>
          <Text style={{ fontSize: 16, paddingTop: 8 }}>
            By continuing, you agree to our{" "}
            <Text style={{ color: "blue", textDecorationLine: "underline" }}>
              Terms of Service
            </Text>{" "}
            and{" "}
            <Text style={{ color: "blue", textDecorationLine: "underline" }}>
              Private Policy
            </Text>
          </Text>
        </View>
      </View>
      <View style={{ flex: 3.3 }}>
        <View style={{ flex: 1.5 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              paddingLeft: 20,
              marginTop: 5,
            }}
          >
            Email or phone number
          </Text>
          <View
            style={{
              width: "100%",
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 12,
            }}
          >
            <TextInput
              style={{
                height: 50,
                width: "90%",
                borderWidth: 1,
                borderRadius: 5,
              }}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
        </View>
        <View
          style={{ flex: 2, justifyContent: "center", alignItems: "center" }}
        >
          <TouchableOpacity
            style={{
              width: "90%",
              height: 50,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#535ce9",
            }}
            onPress={() => handleLogin()}
          >
            <Text style={{ fontSize: 18, color: "white" }}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "90%",
              height: 50,
              borderWidth: 1,
              marginTop: 12,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
              borderColor: "blue",
            }}
          >
            <Text style={{ fontSize: 18, color: "blue" }}>
              Send one-time passcode
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 4 }}>
        <View
          style={{
            flex: 0.7,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "90%",
              height: "100%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{ flex: 2 }}>
              <View
                style={{
                  width: "100%",
                  height: 0,
                  borderWidth: 1,
                  borderColor: "gray",
                }}
              ></View>
            </View>
            <View
              style={{
                flex: 0.5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>OR</Text>
            </View>
            <View style={{ flex: 2 }}>
              <View
                style={{
                  width: "100%",
                  height: 0,
                  borderWidth: 1,
                  borderColor: "gray",
                }}
              ></View>
            </View>
          </View>
        </View>
        <View
          style={{ flex: 3, justifyContent: "center", alignItems: "center" }}
        >
          <TouchableOpacity
            style={{
              marginTop: -25,
              width: "90%",
              height: 50,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#f3f4f6",
              flexDirection: "row",
            }}
          >
            <Ionicons name="logo-apple" size={30} color="black" />
            <Text style={{ fontSize: 18, paddingLeft: 10 }}>
              Continue with Apple
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              marginTop: 12,
              width: "90%",
              height: 50,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fcf2f1",
              flexDirection: "row",
            }}
          >
            <Ionicons name="logo-google" size={30} color="black" />
            <Text style={{ fontSize: 18, color: "red", paddingLeft: 10 }}>
              Continue with Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: "90%",
              height: 50,
              borderRadius: 5,
              marginTop: 12,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#f0f7fd",
              flexDirection: "row",
            }}
          >
            <Ionicons name="logo-facebook" size={30} color="black" />
            <Text style={{ fontSize: 18, color: "blue", paddingLeft: 10 }}>
              Continue with Facebook
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
