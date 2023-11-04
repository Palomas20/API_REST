import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle";
import { JwtPayload } from "jsonwebtoken";
import { RequestExt } from "../intefaces/req-ext";


const getItems = (req:RequestExt, res:Response) => {
    try{
        res.send({
            data:"Esto solo lo ven las personas con sesion activa",
            user: req.user,
        })
    } catch(e){
       handleHttp(res, 'ERROR_GET_BLOGS')
    }
};


export { getItems };