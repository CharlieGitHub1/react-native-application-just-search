import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer vxtiu_pKBO63CD1NCuFTpWmt91IHifXcwJRENVUmPO8rVorBHZlwA4VZBNyZoVPFVGurpEg79LU6X5AvimceLK4wGl7tpd7yGpd8cNYh582Dg2F2U9Qc50D9Va53Y3Yx",
  },
});
