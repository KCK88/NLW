//importar dependencia do sqlite3
const sqlite = require("sqlite3").verbose()

//criar objetos para operações no  db
const db = new sqlite.Database("./src/database/database.db")

module.exports = db
    ////utilizar o obj do db, para as operações
    //db.serialize(() => {
    //    //criar uma tabela
    //    db.run(`
    //        CREATE TABLE IF NOT EXISTS places (
    //            id INTEGER PRIMARY KEY AUTOINCREMENT,
    //            image TEXT,
    //            name TEXT,
    //            adress TEXT,
    //            adress2 TEXT,
    //            stade TEXT,
    //            city TEXT,
    //            items TEXT
    //        );
    //    `)
    //        // inserir dados
    //    const query = `
    //        INSERT INTO places (
    //            image,
    //            name,
    //            adress,
    //            adress2,
    //            stade,
    //            city,
    //            items
    //
    //        ) VALUES(?,?,?,?,?,?,?);
    //    `
    //    const values = [
    //        "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    //        "Papersider",
    //        "Guilherme Gemballa, Jardim América",
    //        "N° 260",
    //        "Santa Catarina",
    //        "Rio do Sul",
    //        "Residuos eletrônicos, Lampadas"
    //    ]
    //
    //    function afterInsertData(err) {
    //        if (err) {
    //            return console.log(err)
    //        }
    //        console.log("Cadastrado com sucesso")
    //        console.log(this)
    //    }
    //
    //    db.run(query, values, afterInsertData)

//
//excluir
//db.run(`DELETE FROM places WHERE id = ?`, [3], function(err) {
//    if (err) {
//        return console.log(err)
//    }
//    console.log("Tabela excluida com sucesso")
//})

//    db.all(`SELECT* FROM places`, function(err, rows) {
//        if (err) {
//            return console.log(err)
//        }
//        console.log("Seus registros: ")
//        console.log(rows)
//    })
//})
//