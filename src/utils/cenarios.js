import CriarDesafioPublicoV1 from '../components/docs/Modelagem/Cenario/CriarDesafioPublicoV1'
import DeclararVencedorDeUmDesafioV1 from '../components/docs/Modelagem/Cenario/DeclararVencedorDeUmDesafioV1'
import EntrarEmUmDesafioPublicoV1 from '../components/docs/Modelagem/Cenario/EntrarEmUmDesafioPublicoV1'
import VerProgressoDeParticipantesDeUmDesafioV1 from '../components/docs/Modelagem/Cenario/VerProgressoDeParticipantesDeUmDesafioV1'

const cenarios = {
  "Fóruns": {
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
  },

  "Guia de Contribuição": {
    color: "Orchid",
    lexic: {
      "Projeto de Código Aberto": null,
    }
  },

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
  },

  "Desafios": {
    color: "DeepPink",
    lexic: {
      "Criar Desafio Publico": CriarDesafioPublicoV1,
      "Declarar Vencedor de um Desafio": DeclararVencedorDeUmDesafioV1,
      "Entrar em um Desafio Publico": EntrarEmUmDesafioPublicoV1,
      "Ver Progresso de Participantes de um Desafio": VerProgressoDeParticipantesDeUmDesafioV1
    }
  }
}

export default cenarios
