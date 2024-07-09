import { Router } from "express";
import {remoteUpload } from "../middleware/uploads_hive.js";
import { addCollege, deleteCollegeId, getCollegeId, getColleges, patchCollegeId } from "../controllers/college_controller.js";

 export const routerApp = Router();

routerApp.post('/college',remoteUpload.single('banner'),addCollege);
routerApp.get('/college',getColleges);
routerApp.get('/college:id',getCollegeId);
routerApp.patch('/college:id',patchCollegeId);
routerApp.delete('/college:id',deleteCollegeId)


