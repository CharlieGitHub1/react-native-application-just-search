import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import DetailSection from "./DetailSection";

const ResultList = ({ title, results }) => {
  return (
    <View style={styles.viewBgStyle}>
      <Text style={styles.titleStyle}>{title}</Text>
      <Text style={styles.titleStyle}>Results: {results.length}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(result) => result.id}
        data={results}
        renderItem={({ item }) => {
          return <DetailSection result={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    padding: 2,
    marginBottom: 5,
    color: "white",
  },
  viewBgStyle: {
    marginBottom: 10,
  },
});

export default ResultList;
