const jwt = require("jsonwebtoken");
const JWT_KEY = "KEY@123"

module.exports = (request, response, next) => {
  if (request.method === "OPTIONS") {
    return next();
  }
  try {
    const token = request.header("Authorization")
    if (!token) {
      return response.json({
        message: "Invalid token",
        data: null,
        errors: true,
        status: 401
      });
    }
    const data = jwt.verify(token, JWT_KEY);
    request.tokendata = { tokenid: data.id, tokenemail: data.email };
    next();
  } catch (err) {
    console.log(err);
    response.status(401);
    return response.json({
      message: `Authorization token error ${err.message}`,
      data: null,
      errors: true,
      status: 401
    });
  }
};