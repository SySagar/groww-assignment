import axios from "axios";

const APIInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API,
});

const APIMethods = {
  merchant: {
    data: async () => {
      return await APIInstance.get("/merchant-metadata");
    },
  },
};

export default APIMethods;
