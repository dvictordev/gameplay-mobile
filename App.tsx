import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Routes } from "./src/routes";

import { THEME } from "./src/theme/theme";

export default function App() {
  return (
    <LinearGradient style={{ flex: 1 }} colors={THEME.COLORS.GRADIENT}>
      <SafeAreaView style={styles.container}>
        <Routes />
        <StatusBar style="light" translucent backgroundColor="#0E1647" />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
