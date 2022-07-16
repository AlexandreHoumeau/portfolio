import axios from "axios";

export const sendMail = async (informations: object) => {
  try {
    let request = await axios
      .post("/api/send", {
        ...informations
      })
      .then((res) => {
        return res;
      });
    return request.status === 200 ? true : false;;
  } catch (err) {
    console.error(err);
  }
};
