import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

const Layout = ({ children, title = "" }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.pageTitle}>Rick and Morty</Text>
          </View>
          {title && <Text style={styles.pageSubTitle}>{title}</Text>}
          {children}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 8,
  },
  pageTitle: {
    fontSize: 30,
    lineHeight: 40,
    fontWeight: "bold",
  },
  pageSubTitle: {
    fontSize: 24,
    lineHeight: 40,
    fontWeight: "bold",
  },
});

export default Layout;