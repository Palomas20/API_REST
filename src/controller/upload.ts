import { Request, Response } from "express";
import dbConnect from "../config/mongo";
import { handleHttp } from "../utils/error.handle";
import { registrarUpload } from "../services/storage";
import { RequestExt } from "../intefaces/req-ext";
import { Storage } from "../intefaces/storage";

const getFile = async (req: RequestExt, res: Response) => {
    try{
        const { user, file } = req;
        console.log(file);
        const dataToRegister: Storage = {
            fileName: `${file?.filename}`,
            idUser: `${user?.id}`,
            path: `${file?.path}`,
        };
        const response = await registrarUpload(dataToRegister);
        res.send(response);
    } catch (e) {
        handleHttp(res, "ERROR_GET_BLOG");
    }
};


export { getFile };