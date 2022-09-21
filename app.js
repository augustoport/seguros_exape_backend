const express = require("express");
const cors = require('cors')
const bodyParser = require("body-parser");
const UsuarioRoutes = require("./src/routes/v1/UsuarioRouter");
const CotacaoRoutes = require("./src/routes/v1/CotacaoRouter");
const AutenticacaoRoutes = require("./src/routes/v1/AutenticacaoRouter");
const app = express();

const options = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(options))


app.use(bodyParser.json());

app.use('/api/v1/', UsuarioRoutes)
app.use('/api/v1/', CotacaoRoutes)
app.use('/api/v1/', AutenticacaoRoutes)

module.exports = app;
