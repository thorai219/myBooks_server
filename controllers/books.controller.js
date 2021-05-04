const axios = require("axios");

const fetchNewBooks = async (req, res) => {
  try {
    const result = await axios.get("https://api.itbook.store/1.0/new");
    return res.status(200).json(result.data);
  } catch (e) {
    console.log(e);
  }
};

module.exports = { fetchNewBooks };
