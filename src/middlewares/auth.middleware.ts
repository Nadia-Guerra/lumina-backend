import {Request, Response, NextFunction} from 'express';
import admin from '../config/firebase.js';

export const verifyToken = async (req:Request, res:Response, next:NextFunction) => {
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(401).json({message: 'No token provided'});
    }

    const token = authHeader.split(' ')[1]

    try{
        const decoded = await admin.auth().verifyIdToken(token!); //quitar el !
        (req as any).user = decoded; //correccion rapida, luego se arregla
        next();
    }catch(error){
        return res.status(401).json({message: 'Invalid token'});
    }  
}