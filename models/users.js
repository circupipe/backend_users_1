import mongoose from "mongoose";
import dotenv from "dotenv";
import { CreateResponse } from "../utils/Response.js";

dotenv.config(); 

const connectionMongoDB = process.env.MONGODB_URI;

mongoose.connect(connectionMongoDB)
    .then(() => {
        console.log('Conected to MongoDB');
    }).catch(err => {
        console.error('Error connecting to MongoDB', err);
    });

export class Users {
    static async GetUsers() {
        const users = await mongoose.connection.db.collection('users').find({}).toArray();

        return CreateResponse('GET', 'users', users);
    }

    static async GetUsersByName(name) {
        const user = await mongoose.connection.db.collection('users').find({ username: name }).toArray();

        return CreateResponse('GET', 'users', user);
    }

    static async CreateUser(body) {

        const createNewUser = await body.save();
        console.log(createNewUser)

        return CreateResponse('POST', 'user', createNewUser);
    }

    static async DeleteUser(username) {
        const response = await mongoose.connection.db.collection('users').deleteOne({ username: username });
        return CreateResponse('DELETE', 'users', response);
    }


}





