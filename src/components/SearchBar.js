import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.bgStyle}>
      <EvilIcons name="search" style={styles.searchIcon} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bgStyle: {
    backgroundColor: "#cccc",
    height: 40,
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 4,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  searchIcon: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 10,
  },
});

export default SearchBar;
