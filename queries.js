const Pool = require("pg").Pool;
const pool = new Pool({
	name: "postgres",
	user: "postgres",
	host: "localhost",
	database: "dvdrental",
	password: "123456",
	port: 5432,
});

module.exports = pool;
