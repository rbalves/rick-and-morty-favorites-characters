import { StyleSheet, Text, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import Layout from "../../components/Layout";

import useGetCharacters from "../../hooks/useGetCharacters";
import useFavorites from "../../hooks/useFavorites";

import CharacterCard from "./components/CharacterCard";
import Counter from "./components/Counter";

const Characters = () => {
  const { loading, characters, error } = useGetCharacters();

  const { favorites } = useFavorites();

  const favoritesQuantity = favorites.length;

  if (loading) {
    return (
      <Layout>
        <View>
          <Text>Looking for characters...</Text>
        </View>
      </Layout>
    );
  }

  if (error || characters.results.length === 0) {
    return (
      <Layout>
        <View>
          <Text>No characters found!</Text>
        </View>
      </Layout>
    );
  }
  return (
    <Layout>
      <View style={styles.header}>
        <View>
          <Text style={styles.pageTitle}>Characters</Text>
        </View>
        <View>
          <View style={{ position: "relative", padding: 8 }}>
            <MaterialCommunityIcons
              name="robot-love-outline"
              size={32}
              color="black"
            />
            {favoritesQuantity > 0 && <Counter quantity={favoritesQuantity} />}
          </View>
        </View>
      </View>
      <View>
        {characters.results.map((character) => (
          <CharacterCard character={character} key={character.id} />
        ))}
      </View>
    </Layout>
  );
};

export const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Characters;
