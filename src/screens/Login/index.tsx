import { LinearGradient } from "expo-linear-gradient";
import { View, Image, Text, Touchable, TouchableOpacity } from "react-native";

import { THEME } from "../../theme/theme";
import discordLogo from "../../assets/discord.png";
import IllustrationImg from "../../assets/illustration.png";

import { styles } from "./styles";

export function Login() {
  return (
    <LinearGradient style={styles.container} colors={THEME.COLORS.GRADIENT}>
      <Image source={IllustrationImg} style={styles.illustration} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Conecte-se e organize suas jogatinas</Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games{"\n"} favoritos com seus amigos
        </Text>
      </View>

      <TouchableOpacity activeOpacity={0.6} style={styles.loginButton}>
        <View style={styles.discord}>
          <Image source={discordLogo} />
        </View>
        <View style={styles.getIn}>
          <Text style={styles.getInTitle}>Entrar com Discord</Text>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
}
