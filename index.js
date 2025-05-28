import express from 'express';
import { usersRoute } from './routes/users.js';

const app = express();

app.use(express.json());// Genera los bodys 

app.get('/', (req, res) => {
    res.send(`
        <h1 style="color:red;" >Dice Leo que se quiere conectar al Mondongo</h1>
        <a href='http://localhost:3020/users'>Usuarios</a>
    `);
});

app.use('/users', usersRoute);

const server = app.listen(3020, () => {
    console.log(`el server corre en http://localhost:${server.address().port}`);
});









