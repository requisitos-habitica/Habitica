import CriarDesafioPublicoV1 from '../components/docs/Modelagem/Cenario/CriarDesafioPublicoV1'
import DeclararVencedorDeUmDesafioV1 from '../components/docs/Modelagem/Cenario/DeclararVencedorDeUmDesafioV1'
import EntrarEmUmDesafioPublicoV1 from '../components/docs/Modelagem/Cenario/EntrarEmUmDesafioPublicoV1'
import VerProgressoDeParticipantesDeUmDesafioV1 from '../components/docs/Modelagem/Cenario/VerProgressoDeParticipantesDeUmDesafioV1'

import ComoContribuir from '../components/docs/Modelagem/Cenario/ComoContribuir'
import ContribuirArtes from '../components/docs/Modelagem/Cenario/ContribuirArtes'
import ContribuirDesign from '../components/docs/Modelagem/Cenario/ContribuirDesign'
import ContribuirHistoria from '../components/docs/Modelagem/Cenario/ContribuirHistoria'
import ContribuirTraducao from '../components/docs/Modelagem/Cenario/ContribuirTraducao'
import ContribuirWiki from '../components/docs/Modelagem/Cenario/ContribuirWiki'
import ChocarOvoDeMascote from '../components/docs/Modelagem/Cenario/ChocarOvoDeMascote';
import AlimentarMascote from '../components/docs/Modelagem/Cenario/AlimentarMascote';
import ProporMissoes from '../components/docs/Modelagem/Cenario/ProporMissoes';
import EquiparAvatarComItemDeMao from '../components/docs/Modelagem/Cenario/EquiparAvatarComItemDeMao';
import EquiparAvatarComCapacete from '../components/docs/Modelagem/Cenario/EquiparAvatarComCapacete';
import EquiparAvatarComArmadura from '../components/docs/Modelagem/Cenario/EquiparAvatarComArmadura';
import EquiparAvatarComAcessorioDeCabeca from '../components/docs/Modelagem/Cenario/EquiparAvatarComAcessorioDeCabeca';
import EquiparAvatarComOculos from '../components/docs/Modelagem/Cenario/EquiparAvatarComOculos';
import EquiparAvatarComFundo from '../components/docs/Modelagem/Cenario/EquiparAvatarComFundo';
import EquiparAvatarComMascote from '../components/docs/Modelagem/Cenario/EquiparAvatarComMascote';
import EquiparAvatarComMontaria from '../components/docs/Modelagem/Cenario/EquiparAvatarComMontaria';
import EquiparAvatarComItemDeCorpo from '../components/docs/Modelagem/Cenario/EquiparAvatarComItemDeCorpo';

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
      "Contribuir para o Habitica": ComoContribuir,
      "Contribuir para as Artes do Habitica": ContribuirArtes,
      "Contribuir no Design do Habitica": ContribuirDesign,
      "Contribuir para as Histórias do Habitica": ContribuirHistoria,
      "Contribuir para a tradução do Habitica": ContribuirTraducao,
      "Contribuir para a Wiki Habitica": ContribuirWiki
    }
  },

  
  "Tarefas": {
    color: "Gold",
    lexic: {
      "Tarefa": null,
    }
  },
  */

  "Inventário": {
    color: "LightCoral",
    lexic: {
      "Chocar Ovo de Mascote": ChocarOvoDeMascote,
      "Alimentar Mascote": AlimentarMascote,
      "Propor Missões": ProporMissoes,
      "Equipar Avatar com Item de Mão": EquiparAvatarComItemDeMao,
      "Equipar Avatar com Capacete": EquiparAvatarComCapacete,
      "Equipar Avatar com Armadura": EquiparAvatarComArmadura,
      "Equipar Avatar com Acessório de Cabeça": EquiparAvatarComAcessorioDeCabeca,
      "Equipar Avatar com Óculos": EquiparAvatarComOculos,
      "Equipar Avatar com Item de Corpo": EquiparAvatarComItemDeCorpo,
      "Equipar Avatar com Fundo": EquiparAvatarComFundo,
      "Equipar Avatar com Mascote": EquiparAvatarComMascote,
      "Equipar Avatar com Montaria": EquiparAvatarComMontaria,

    }
  },

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
