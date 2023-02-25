const express = require("express");
const app = express();
const things = require("./things.js");
const pool = require("./queries.js");

app.use("/things", things);

// 1. Menampilkan data seluruh list film
app.get("/", (req, res) => {
	pool.query("SELECT * FROM film", (err, result) => {
		if (err) {
			throw err;
		}
		res.send(result.rows);
	});
});

// 2. Menampilkan data film tertentu berdasarkan id
// ga nangkep maksudnya mau di minta apa..

// 3. Menampilkan list category
app.get("/list-category", (req, res) => {
	pool.query(
		"SELECT * FROM film_category LEFT JOIN film on film_category.film_id = film.film_id",
		(err, result) => {
			if (err) {
				throw err;
			}
			res.send(result.rows);
		}
	);
});

// 4. Menampilkan data list film berdasarkan category
// ga nangkep maksudnya mau di minta apa..

pool.connect((err, res) => {
	console.log(err);
	console.log(res);
	console.log("connected");
});
app.listen(3000);
