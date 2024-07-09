import { Router } from "express";
import { addEvent, deleteEvent,  getEvent, getEvents, getEvent,  updateEvent,  } from "../controllers/eventcontrollers.js";

export const statementRouter = Router()

eventRouter.post('/statement', addEvent)

eventRouter.get('/statement',getEvents)

eventRouter.get('/statement/:id',getEvent)

eventRouter.patch('/statement/:id:eventStatus',updateEvent)

eventRouter.delete('/statement/:id',deleteEvent)

