module.exports = {
  cotacaoSimulation(tipo, valor, parcelas) {
    return {
        tipo: tipo,
        valor: valor,
        parcelas: parcelas,
        valor_total: valor * 0.2,
        valor_parcela: (valor * 0.2)/parcelas
    }
  }
}
