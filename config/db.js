const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://vic:vic1@cluster0.qviytko.mongodb.net/?retryWrites=true&w=majority' );

    console.log('MongoDB Connected');
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
