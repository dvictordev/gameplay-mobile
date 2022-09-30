import { useState, useEffect } from "react";
import { View, Image, Text, ImageProps } from "react-native";

import userImg from "../../assets/users.png";

import { styles } from "./styles";

export interface matchProps {
  gameId: string;
  description: string;
  date: string;
  hour: string;
  id: string;
  game: string;
  banner: string;
}

export function MatchCard(props: matchProps) {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Image source={{ uri: props.banner }} style={styles.gameBanner} />
        <View style={styles.matchInfo}>
          <View style={styles.firstView}>
            <Text style={styles.title}>{props.game}</Text>
            <Text style={styles.subtitle}>{props.description}</Text>
            <Text style={styles.title}>
              <Image source={userImg} />
              {props.date} as {props.hour}h
            </Text>
          </View>
          <View style={styles.secondView}>
            <Text style={styles.users}>
              <Image style={styles.usersImg} source={userImg} />2
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
