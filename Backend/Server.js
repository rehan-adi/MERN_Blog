import Express from "express";
import mongoose from "mongoose";

const Server = Express();
const port = 3000;

const uri = 'mongodb+srv://Blog_Data:rehan12345@rehan.cycatda.mongodb.net/?retryWrites=true&w=majority&appName=Rehan';

const dataSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

const dataModel = mongoose.model("usermodel", dataSchema);

mongoose.connect(uri)
.then(() => {
    console.log('Db connected');
    const dataSample = new dataModel({name: 'Rehan', age: 18});
    dataSample.save()
    .then(() => {
        console.log('data inserted');
        return dataModel.find({}); 
    })
    .then((data) => { 
        console.log('Sample data retrieved:', data);
    })
    .catch((err) => {
        console.error('Error retrieving sample data:', err);
    });
})
.catch((err) => {
    console.error("Error connecting to database:", err);
});

Server.get('/', (req, res) => {
    res.send('Hello');
});

Server.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
