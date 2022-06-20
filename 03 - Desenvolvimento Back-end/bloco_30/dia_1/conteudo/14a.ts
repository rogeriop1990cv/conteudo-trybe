import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/model_exemple");

const P = new mongoose.Schema({});

const model = mongoose.model("books", P);

(async () => {
  const p = await model.find();
  console.log(p);
  await mongoose.disconnect()
})();

