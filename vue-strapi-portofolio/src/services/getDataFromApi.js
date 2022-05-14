import axios from "axios";
export default {
  async getDataFromStrapi() {
    let data = [];
    try {
      let response = await axios.get(
        "http://localhost:1337/api/homes?populate=*"
      );
      data = response.data.data;
    } catch (error) {
      console.log(error);
    }

    return data;
  },
};
