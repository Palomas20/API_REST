import {Schema, Types, model, Model} from "mongoose";
import { Car } from "../intefaces/car.interface";

const ItemSchema = new Schema<Car>(
    {
        nombre: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            required: true,
        },
        gas: {
            type: String,
            enum: ["gasolina", "electrico"],
            required: true,
        },
        year: {
            type: Number,
            required: true,
        },
        descripcion:{
            type: String,
            required: true,
        },
        precio:{
            type: Number,
            required: true,
        }
    },
    {
        timestamps:true,
        versionKey: false,
    }
);

const ItemModel = model('items', ItemSchema);
export default ItemModel;