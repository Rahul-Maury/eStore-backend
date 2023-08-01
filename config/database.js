const mongoose=require('mongoose');

const Connection=()=>{

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
   
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

}

module.exports=Connection;






