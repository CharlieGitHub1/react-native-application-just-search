import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  return (
    <View>
      <Text style={styles.titleStyle}>Search Screen</Text>
      <SearchBar />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    alignSelf: "center",
    margin: 10,
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default SearchScreen;
