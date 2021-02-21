const fs = require('fs');
const Tour = require('./../models/tourModel');




exports.getAllTours = async(request,response)=>{

    try{
        const tours = await Tour.find();
        response
            .status(200)
            .json({
                status: 'Success',
                result : tours.length,
                data:{
                    tours
                }

            })
    }
    catch(error){
        response
            .status(400)
            .json({
                status:'failed',
                message : error,
            })
    }

}
exports.getTour = async(request,response)=>{

    try{

        const tour = await Tour.findOne({_id : request.params.id});
        // we can also use Tour.findById(request.params.id)
        response
            .status(200)
            .json({
                tour
            });

    }catch(error){
        response
            .status(200)
            .json({
                status:'failed',
                message:error
            });
    }


}


exports.addTour = async(request,response)=>{

    //const newTour = new Tour ({})
    //newTour.save()
 try {
     const newTour = await Tour.create(request.body);

     response.status(201).json({
         status: 'success',
         data:{
             tour: newTour,
         }
     });

 }
 catch(error){

     response
         .status(400)
         .json({
             status:"failed",
             message: error
         });
 }

}



exports.updateTour = (request,response)=>{

        response
            .status(200)
            .json({
                status:'success',
                data:{
                    tour: 'UPDATED TOUR'
                }
            })

}

exports.deleteTour = (request,response)=>{
        response
            .status(204)
            .json({
                status:'success',
                message:'DELETED TOURS',
                data:null
            })
}