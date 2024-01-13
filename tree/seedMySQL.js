var mysql = require('mysql2');
var drop = 'TRUNCATE TABLE trees;'
var seedQuery = `
  INSERT INTO trees (title, nick, avatar, about)
  VALUES 
    ("Лист", "list", "/images/list.jpg", "Листок лепесток он удачный паренек"),
    
    ("Корень", "koren", "/images/stvol.jpg", "Ствол это опора дерева"),
    
    ("Ствол", "stvol", "/images/koren.jpg", "Корень питает дерево");
`;
var connection = mysql.createConnection({
host : '127.0.0.1',
port: '3306',
user : 'root',
password : 'Rema2005',
database: 'tree1'
});
connection.connect()
console.log("Running SQL seed...")
// Drop content
connection.query(drop, err => {
if (err) {
throw err
}
// Seed content
connection.query( seedQuery, err => {
if (err) {
throw err
}
console.log("SQL seed completed!")
connection.end()
})
})