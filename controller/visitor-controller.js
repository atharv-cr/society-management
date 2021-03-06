const Users = require('../models/user')
const Visitor = require('../models/visitors')


const getVisitorHistory = async(request,response,next)=>{
    
    const userId = request.params.uid;
    
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
  
   
    response.json({
        status: 200,
        message: "Fetch Successful",
        data: user.visitorHistory.toObject(),
        errors: false,
      });
}


const newVisitors = async (request,response,next)=>{
    const { name,number,date} = request.body
    const userId = request.params.uid;
   
    
    let user;
    try {
      user = await Users.findById(userId);
    } catch (err) {
      response.status(500);
      return res.json({
        message: `DB error: ${err.message}`,
        data: null,
        errors: true,
        status: 500,
      });
    }

    const newVisitor = new Visitor({
      name:name,
      number:number,
      date:date,
    });
  
    
    user.visitors = newVisitor

    

    
  
    try {
      await user.save();
    } catch (error) {
      response.status(500);
      return response.json({
        message: `DB error: ${error.message}`,
        data: null,
        errors: true,
        status: 500,
      });
    }
  
    response.json({
      status: 200,
      message: "Visitor request sent",
      data: user.discussions.toObject(),
      errors: false,
    });

}

const denyVisitor = async(request,response,next)=>{
    
  const userId = request.params.uid;
  
  let user;
  try {
    user = await Users.findById(userId);
  } catch (err) {
    response.status(500);
    return res.json({
      message: `DB error: ${err.message}`,
      data: null,
      errors: true,
      status: 500,
    });
  }

  
  

  
     


}

exports.getVisitorHistory = getVisitorHistory
exports.newVisitors = newVisitors



