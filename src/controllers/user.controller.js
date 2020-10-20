import User from '../models/user.model';
import * as Aut from '../controllers/autentication.controller';
import config from '../config';
import * as DomainConstant from '../constant/domain/domain';

export const getUsers = async (username,password) => {
    
    const encryptedUser = await Aut.encrypt(username, config.SECURITY_KEY);
    const encryptedPwd = await Aut.encrypt(password, config.SECURITY_KEY);

    const users = await User.find({username: encryptedUser, password: encryptedPwd});
    let result={};
   
    if (users.length === 0){
        result.valid = false;
        result.response = DomainConstant.ERROR_INTERNO;
        return result;
    }
    result.valid = true;
    result.response = users;
    return result;
};

export const createUser = async (req, res) => {
    let dataEncrypted = {};
    
    // user
    var userEncrypted =  await Aut.encrypt(req.body.username, config.SECURITY_KEY);
    userEncrypted = userEncrypted.toString();
    // pwd
    const pwdEncrypted =  await Aut.encrypt(req.body.password, config.SECURITY_KEY);

    dataEncrypted.username = userEncrypted;
    dataEncrypted.password = pwdEncrypted;
    
    const newUser = new User(dataEncrypted);
   
    const user = await newUser.save();
    res.status(200).json({
        user
    });
};