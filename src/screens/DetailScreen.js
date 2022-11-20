import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import yelp from "../api/yelp";

const DetailScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);

  const businessId = navigation.getParam("id");

  const getBusinessResult = async (businessId) => {
    const response = await yelp.get(`/${businessId}`);
    setResult(response.data);
  };

  useEffect(() => {
    getBusinessResult(businessId);
  }, []);

  if (result === null) {
    return null;
  } else {
    return (
      <>
        <Text style={styles.titleStyle}>{result.name}</Text>
        <Text style={styles.captionRatingReviewStyle}>
          Rating: {result.rating} ⭐️
        </Text>
        <FlatList
          data={result.photos}
          keyExtractor={(photo) => photo}
          renderItem={({ item }) => {
            return <Image style={styles.imageStyle} source={{ uri: item }} />;
          }}
        />
      </>
    );
  }
};

const styles = StyleSheet.create({
  imageStyle: {
    flex: 1,
    height: 250,
    width: 350,
    marginVertical: 10,
    marginLeft: 30,
    borderRadius: 4,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 30,
    marginBottom: 5,
    marginTop: 10,
    color: "black",
  },
  captionRatingReviewStyle: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 30,
    color: "black",
    marginBottom: 20,
  },
});

export default DetailScreen;
