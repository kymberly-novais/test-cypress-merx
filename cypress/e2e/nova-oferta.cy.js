/// <reference types="cypress" />

//const { entries } = require("cypress/types/lodash")

import Logon from '../support/pages/Logon'
import NovaOferta from '../support/pages/NovaOferta'

describe('Nova oferta', () => {
    
    beforeEach('Realizando login',() => {
    Logon.acessarSite();
    Logon.preecherLogin();
    Logon.acessarNovaOferta();    
    })
  
    it('Oferta - Fixação depósito', () => {
      NovaOferta.criarOfertaFIxacaoDeposito();

    })
    it('Oferta - Fixação Compra', () => {
        NovaOferta.criarOfertaFIxacaoCompra();
  
    })
    it('Oferta - Fixação Compra - Negativo', () => {
        NovaOferta.criarOfertaFIxacaoCompraNeg();
    })
    it('Oferta - Compra - Campro obrigatorio em branco', () => {
        NovaOferta.criarOfertaCompraFOB();
       
    })

  })
  