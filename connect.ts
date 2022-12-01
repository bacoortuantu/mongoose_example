// Import the mongoose module
import mongoose from "mongoose";
// Set up default mongoose connection
import { BridgeInfo } from "./models";
const connectString = "mongodb://127.0.0.1/bridge";
mongoose
  .connect(connectString, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => console.log("Mongo connected"))
  .catch((err) => console.log(err));

const doBridgeInfoThing = async () => {
  //   create, find, findOne, updateOne, deleteOne
  //   const createData = await BridgeInfo.create({
  //     key: "key2",
  //     token: "token2",
  //     value: "value2",
  //   });
  //   console.log(createData);

  const allData = await BridgeInfo.find();
  const key1 = await BridgeInfo.find({
    key: "key1",
  });

  console.log({ allData, key1 });
};

doBridgeInfoThing();
