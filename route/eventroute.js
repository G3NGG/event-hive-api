import { Router } from "express";
import { addEvent, deleteEvent,  getEvent, getEvents, getEvent,  updateEvent,  } from "../controllers/eventcontrollers.js";

export const eventRouter = Router()

eventRouter.post('/event', addEvent)

eventRouter.get('/event',getEvents)

eventRouter.get('/eventt/:id',getEvent)

eventRouter.patch('/event/:id:eventStatus',updateEvent)

eventRouter.delete('/event/:id',deleteEvent)
