import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import { logger } from "react-native-logs";

import "../../styles/global.css";

// prevent the splash screen from auto-hiding before asset
SplashScreen.preventAutoHideAsync();

const log = logger.createLogger();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
    if (error) {
      log.error("Error loading fonts:", error);
    }
  }, [loaded, error]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
