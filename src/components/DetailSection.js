import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const DetailSection = ({ result }) => {
  return (
    <View style={styles.viewContainer}>
      <Image style={styles.imgStyle} source={{ uri: result.image_url }} />
      <Text style={styles.imgCaptionStyle}>{result.name}</Text>
      <Text style={styles.captionAddressStyle}>{result.location.address1}</Text>
      <Text style={styles.captionRatingReviewStyle}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    marginLeft: 15,
  },
  imgStyle: {
    width: 250,
    height: 150,
    borderRadius: 4,
    marginBottom: 5,
  },
  imgCaptionStyle: {
    fontSize: 14,
    fontWeight: "bold",
    margin: 4,
    color: "white",
  },
  captionRatingReviewStyle: {
    fontSize: 14,
    margin: 4,
    color: "white",
  },
  captionAddressStyle: {
    fontSize: 14,
    margin: 4,
    fontWeight: "bold",
    letterSpacing: 2,
    color: "white",
  },
});

export default DetailSection;
