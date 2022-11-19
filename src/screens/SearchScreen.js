import React, { useState } from "react";
import useResults from "../hooks/useResults";
import { View, Text, StyleSheet } from "react-native";
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
    <View>
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
      <ResultList title="Cost Effective" results={filterResultsByPrice("$")} />
      <ResultList title="Bit Pricer" results={filterResultsByPrice("$$")} />
      <ResultList title="Big Spender" results={filterResultsByPrice("$$$")} />
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
    marginLeft: 35,
    marginTop: 5,
  },
});

export default SearchScreen;
