import {userAuthModel} from '../models/userAuth.js'

const checkRegister = async (req, res) => {

    try {
        const {username, email, password} = req.body;
        console.log('Received registration request:', req.body);
        
        const existingUser = await userAuthModel.findOne({email});
        if(existingUser){
            return res.status(400).json({ error: 'User already exists with this email' });
        }

        const newUser = new userAuthModel({username, email, password});
        console.log('New user object:', newUser);
         await newUser.save();

        res.status(201).json({message: 'User registered successfully'})
        

    } catch (error) {
        console.error('Error', error)
        res.status(500).json({ error: 'Internal Server Error' });
    }

}

export default checkRegister;