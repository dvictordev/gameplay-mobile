import { View, Image, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { styles } from "./styles";
import { THEME } from "../../theme/theme";
import { MatchCard } from "../../components/MatchCard";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.user}
          source={{
            uri: "https://avatars.githubusercontent.com/u/82322388?v=4",
          }}
        />
        <View style={styles.heading}>
          <Text style={styles.headerTitle}>
            Olá, <Text style={styles.userName}>Victor</Text>
          </Text>
          <Text style={styles.headSubtitle}>Hoje é dia de vitória</Text>
        </View>
        <TouchableOpacity style={styles.plusButton}>
          <Entypo name="plus" size={14} color={THEME.COLORS.HEADING} />
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.bodyHeader}>
          <Text style={styles.matchs}>Partidas Agendadas</Text>
          <Text style={styles.totalMatchs}>Total 6</Text>
        </View>
      </View>
      <MatchCard />
    </View>
  );
}
