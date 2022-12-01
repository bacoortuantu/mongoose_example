import mongoose from "mongoose";

const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

// export interface IConfig {
//   key: string;
//   value: string;
//   description: string;
// }

const Model = new Schema(
  {
    key: { type: String, index: true, unique: true },
    token: { type: String },
    value: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const BridgeInfo = mongoose.model("bridge_info", Model);
