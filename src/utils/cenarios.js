import CriarDesafioPublicoV1 from '../components/docs/Modelagem/Cenario/CriarDesafioPublicoV1'
import DeclararVencedorDeUmDesafioV1 from '../components/docs/Modelagem/Cenario/DeclararVencedorDeUmDesafioV1'
import EntrarEmUmDesafioPublicoV1 from '../components/docs/Modelagem/Cenario/EntrarEmUmDesafioPublicoV1'
import VerProgressoDeParticipantesDeUmDesafioV1 from '../components/docs/Modelagem/Cenario/VerProgressoDeParticipantesDeUmDesafioV1'

import ComoContribuir from '../components/docs/Modelagem/Cenario/ComoContribuir'
import ContribuirArtes from '../components/docs/Modelagem/Cenario/ContribuirArtes'

const cenarios = {
  /* "Fóruns": {
    color: "pink",
    lexic: {
      "Guerreiro": null,
    }
  },
  
  "Loja": {
    color: "aqua",
    lexic: {
      "Cartões": null,
    }
  },

  "Grupos": {
    color: "SpringGreen",
    lexic: {
      "Grupo": null,
    }
  },

  "Gameficação": {
    color: "Turquoise",
    lexic: {
      "Mana": null,
    }
  }, */

  "Guia de Contribuição": {
    color: "Orchid",
    lexic: {
      "Contribuir para o Habitica": ComoContribuir,
      "Contribuir para as Artes do Habitica": ContribuirArtes
    }
  },

  /* 
  "Tarefas": {
    color: "Gold",
    lexic: {
      "Tarefa": null,
    }
  },

  "Inventário": {
    color: "LightCoral",
    lexic: {
      "Ovo de Pet": null,
    }
  }, */

  "Desafios": {
    color: "DeepPink",
    lexic: {
      "Criar desafio público": CriarDesafioPublicoV1,
      "Declarar o vencedor de um desafio": DeclararVencedorDeUmDesafioV1,
      "Entrar em um desafio público": EntrarEmUmDesafioPublicoV1,
      "Ver o progresso de outros participantes de um desafio": VerProgressoDeParticipantesDeUmDesafioV1
    }
  }
}

export default cenarios
