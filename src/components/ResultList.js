import React from "react";
import { withNavigation } from "react-navigation";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import DetailSection from "./DetailSection";

const ResultList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;
  }

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
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Detail", { id: item.id })}
            >
              <DetailSection result={item} />
            </TouchableOpacity>
          );
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

export default withNavigation(ResultList);
