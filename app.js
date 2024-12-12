const express = require('express');
const serevr = express();
const MoviesRouter = require('./routes/movies')
const cors = require('cors');
const corsOptions = {
    origin: process.env.WEB_APP_REACT_ORIGIN,
    optionsSuccessStatus: 200
}
console.log(corsOptions);
serevr.use(cors(corsOptions));


const HOST = process.env.HOST || 'http://localhost';
const PORT = process.env.PORT || '3001'

serevr.use('/api/movies', MoviesRouter);

serevr.listen(PORT, () => {
    console.log(`server is listening on port  ${HOST}:${PORT}`);

})


serevr.get('/', (req, res) => {
    res.send('server is up and running!');
})


