import { userModel } from "../model/usermodel.js";

export const addUser = async(req, res,next) => {
   
    try {
        console.log('request', req.body)
         const addData = await updateUser.create({
            ...req.body,
            Banner:req.file.filename
         });
         res.status(201).json(addData);
   
    } catch (error) {
        next(error)
    }
    
};

// Get all users
export const getUsers = async (req,res, next) => {
    try {
       const getData = await userModel.find() 
       {
        res.status(200).json(getData)
       }
    } catch (error) {
       next(error) 
    }
};


// Get A Single user by ID
export const getUser = async (req,res,next) => {
    try {
        const getSingleData = await userModel.findById(req.params.id)
        {
            res.status(200).json(getSingleData)
        }
    } catch (error) {
      next(error)  
    }
};

// Update a user
export const updateUser = async (req,res, next) => {
    try {
       const status = req.params.userStatus;
       console.log(status)
        const updateData = await userModel.findByIdandUpdate(req.params.id, {userStatus:status})
        {
            res.status(200).json(updateData)
        }
    } catch (error) {
      next(error)  
    }

}
    

// delete a user

export const deleteUser = async (req,res, next) => {
try {
    const deleteData = await userModel.findByIdandDelete(req.params.id)
    {
        res.status(200).json(deleteData)
        console.log(`user with the ID:${req.params.id}has been deleted`)

    }
} catch (error) {
 next(error)   
}

};