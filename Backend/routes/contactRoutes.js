import Express from "express";
import contacts from '../controllers/contactControllers.js';

const app = Express.Router();


app.post('/', contacts);

export default app;