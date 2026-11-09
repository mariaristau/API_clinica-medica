import mysql from "mysql2/promise";

const conexao = mysql.createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true, // é uma fila de espera
    connectionLimit: 10 // é o tanto que atende por vez, depois de atender os 10 ele vai ir pra lista de espera
});

export default conexao;