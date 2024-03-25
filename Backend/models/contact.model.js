import mongoose from 'mongoose';

const contactSchema = mongoose.Schema({
    fullName:{
        type: 'string',
        required: true,
    },
    email:{
        type: 'string',
        required: true,
    },
    message:{
        type: 'string',
        required: true,
    }
})

const contactModel = mongoose.model('contactModel', contactSchema);
export default contactModel;