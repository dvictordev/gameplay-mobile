import { View, Image, Text } from "react-native";
import frameImg from "../../assets/frame.png";
import user from "../../assets/users.png";

import { styles } from "./styles";

interface MacthProps {
  title: String;
  game: String;
  bannerUrl: String;
}

export function MatchCard() {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Image
          style={styles.gameBanner}
          source={{
            uri: "https://static-cdn.jtvnw.net/ttv-boxart/19619_IGDB-285x380.jpg",
          }}
        />
        <View style={styles.matchInfo}>
          <View style={styles.firstView}>
            <Text>Rpg dos guri</Text>
            <Text>
              <Image source={frameImg} />
              Sex 18/06 as 21:00h
            </Text>
          </View>
          <View style={styles.secondView}>
            <Text>RPG</Text>
            <Text>
              <Image source={user} />2
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
