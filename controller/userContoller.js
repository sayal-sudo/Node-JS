const fs = require('fs');

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);
exports.getAllUsers = (request,response)=>{
    response
        .status(500)
        .json({
            status:'error',
            message:'geting all users'
        })
}

exports.addUser = (request,response)=>{
    response
        .status(500)
        .json({
            status:'error',
            message:'adding user'
        })
}

exports.getUser = (request,response)=>{
    console.log(request.params.id);
    response
        .status(500)
        .json({
            status:'error',
            message:'getting user'
        })
}
exports.updateUser = (request,response)=>{
    response
        .status(500)
        .json({
            status:'error',
            message:'updating user'
        })
}
exports.deleteUser = (request,response)=>{
    response
        .status(500)
        .json({
            status:'error',
            message:'deleting user'
        })
}
