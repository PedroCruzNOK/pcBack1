const mysql = require ('mysql');

const mysqlconection = mysql.createConnection({
    host:'basededatos',
    user:'pedro',
    password:'simons83',
    database: 'contolvacacional'
});
mysqlconection.connect(function (err){
    if (err){
        console.log(err);
        return;
    } else{
        console.log('base de datos conectada');
    }
});

module.exports = mysqlconection;
