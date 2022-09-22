const Cotacao = require("../models/Cotation");
const { cotacaoSimulation } = require("../services/CotationService");

module.exports = {
  async process(request, response) {
    try {
      if (request.body.hasOwnProperty('tipo') && request.body.hasOwnProperty('valor') && request.body.hasOwnProperty('parcelas')) {
        const cotacao = cotacaoSimulation(request.body.tipo, request.body.valor, request.body.parcelas);
        response.status(200).json(cotacao);
      }
      else {
        response.status(400).send("Objeto de requisição deve conter atributo tipo e valor");
      }
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async create(request, response) {
    try {
      const cotacao = await Cotacao.create({usuario_id: request.params.id_usuario, ...request.body});
      response.status(201).json(cotacao);
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async getByUser(request, response) {
    try {
      const id = request.params.id_usuario;
      const cotacoes = await Cotacao.findAll({ where: {'usuario_id': id } });
      response.status(200).json(cotacoes);
    } catch (error) {
      response.status(400).send(error);
    }
  },
};
