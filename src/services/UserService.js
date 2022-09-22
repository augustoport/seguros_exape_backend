const Usuario= require("../models/User");

module.exports = {
  async getByEmail(email) {
    const usuario = await Usuario.findOne({ where: {'email': email } });
    return usuario;
  }
}
