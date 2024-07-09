import { eventModel } from "../model/eventmodels.js";

export const addEvent = async(req, res,next) => {
   
    try {
        console.log('request', req.body)
         const addData = await eventModel.create(req.body);
         res.status(201).json(addData);
   
    } catch (error) {
        next(error)
    }
    
};

// Get all events
export const getEvents = async (req,res, next) => {
    try {
       const getData = await eventModel.find() 
       {
        res.status(200).json(getData)
       }
    } catch (error) {
       next(error) 
    }
};


// Get A Single event by ID
export const getEvent = async (req,res,next) => {
    try {
        const getSingleData = await eventModel.findById(req.params.id)
        {
            res.status(200).json(getSingleData)
        }
    } catch (error) {
      next(error)  
    }
};

// Update a event
export const updateEvent = async (req,res, next) => {
    try {
       const status = req.params.eventStatus;
       console.log(status)
        const updateData = await eventModel.findByIdandUpdate(req.params.id, {eventStatus:status})
        {
            res.status(200).json(updateData)
        }
    } catch (error) {
      next(error)  
    }

}
    

// delete a event

export const deleteEvent = async (req,res, next) => {
try {
    const deleteData = await eventModel.findByIdandDelete(req.params.id)
    {
        res.status(200).json(`event with the ID:${req.params.id}has been deleted`)
    }
} catch (error) {
 next(error)   
}

};