import {Schema, Types, model, Model} from "mongoose";
import { Storage } from "../intefaces/storage";
import { User } from "../intefaces/user.interface";

const StorageSchema = new Schema<Storage>(
   {
    fileName: {
        type: String,
    },
    idUser: {
        type: String,
    },
   },
   {
    versionKey: false,
    timestamps: true,
   }
);

const StorageModel = model('storage', StorageSchema);
export default StorageModel;