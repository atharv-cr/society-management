const Users = require('../models/user')




const sendAlertMessage = async (request, response, next) =>{
    const {alerttype} = request.body
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

     let user = [];
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
      
    user.emergencies = alerttype
    

    /// send alert message to the members in alertlist 

    ///

      
    response.json({
        status: 200,
        message: "Alert Message Sent Sucessfully",
        data:user.alertList.toObject(),
        errors: false,
      });

}

exports.sendAlertMessage = sendAlertMessage