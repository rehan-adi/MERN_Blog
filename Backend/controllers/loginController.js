import {userAuthModel} from '../models/userAuth.js'

const checkLogin = async () => { 
 
    try {
        const {email, password} = req.body;
        const existingUser = await userAuthModel.findOne({email});

        if(!existingUser){
          return res.status(400).json({ error: 'User does not exist' });
        }

        if(existingUser.password !== password){
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        res.status(200).json({mesage: 'Login successful'})

    } catch (error) {
        console.error('Error', error);
        res.status(500).json({error: 'Internal Server Error'})
    }

};

export default checkLogin;