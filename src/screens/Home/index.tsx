import { View, Image, Text, TouchableOpacity, FlatList } from "react-native";
import { useState, useEffect } from "react";

import { Entypo } from "@expo/vector-icons";
import { styles } from "./styles";
import { THEME } from "../../theme/theme";
import { MatchCard, matchProps } from "../../components/MatchCard";

const userId = "db690068-f68a-494a-befd-c26492c553d6";

export function Home() {
  const [matchs, setMatchs] = useState<matchProps[]>([]);
  useEffect(() => {
    fetch(`http://192.168.1.3:3333/user/${userId}/matchs`)
      .then((res) => res.json())
      .then((data) => setMatchs(data));
  }, []);

  console.log(matchs);
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
          <Text style={styles.totalMatchs}>Total {matchs.length}</Text>
        </View>
      </View>

      <FlatList
        data={matchs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <MatchCard
              id={item.id}
              game={item.game}
              gameId={item.gameId}
              banner={item.banner}
              date={item.date}
              description={item.description}
              hour={item.hour}
            />
          );
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
