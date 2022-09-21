const UsuarioService = require("../services/UsuarioService");
const AutenticacaoService = require("../services/AutenticacaoService");

module.exports = {
    async doLogin(req, res) {
        try {
            if (req.body.hasOwnProperty('email') && req.body.hasOwnProperty('senha')) {

                const userLogin = await UsuarioService.getByEmail(req.body.email);

                if (userLogin == null) {
                    throw new Error();
                }

                const authenticated = await AutenticacaoService.comparePwd(req.body.senha, userLogin.senha);

                if (authenticated == null) {
                    throw new Error();
                }

                const token = AutenticacaoService.signJwt(userLogin.id);
                res.set('Authorization', `Bearer ${token}`);
                res.status(200).json({
                    user: userLogin,
                    token: token
                });
            } else {
                res.status(400).send("Objeto de requisição deve conter um atributo email e senha");
            }
        } catch {
            res.status(400).send("Senha e/ou usuário incorretos");
        }
    },

    doLogout(req, res) {
        res.set('Authorization', `Bearer `);
        res.status(200).send();
    },
}
