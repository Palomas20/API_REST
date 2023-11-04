import {Schema, Types, model, Model} from "mongoose";
import { User } from "../intefaces/user.interface";

const UserSchema = new Schema<User>(
   {
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    description: {
        type: String,
        default: "UwU",
    },
   },
   {
    versionKey: false,
    timestamps: true,
   }
);

const UserModel = model('users', UserSchema);
export default UserModel;