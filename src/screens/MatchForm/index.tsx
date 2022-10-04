import { StatusBar } from "expo-status-bar";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import rankedImg from "../../assets/ranked.png";

import { styles } from "./styles";
import { THEME } from "../../theme/theme";
import { LinearGradient } from "expo-linear-gradient";

export function MatchForm({ navigation }) {
  function handleGoback() {
    navigation.goback();
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent backgroundColor="#1D2766" />
      <LinearGradient colors={THEME.COLORS.HEADERGRADIENT}>
        <View style={styles.header}>
          <TouchableOpacity activeOpacity={0.6} onPress={handleGoback}>
            <AntDesign
              name="arrowleft"
              size={24}
              color={THEME.COLORS.HEADING}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Agendar partida</Text>
          <View style={styles.right}></View>
        </View>
      </LinearGradient>
      <View style={styles.body}>
        <View>
          <Text style={styles.categoriesLabel}>Categoria</Text>
          <View>
            <LinearGradient
              style={styles.category}
              colors={THEME.COLORS.HEADERGRADIENT}
            >
              <Image source={rankedImg} />
              <Text>Ranqueada</Text>
            </LinearGradient>
          </View>
        </View>
      </View>
    </View>
  );
}
