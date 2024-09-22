import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Only import react-native-gesture-handler on native platforms
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../reviews/home";
import AboutScreen from "../reviews/about";
import DetailScreen from "../reviews/detail";

const AppNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="home2"
        component={HomeLayout}
        options={{ title: "Trang chủ" }}
      />
      <Drawer.Screen
        name="about"
        component={AboutScreen}
        options={{ title: "Thông tin" }}
      />
    </Drawer.Navigator>
  );
};

export default AppNavigation;

const HomeLayout = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{ title: "Overview" }}
      />
      <Stack.Screen
        name="review-detail"
        component={DetailScreen}
        options={{ title: "Detail Page" }}
      />
    </Stack.Navigator>
  );
};
