const Users = require('../models/user')
const jwt = require("jsonwebtoken");
const mongoose  = require('mongoose');
const JWT_KEY = "KEY@123"


const register = async(request,response,next) => {
    const {phoneNumber,phoneNumberOtp} = request.body
// check if phoneNumber Already exits 
 let checkedUser;
  try {
    checkedUser = await Users.findOne({ phoneNumber: phoneNumber });
    
  } catch (err) {
    response.status(500);
    return response.json({
      message: `Database error: ${err.message}`,
      data: null,
      errors: true,
      status: 500,
    });
  }
  if (checkedUser && !checkedUser.deleted) {
    response.status(200);
    return response.json({
      status: 200,
      message: "PhoneNumber already exists",
      errors: true,
      data: null,
    });
  }

  

  // then send Otp to phoneNumber 

  let isPhoneNumberVerified = false
  



  // Otp is verified then save the phoneNumber to database 

  checkedUser = new Users({
    _id : new mongoose.Types.ObjectId,
    phoneNumber :phoneNumber,
    joiningdate: new Date().toISOString(),
    isPhoneNumberVerified : isPhoneNumberVerified
  });

  try {
    await checkedUser.save();
  } catch (err) {
    response.status(500);
    return response.json({
      message: `DB error: ${err.message}`,
      data: null,
      errors: true,
      status: 500,
    });
  }


  const token = jwt.sign({
    id: checkedUser._id,
    email: checkedUser.phoneNumber,
  },JWT_KEY);

  response.json({
    status: 200,
    message: "Registration successful",
    data: {
      user: {
        _id: checkedUser._id,
        phoneNumber: checkedUser.phoneNumber,
      },
      token: token,
    },
    errors: false,
  });

}

const login = async(request,response,next) => {
  const {phoneNumber,phoneNumberOtp} = request.body
  // check if phoneNumber Already exits 
  
   let checkedUser;
   try {
     checkedUser = await Users.findOne({ phoneNumber: phoneNumber });
     
   } catch (err) {
     response.status(500);
     return response.json({
       message: `Database error: ${err.message}`,
       data: null,
       errors: true,
       status: 500,
     });
   }

   const token = jwt.sign({
    id: checkedUser._id,
    email: checkedUser.phoneNumber,
  },JWT_KEY);

   if (checkedUser && !checkedUser.deleted) {
     // Send Otp to phoneNumber

     // If Otp is checked then
    response.status(200);
    return  response.json({
      status: 200,
      message: "Login successful",
      data: {
        user: {
          _id: checkedUser._id,
          phoneNumber: checkedUser.phoneNumber,
        },
        token: token,
      },
      errors: false,
    });
  }else {
    response.json({
      status: 200,
      message: "PhoneNumber Not Registered",
      errors: true,
      data: null,
    });

  }

}



exports.register = register
exports.login = login