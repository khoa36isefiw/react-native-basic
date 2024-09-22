import { Text, View } from "react-native";
import HomeScreen from "./components/reviews/home";
import AboutScreen from "./components/reviews/about";
import DetailScreen from "./components/reviews/detail";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { OPENSANS_REGULAR } from "./utils/const";

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
    <View>
      <Text style={{ paddingTop: 50 }}>Hello world</Text>
      <HomeScreen />
      <DetailScreen />
      <View>
        <Text>Detail Screen Google</Text>
      </View>
      <AboutScreen />
    </View>
  );
};

export default App;
