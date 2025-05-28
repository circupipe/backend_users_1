import { Users } from "../models/users.js";
import { UserSchema } from "../schemas/user.js";
import mongoose from "mongoose";

export async function getUsers() {
    const response = await Users.GetUsers();

    return response;
};

export async function getUsersByName(name) {
    const response = await Users.GetUsersByName(name);

    return response;
}

export async function createUser(body) {

    let newUser;
    console.log(body)
    const UserModel = mongoose.model('users', UserSchema);

    const existingUser = await mongoose.connection.db.collection('users').find({ username: body.username }).toArray();

    if (existingUser.length > 0) {
        newUser = null;
    } else {
        newUser = new UserModel(body) //scope
    }
    const response = await Users.CreateUser(newUser);

    return response;
}

export async function deleteUser(username) {
    const response = await Users.DeleteUser(username);
    return response;
}