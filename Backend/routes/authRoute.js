import express from 'express';
import checkRegister from '../controllers/authController.js'

const authRouter = express.Router();


authRouter.post('/register', checkRegister);


export default authRouter;