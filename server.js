const app = require("./app.js");
const sequelize = require("./src/database/database");
require("dotenv").config();

sequelize.sync();

const http = require('http');
const port = 3000;


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
