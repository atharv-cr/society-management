const Users = require('../models/user')
const Discussions = require('../models/discussions');
const mongoose = require("mongoose");


const getDiscussion = async(request,response,next)=>{
    
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
    
    let user;
    try {
      user = await Users.findById(userId);
    } catch (errpr) {
      response.status(500);
      return response.json({
        message: `Database error: ${error.message}`,
        data: null,
        errors: true,
        status: 500,
      });
    }

    console.log(user.discussion)

 
      

    response.json({
        status: 200,
        message: "Fetch Successful",
        data: user.discussion,
        errors: false,
      });
}



const postDiscussion = async (request,response,next)=>{
    const { title,message,image_url} = request.body
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
    
    let user;
    try {
      user = await Users.findById(userId);
    } catch (error) {
      response.status(500);
      return response.json({
        message: `DB error: ${error.message}`,
        data: null,
        errors: true,
        status: 500,
      });
    }

    const newdiscussion = new Discussions({
      title: title,
      message: message,
      image_url: image_url,
    });

  try {
    user.discussions = newdiscussion
    await newdiscussion.save()
    await user.save()
    
     
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
      message: "Discussion posted on society Notice Board",
      data: discussions,
      errors: false,
    });

}

exports.getDiscussion = getDiscussion
exports.postDiscussion = postDiscussion



