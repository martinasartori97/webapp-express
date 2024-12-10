const connection = require('../database/connection')
function index(req, res) {
    connection.query(`SELECT* FROM movies`, (err, results) => {
        if (err) return res.status(500).json({ err: err })

        res.json({
            movies: results,
            count: results.lenght
        })
    })
}


function show(req, res) {
    const id = req.params.id
    const sql = `SELECT * FROM movies WHERE id = ?`;
    const reviewssql = `SELECT * FROM reviews WHERE movie_id = ?`;


    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ err: err })
        if (results.lenght == 0) return res.status(404).json({ err: 'movie not found' })

        console.log(results);

        connection.query(reviewssql), [id], (err, reviewsResults) => {
            if (err) return res.status(500).json({ err: err })
            console.log('reviews', reviewsResults);

        }

        const movie = {
            ...results[0],

        }
        res.json({
            movie
        })



    })
}


module.exports = {
    index,
    show

}