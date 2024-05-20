import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/view/HomeScreen";
import ProfileScreen from "./src/view/ProfileScreen";
import AddAction from "./src/view/AddAction";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/view/LoginScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigationContainer = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="home-outline" size={size} color={color} />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddAction}
        options={{
          tabBarLabel: "Add",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="add-outline" size={size} color={color} />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="person-outline" size={size} color={color} />;
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={LoginScreen}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TabNavigation"
          component={TabNavigationContainer}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
