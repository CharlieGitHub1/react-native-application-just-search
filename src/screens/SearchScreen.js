import React, { useState } from "react";
import useResults from "../hooks/useResults";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import ResultList from "../components/ResultList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={styles.viewContainer}>
      <Text style={styles.titleStyle}>Search Screen</Text>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      <Text style={styles.captionStyle}>
        We have found {results.length} results
      </Text>
      <Text style={styles.captionStyle}>
        {errorMessage ? <Text>{errorMessage}</Text> : null}
      </Text>
      <ScrollView>
        <ResultList
          title="Cost Effective"
          results={filterResultsByPrice("$")}
        />
        <ResultList title="Bit Pricer" results={filterResultsByPrice("$$")} />
        <ResultList title="Big Spender" results={filterResultsByPrice("$$$")} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: "black",
  },

  titleStyle: {
    alignSelf: "center",
    margin: 10,
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  captionStyle: {
    fontSize: 14,
    marginLeft: 15,
    marginTop: 5,
    color: "white",
  },
});

export default SearchScreen;
