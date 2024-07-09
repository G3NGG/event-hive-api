import { collegeModel } from "../model/college_model.js";



// creating POST collge
export const addCollege = async (req,res,next) =>{
    try {
        const newCollege = await collegeModel.create({
            ...req.body,
            banner:req.file.filename
        })
        res.status(201).json(newCollege)
    } catch (error) {
        next(error)
    }
}

// creating GET college
export const getColleges = async (req,res,next)=>{
  try {
      const getCollege = await collegeModel.find()
  res.status(200).json(getColleges)
  } catch (error) {
    next(error)
}
}

// creating GET BY ID

export const getCollegeId =async (req,res,next) =>{
    try {
        const getCollegesId = await collegeModel.findById(req.body.params)
        res.status(200).json(getCollegesId)
    } catch (error) {
        next(error)
    }
}
// creating a patch 
export const patchCollegeId = async (req,res,next) =>{
    try {
        const patchCollegesId = await collegeModel.findByIdAndUpdate(req.body.params)
        res.status(200).json(patchCollegesId)
    } catch (error) {
        next(error)
    }

}

// create an delete method
export const deleteCollegeId = async (req,res,next) =>{
    try {
        const deleteCollegesId = await collegeModel.findByIdAndDelete(req.body.params)
        res.status(200).json(deleteCollegesId)
    } catch (error) {
        next(error)
    }

}
