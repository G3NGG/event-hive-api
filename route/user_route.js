import { Router } from "express";
import {  deleteUser,  updateUser, getUser, getUsers, addUser,  } from "../controllers/usercontroller.js";

export const userRouter = Router()

userRouter.post('/user', addUser)

userRouter.get('/user',getUsers)

userRouter.get('/user/:id',getUser)

userRouter.patch('/user/:id:userStatus',updateUser)

userRouter.delete('/user/:id',deleteUser)