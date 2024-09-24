import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Only import react-native-gesture-handler on native platforms
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../reviews/home";
import AboutScreen from "../reviews/about";
import DetailScreen from "../reviews/detail";
import AppHeader from "./app.header";

const AppNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
    // screenOptions={{ headerShown: false }} // off header of stack navigator
    >
      <Drawer.Screen
        name="home2"
        component={HomeLayout}
        options={{ title: "Home 2" }}
      />
      <Drawer.Screen
        name="about"
        component={AboutScreen}
        options={{ header: () => <AppHeader /> }}
      />
    </Drawer.Navigator>
  );
};

export default AppNavigation;

const HomeLayout = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{ header: () => <></> }}
      />
      <Stack.Screen
        name="review-detail"
        component={DetailScreen}
        options={{ title: "Detail Page" }}
      />
    </Stack.Navigator>
  );
};
