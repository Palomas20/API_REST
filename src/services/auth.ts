import { Auth } from "../intefaces/auth.interface";
import { User } from "../intefaces/user.interface";
import UserModel from "../models/user";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({email, password, name} : User) => {
    const checkIs = await UserModel.findOne({ email });
    if(checkIs) return "El usuario ya existe";
    const passHash = await encrypt(password);
    const registerNewUser = await UserModel.create({ email, password: passHash, name });
    
    return registerNewUser;
};

const loginUser = async ({email, password}: Auth) => {
    const checkIs = await UserModel.findOne({ email });
    if (!checkIs) return "El usuario no existe";

    const passwordHash = checkIs.password
    const isCorrect = await verified(password, passwordHash);

    if(!isCorrect) return "Contraseña Incorrecta";

    const token = generateToken(checkIs.email);
    const data = {
        token, 
        user: checkIs
    }
    
    return data;
};

export { registerNewUser, loginUser};