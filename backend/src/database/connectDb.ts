import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGOURI)
  .then(() => {
    console.log("Mongo Connected");
  })
  .catch((e) => {
    console.log(e);
  });
