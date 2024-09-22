import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { OPENSANS_REGULAR } from "./utils/const";

import { NavigationContainer } from "@react-navigation/native";
// Only import react-native-gesture-handler on native platforms
import "react-native-gesture-handler";
import AppNavigation from "./components/navigation/app.navigation";

SplashScreen.preventAutoHideAsync(); // waiting for loading

const App = () => {
  const [loaded, error] = useFonts({
    [OPENSANS_REGULAR]: require("./assets/fonts/OpenSans-Regular.ttf"),
  });

  useEffect(() => {
    // if error
    if (loaded || error) {
      SplashScreen.hideAsync(); // hide the waiting splash screen
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};

export default App;
