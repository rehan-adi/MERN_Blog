import express from 'express';
import checkRegister from '../controllers/authController.js'
import checkLogin from '../controllers/loginController.js'

const authRouter = express.Router();


authRouter.post('/register', checkRegister);
authRouter.post('/login', checkLogin);


export default authRouter;