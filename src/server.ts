import express from 'express';

import "./database";

const app = express();

app.get("/", (request, response) => {
    return response.json({
        message: "Hello world!"
    });
});

app.post("/", (request, response) => {
    return response.json({
        message: "User cadastrado com sucesso!"
    });
});

app.listen(3333, () => console.log("Server running on PORT 3333"));