import CriarDesafioPublicoV2 from '../components/docs/Modelagem/Cenario/CriarDesafioPublicoV2'
import DeclararVencedorDeUmDesafioV2 from '../components/docs/Modelagem/Cenario/DeclararVencedorDeUmDesafioV2'
import EntrarEmUmDesafioPublicoV2 from '../components/docs/Modelagem/Cenario/EntrarEmUmDesafioPublicoV2'
import VerProgressoDeParticipantesDeUmDesafioV2 from '../components/docs/Modelagem/Cenario/VerProgressoDeParticipantesDeUmDesafioV2'

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
import ConsegueTomoDeMissao from '../components/docs/Modelagem/Cenario/ConsegueTomoeDeMissaoV2'
import CriaAvatar from '../components/docs/Modelagem/Cenario/CriaAvatarV2'
import EntraNaMissao from '../components/docs/Modelagem/Cenario/EntraNaMissao'
import FazMissao from '../components/docs/Modelagem/Cenario/FazMissao'
import PersonalizaAparenciaFisicaDoAvatar from '../components/docs/Modelagem/Cenario/PersonalizaAparenciaFisicaDoAvatarV2'
import PersonalizaEquipamentoDoAvatar from '../components/docs/Modelagem/Cenario/PersonalizaEquipamentoDoAvatar'
import SocializaNasGuildas from '../components/docs/Modelagem/Cenario/SocializaNasGuildasV2'
import UsaHabilidade from '../components/docs/Modelagem/Cenario/UsaHabilidade';
import SubirNivel from '../components/docs/Modelagem/Cenario/subirNivel';
import EnviarMens from '../components/docs/Modelagem/Cenario/enviarMensagem';
import EnviarGemas from '../components/docs/Modelagem/Cenario/enviarGemas';
import AumentarAtrib from '../components/docs/Modelagem/Cenario/aumentarAtributo';
import fazerAssin from '../components/docs/Modelagem/Cenario/fazerAssinatura';
import mudarConfg from '../components/docs/Modelagem/Cenario/mudarConfSite';
import compGema from '../components/docs/Modelagem/Cenario/comprarGemas';
import AdquirirClass from '../components/docs/Modelagem/Cenario/adquirirClasse';
import morrer from '../components/docs/Modelagem/Cenario/morrer';
import DelCont from '../components/docs/Modelagem/Cenario/deletarConta';
import FazerCont from '../components/docs/Modelagem/Cenario/fazerConta';

const cenarios = {
  "Configurações": {
    color: "pink",
    lexic: {
      "Subir de nível": SubirNivel,
      "Enviar gemas": EnviarGemas,
      "Enviar mensagem": EnviarMens,
      "Aumentar atributo": AumentarAtrib,
      "Fazer assinatura": fazerAssin,
      "Mudar configurações do site": mudarConfg,
      "Comprar gema": compGema,
      "Adquirir uma classe": AdquirirClass,
      "Morrer": morrer,
      "Deletar conta": DelCont,
      "Fazer uma conta": FazerCont
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
      "Criar desafio público": CriarDesafioPublicoV2,
      "Declarar o vencedor de um desafio": DeclararVencedorDeUmDesafioV2,
      "Entrar em um desafio público": EntrarEmUmDesafioPublicoV2,
      "Ver o progresso de outros participantes de um desafio": VerProgressoDeParticipantesDeUmDesafioV2
    }
  }
}

export default cenarios
