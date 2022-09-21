module.exports = {
  cotarSeguro(tipo, valor, parcelas) {
    return {
        tipo: tipo,
        valor: valor,
        valor_total: valor * 0.2,
        parcelas: parcelas,
        valor_parcela: (valor * 0.08)/parcelas
    }
  }
}
