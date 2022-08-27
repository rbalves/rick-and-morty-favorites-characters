import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import useFavorites from "../../../../hooks/useFavorites";
import store from "../../../../store";
import {
  addFavorite,
  removeFavorite,
} from "../../../../store/modules/favorites/reducer";

const CharacterCard = ({ character }) => {
  const { favorites } = useFavorites();

  const {
    id,
    name,
    gender,
    origin: { name: origin },
    location: { name: location },
    image,
  } = character;

  const isFavorite = favorites.includes(id);

  const handleHeartClick = () => {
    store.dispatch(isFavorite ? removeFavorite(id) : addFavorite(id));
  };

  return (
    <View style={styles.card}>
      <View style={{ ...styles.column, flex: 2 }}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View
        style={{
          ...styles.column,
          flex: 3,
          flexDirection: "column",
          justifyContent: "space-between",
          height: 125,
        }}
      >
        <View>
          <Text style={styles.text}>Nome: {name}</Text>
        </View>
        <View>
          <Text style={styles.text}>Gender: {gender}</Text>
        </View>
        <View>
          <Text style={styles.text}>Origin: {origin}</Text>
        </View>
        <View>
          <Text style={styles.text}>Location: {location}</Text>
        </View>
      </View>
      <Pressable
        onPress={handleHeartClick}
        style={{ ...styles.column, alignItems: "center" }}
      >
        <AntDesign
          name={isFavorite ? "heart" : "hearto"}
          size={24}
          color="black"
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#B0E0E6",
    padding: 8,
    marginVertical: 4,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  column: {
    flex: 1,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 5,
  },
  text: {
    fontSize: 14,
  },
});

export default CharacterCard;
