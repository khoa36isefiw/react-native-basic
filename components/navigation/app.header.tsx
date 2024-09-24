import { StyleSheet, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { globalStyles, OPENSANS_REGULAR } from "../../utils/const";
import { NavigationProp, useNavigation } from "@react-navigation/native";
const AppHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <MaterialIcons name="menu" size={36} color="black" />
      <Text style={[styles.headerText, globalStyles.globalFont]}>Kei App</Text>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ccc",
    // paddingTop: 40,
  },
  headerText: {
    flex: 1,
    textAlign: "center",
    fontSize: 24,
    fontWeight: 600,
  },
});
