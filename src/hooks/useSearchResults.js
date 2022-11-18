import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [restaurants, setRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "houston",
        },
      });
      setRestaurants(response.data.businesses);
    } catch (err) {
      setErrorMessage("🧐 Something went wrong");
    }
  };

  useEffect(() => {
    searchApi("coffee");
  }, []);

  return [searchApi, restaurants, errorMessage];
};
