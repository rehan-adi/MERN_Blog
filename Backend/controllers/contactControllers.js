import contactModel from '../models/contact.model.js';

const contacts = async (req, res) => {
    try {
        const {fullName, email, message} = req.body;
        console.log('Received form data:', { fullName, email, message });
        
        if(!fullName || !email || !message) {
            res.status(400).send({ error: 'All fields are required' });       
         }

         const newContact = new contactModel({fullName, email, message});
         await newContact.save();

         res.status(201).send({ message: 'Contact form submitted successfully'});
        

    } catch (error) {
        console.log('error', error);
    }
}

export default contacts;