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
import BatalhaChefao from '../components/docs/Modelagem/Cenario/BatalhaChefao'
import CancelaMissao from '../components/docs/Modelagem/Cenario/CancelaMissao'
import ColetaItens from '../components/docs/Modelagem/Cenario/ColetaItens'
import CompletaMissao from '../components/docs/Modelagem/Cenario/CompletaMissao'
import ConsegueTomoDeMissao from '../components/docs/Modelagem/Cenario/ConsegueTomoeDeMissao'
import CriaAvatar from '../components/docs/Modelagem/Cenario/CriaAvatar'
import EntraNaMissao from '../components/docs/Modelagem/Cenario/EntraNaMissao'
import FazMissao from '../components/docs/Modelagem/Cenario/FazMissao'
import PersonalizaAparenciaFisicaDoAvatar from '../components/docs/Modelagem/Cenario/PersonalizaAparenciaFisicaDoAvatar'
import PersonalizaEquipamentoDoAvatar from '../components/docs/Modelagem/Cenario/PersonalizaEquipamentoDoAvatar'
import SocializaNasGuildas from '../components/docs/Modelagem/Cenario/SocializaNasGuildas'
import UsaHabilidade from '../components/docs/Modelagem/Cenario/UsaHabilidade'

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

  "Gamificação": {
    color: "Turquoise",
    lexic: {
      "Batalha Chefão": BatalhaChefao,
      "Cancela Missão": CancelaMissao,
      "Coleta Itens": ColetaItens,
      "Completa Missão": CompletaMissao,
      "Consegue Tomo de Missão": ConsegueTomoDeMissao,
      "Cria Avatar": CriaAvatar,
      "Entra na Missão": EntraNaMissao,
      "Faz Missão": FazMissao,
      "Personaliza Aparência Física do Avatar": PersonalizaAparenciaFisicaDoAvatar,
      "Personaliza Equipamento do Avatar": PersonalizaEquipamentoDoAvatar,
      "Socializa nas Guildas": SocializaNasGuildas,
      "Usa Habilidade": UsaHabilidade,
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
