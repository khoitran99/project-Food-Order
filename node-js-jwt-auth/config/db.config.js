module.exports = {
    HOST : "localhost",
    USER : "root",
    PASSWORD : "1209",
    DB : "testdb3",
    dialect : "mysql",
    pool:{
        max : 5,
        min : 0,
        acquire : 30000,
        idle : 10000
    }
};