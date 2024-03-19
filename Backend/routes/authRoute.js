import express from 'express'
import userAuthModel from '../models/userAuth.js'

const authApp = express();


authApp.post('/register', async(req, res) => {

    const {username, email, password} = req.body;
    console.log('Received registration request:', req.body);
    res.send('Hi bro');

    try {
        
        const existingUser = await userAuthModel.findOne({email});
        if(existingUser){
            return res.status(400).json({ error: 'User already exists with this email' });
        }

        const newUser = new userAuthModel({username, email, password});
        newUser.save();

        res.status(201).json({message: 'User registered successfully'})
        

    } catch (error) {
        console.error('Error', error)
        res.status(500).json({ error: 'Internal Server Error' });
    }

})


export default authApp;