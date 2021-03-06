const  mongoose  = require('mongoose');
const NewSociety = require('../models/newsociety')

const registerNewSociety = async(request,response,next)=>{
    const { societyName,name,city,phoneNumber,address } = request.body;
    const society = new NewSociety({
        "_id":new mongoose.Types.ObjectId,
        "societyName":societyName,
        "city":city,
        "address":address,
        "phoneNumber":phoneNumber,
        "name":name,
      
    })

    // save to database 
    try {
        await society.save();
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
        message: "Society is Registered we will contact you as soon as possible",
        data: society.toObject(),
        errors: false,
      });



 
}

const getNewSocieties = async(request,response,next)=>{

    let allNewSocieties;
    try {
        allNewSocieties = await NewSociety.find()
      } catch (error) {
        response.status(500);
        return response.json({
          message: `Database error: ${error.message}`,
          data: null,
          errors: true,
          status: 500,
        });
      }

     return response.json({
        status:200,
        message:"All registered societies",
        data:allNewSocieties,
        errors:false

     })
    
    }
    

exports.getNewSocieties = getNewSocieties
exports.registerNewSociety = registerNewSociety

