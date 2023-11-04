import { Car } from "../intefaces/car.interface";
import { Storage } from "../intefaces/storage";
import StorageModel from "../models/item";

const registrarUpload = async ({ fileName, idUser, path }:Storage) => {
    const responseItem = await StorageModel.create({ fileName, idUser, path });
    return responseItem;
};


export { registrarUpload };