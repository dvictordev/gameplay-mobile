import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Home } from "./src/screens/Home";
import { Login } from "./src/screens/Login";
import { THEME } from "./src/theme/theme";

export default function App() {
  return (
    <LinearGradient style={{ flex: 1 }} colors={THEME.COLORS.GRADIENT}>
      <SafeAreaView style={styles.container}>
        {/* <Login /> */}
        <Home />
        <StatusBar style="light" translucent />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: THEME.COLORS.GRADIENT,
    alignItems: "center",
    justifyContent: "center",
  },
});
