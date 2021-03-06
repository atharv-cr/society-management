const Users = require('../models/user')


const getProfileById = async (request, response, next) => {
    const userId = request.params.uid;
    let userProfile;
    if (request.tokendata.tokenid !== userId) {
      response.status(401);
      return response.json({
        message: `Unauthorised. You are not allowed to perform this action`,
        data: null,
        errors: true,
        status: 401,
      });
    }
    try {
      userProfile = await Users.findById(userId);
    } catch (err) {
      response.status(500);
      return response.json({
        message: `Database error: ${err.message}`,
        data: null,
        errors: true,
        status: 500,
      });
    }
  
    if (!userProfile) {
      response.status(200);
      return response.json({
        message: `User Profile doesn't exist. Try signing up?`,
        data: null,
        errors: true,
        status: 400,
      });
    }
  
    
    const user = userProfile.toObject();
    
    response.json({
      status: 200,
      message: "Fetch Successful",
      data: user,
      errors: false,
    });


  };


const updateMandatoryProfile = async (request, response, next) => {
    const { fullname, societyname, building,flatnumber, ownership, occupancy} = request.body;
    const userId = request.params.uid;
    if (request.tokendata.tokenid !== userId) {
          response.status(401);
          return response.json({
            message: `Unauthorised. You are not allowed to perform this action`,
            data: null,
            errors: true,
            status: 401,
          });
        }
      
    let findUser;
        try {
          findUser = await Users.findOne({ fullname: fullname });
        } catch (err) {
          response.status(500);
          return response.json({
            message: `Database error: ${error.message}`,
            data: null,
            errors: findUser,
            status: 500,
          });
        }
      
        if(findUser && !findUser.deleted && findUser.id !== userId){
          response.status(200);
          return response.json({
            message: `Username not available, try again!`,
            data: null,
            errors: true,
            status: 200,
          });
        }
      
        let user;
        try {
          user = await Users.findById(userId);
        } catch (error) {
          response.status(500);
          return response.json({
            message: `Database error: ${error.message}`,
            data: null,
            errors: true,
            status: 500,
          });
        }
      
        
        user.fullname = fullname;
        user.societyname = societyname;
        user.building = building;
        user.flatnumber = flatnumber;
        user.ownership = ownership
        user.occupancy = occupancy
      
        try {
          await user.save();
        } catch (error) {
          response.status(500);
          return response.json({
            message: `Database error: ${error.message}`,
            data: null,
            errors: true,
            status: 500,
          });
        }
      
        response.json({
          status: 200,
          message: "Update Successful",
          data: user.toObject(),
          errors: false,
        });
      
      
    
    };


exports.getProfileById = getProfileById
exports.updateMandatoryProfile = updateMandatoryProfile