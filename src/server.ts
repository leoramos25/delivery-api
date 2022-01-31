import express from 'express';

const app = express();

app.get('/', (request, response) => {
    return response.json({
        message: "Hi App",
    })
});

app.listen(3333, () => console.log("server is running"));