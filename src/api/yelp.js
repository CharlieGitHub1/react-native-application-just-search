import { DATABASE_URL, API_KEY } from "react-native-dotenv";

fetch(`${DATABASE_URL}/search?term=${term}&location=${location}&limit=50`, {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});
