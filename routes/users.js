import { Router } from "express";
import { getUsers, getUsersByName, createUser, deleteUser } from "../controllers/users.js";

export const usersRoute = Router();

usersRoute.get('/', async (req, res) => {
    const response = await getUsers();

    const links = response.data.map((user) => 
        `<a href='http://localhost:3020/users/${user.username}'>${user.username}</a>`
    );

    res.send(links.join('<br>')); // Unir los enlaces en un solo string
    
});
usersRoute.get('/:name', async (req, res) => {
    const { name } = req.params;

    const response = await getUsersByName(name)
    console.log(response.data[0].username)
    res.status(response.code).json(response)
})

usersRoute.post('/', async (req, res) => {
    const body = req.body;
    const response = await createUser(body);
    res.status(response.code).json(response);
});

usersRoute.delete('/:username', async (req, res) => {
    const { username } = req.params;
    const response = await deleteUser(username);
    res.status(response.code).json(response);
});






