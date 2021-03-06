const { validationResult } = require("express-validator");

exports.validate = (request, response, next) => {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    console.log(errors);
    response.status(400);
    return response.json({
      message: "Empty fields",
      data: errors,
      status: 400,
      errors: true,
    });
  }
  next();
};


