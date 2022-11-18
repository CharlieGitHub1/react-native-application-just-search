import React, { useState } from "react";
import useSearchResults from "../hooks/useSearchResults";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, restaurants, errorMessage] = useSearchResults();

  return (
    <View>
      <Text style={styles.titleStyle}>Search Screen</Text>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={searchApi(term)}
      />
      <Text style={styles.captionStyle}>
        We have found {restaurants.length} restaurants
      </Text>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
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
  captionStyle: {
    fontSize: 14,
    marginLeft: 10,
    marginTop: 10,
  },
});

export default SearchScreen;
