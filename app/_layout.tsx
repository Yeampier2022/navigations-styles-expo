import { Slot, SplashScreen } from "expo-router";
import { useEffect } from "react";
import "../global.css";

import { GestureHandlerRootView } from "react-native-gesture-handler";

import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();
const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "work-regular": require("../assets/fonts/WorkSans-Regular.ttf"),
    "work-light": require("../assets/fonts/WorkSans-Light.ttf"),
    "work-medium": require("../assets/fonts/WorkSans-Medium.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }
  return (
    <GestureHandlerRootView>
      <Slot />
    </GestureHandlerRootView>
  );
};

export default RootLayout;
