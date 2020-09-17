const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

//parse requests of content-type - application/json
app.use(bodyParser.json());

//parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcom to khoitran application" });
});

//create a new table user_roles to foreignkey 2 tables
const db = require("./models");
db.sequelize.sync();

const Role = db.role;
db.sequelize.sync({ force: true }).then(() => {
    console.log('Drop and Resync DB');
    initial();
});
function initial() {
    Role.create({
        id: 1,
        name: "user"
    });
    Role.create({
        id: 2,
        name: "moderator"
    });
    Role.create({
        id: 3,
        name: "admin"
    });
}

//routes
require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);

//set port , listen to requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});