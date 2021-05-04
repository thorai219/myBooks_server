const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    let decoded;
    if (token) {
      decoded = jwt.verify(token, "test");
    }

    next();
  } catch (e) {
    console.log(e);
  }
};

module.exports = auth;
