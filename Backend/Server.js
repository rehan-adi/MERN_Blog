import  Express  from "express";
import mongoose from "mongoose";

const Server = Express();
const port = 3000;

const uri = 'mongodb+srv://<rehan>:<G0LTj1GIvPrhAoLJ>@rehan.cycatda.mongodb.net/?retryWrites=true&w=majority&appName=Rehan';


const dataSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

const dataModel = mongoose.model("usermodel", dataSchema);

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
   console.log('Db connected');
   const dataSample = new dataModel({name: 'Rehan', age: 18});
   dataSample.save()
   .then(() => {
    console.log(' data inserted');
    dataModel.find({}, (err, data) => {
      if (err) {
        console.error('Error querying database:', err);
        return;
      }
      console.log('Sample data retrieved:', data);
    });
  })
  .catch((err) => {
    console.error('Error inserting sample data:', err);
  });
})
.catch((err) => {
  console.log("Error", err);
})


Server.get('/', (req, res) => {
    res.send('Hello');
})


Server.listen(port, () => {
    console.log(`Server is running on ${port}`);
})
