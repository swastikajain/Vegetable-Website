const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`mogngo connecterd: ${conn.connection.host}`);
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

module.exports = connectDB;
