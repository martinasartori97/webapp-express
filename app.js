const express = require('express');
const server = express();
const MoviesRouter = require('./routes/movies')
const cors = require('cors');
const corsOptions = {
    origin: "http://localhost:5173",
    optionsSuccessStatus: 200
}
console.log(corsOptions);
server.use(cors(corsOptions));


const HOST = process.env.HOST || 'http://localhost';
const PORT = process.env.PORT || '3001'

server.use('/api/movies', MoviesRouter);

server.listen(PORT, () => {
    console.log(`server is listening on port  ${HOST}:${PORT}`);

})


server.get('/', (req, res) => {
    res.send('server is up and running!');
})


