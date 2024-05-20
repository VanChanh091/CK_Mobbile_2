import { View } from "react-native";
import SplashScreen from "./SplashScreen";
import LoginScreen from "./src/view/LoginScreen";
import HomeScreen from "./src/view/HomeScreen";
import StackNavigation from "./StackNavigation";
import { useEffect, useState } from "react";
export default function App() {
  const [isShowSplash, setIsShowSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false);
    }, 3000);
  });

  return (
    <View style={{ flex: 1 }}>
      <>{isShowSplash ? <SplashScreen /> : <StackNavigation/>}</>
    </View>
  );
}
