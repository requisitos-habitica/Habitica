import Afazer from '../components/docs/Modelagem/Lexico/Afazer'
import AdicionarTarefasDeDesafioV1 from '../components/docs/Modelagem/Lexico/AdicionarTarefasDeDesafioV1'
import CategoriaV1 from '../components/docs/Modelagem/Lexico/CategoriaV1'
import CompletarTarefaDiaria from '../components/docs/Modelagem/Lexico/CompletarTarefaDiaria'
import ConcluirAfazer from '../components/docs/Modelagem/Lexico/ConcluirAfazer'
import CriarAfazer from '../components/docs/Modelagem/Lexico/CriarAfazer'
import CriarDesafioV1 from '../components/docs/Modelagem/Lexico/CriarDesafioV1'
import CriarHabito from '../components/docs/Modelagem/Lexico/CriarHabito'
import CriarTarefaDiaria from '../components/docs/Modelagem/Lexico/CriarTarefaDiaria'
import DeclararVencedorDoDesafioV1 from '../components/docs/Modelagem/Lexico/DeclararVencedorDoDesafioV1'
import DecrementarHabito from '../components/docs/Modelagem/Lexico/DecrementarHabito'
import DeixarDesafioV1 from '../components/docs/Modelagem/Lexico/DeixarDesafioV1'
import DesafioV1 from '../components/docs/Modelagem/Lexico/DesafioV1'
import EditarAfazer from '../components/docs/Modelagem/Lexico/EditarAfazer'
import EditarHabito from '../components/docs/Modelagem/Lexico/EditarHabito'
import EditarTarefaDiaria from '../components/docs/Modelagem/Lexico/EditarTarefaDiaria'
import ExcluirAfazer from '../components/docs/Modelagem/Lexico/ExcluirAfazer'
import ExcluirHabito from '../components/docs/Modelagem/Lexico/ExcluirHabito'
import ExcluirTarefaDiaria from '../components/docs/Modelagem/Lexico/ExcluirTarefaDiaria'
import Habito from '../components/docs/Modelagem/Lexico/Habito'
import IncrementarHabito from '../components/docs/Modelagem/Lexico/IncrementarHabito'
import ListaDeTarefas from '../components/docs/Modelagem/Lexico/ListaDeTarefas'
import ParticipanteV1 from '../components/docs/Modelagem/Lexico/ParticipanteV1'
import PremioV1 from '../components/docs/Modelagem/Lexico/PremioV1'
import ReceberRecompensa from '../components/docs/Modelagem/Lexico/ReceberRecompensa'
import ResetarTarefaDiaria from '../components/docs/Modelagem/Lexico/ResetarTarefaDiaria'
import SeJuntarAoDesafioV1 from '../components/docs/Modelagem/Lexico/SeJuntarAoDesafioV1'
import Tarefa from '../components/docs/Modelagem/Lexico/Tarefa'
import TarefaDiaria from '../components/docs/Modelagem/Lexico/TarefaDiaria'
import ChocarOvo from '../components/docs/Modelagem/Lexico/ChocarOvo';
import OvoDeMascote from '../components/docs/Modelagem/Lexico/OvoDeMascote';
import PocaoDeEclosao from '../components/docs/Modelagem/Lexico/PocaoDeEclosao';
import Mascote from '../components/docs/Modelagem/Lexico/Mascote';
import Montaria from '../components/docs/Modelagem/Lexico/Montaria';
import ArmarioEncantado from '../components/docs/Modelagem/Lexico/ArmarioEncantado';
import Domado from '../components/docs/Modelagem/Lexico/Domado';
import Comida from '../components/docs/Modelagem/Lexico/Comida';
import PergaminhoDeMissao from '../components/docs/Modelagem/Lexico/PergaminhoDeMissao';
import ItemDeMao from '../components/docs/Modelagem/Lexico/ItemDeMao';
import Equipamento from '../components/docs/Modelagem/Lexico/Equipamento';
import Estabulo from '../components/docs/Modelagem/Lexico/Estabulo';
import AlvoDeHabilidade from '../components/docs/Modelagem/Lexico/AlvoDeHabilidade'
import BatalhaDeChefao from '../components/docs/Modelagem/Lexico/BatalhaDeChefao'
import Chefao from '../components/docs/Modelagem/Lexico/Chefao'
import ConvidarParaMissao from '../components/docs/Modelagem/Lexico/ConvidarParaMissao'
import DarDano from '../components/docs/Modelagem/Lexico/DarDano'
import DiretrizDaComunidade from '../components/docs/Modelagem/Lexico/DiretrizDaComunidade'
import DonoDeMissao from '../components/docs/Modelagem/Lexico/DonoDeMissao'
import EquipamentoDeBatalha from '../components/docs/Modelagem/Lexico/EquipamentoDeBatalha'
import Experiencia from '../components/docs/Modelagem/Lexico/Experiencia'
import Fantasia from '../components/docs/Modelagem/Lexico/Fantasia'
import Guilda from '../components/docs/Modelagem/Lexico/Guilda'
import GuildaPrivada from '../components/docs/Modelagem/Lexico/GuildaPrivada'
import GuildaPublica from '../components/docs/Modelagem/Lexico/GuildaPublica'
import Mana from '../components/docs/Modelagem/Lexico/Mana'
import MissaoDeColeta from '../components/docs/Modelagem/Lexico/MissaoDeColeta'
import MissaoDeMascote from '../components/docs/Modelagem/Lexico/MissaoDeMascote'
import TomoDeMissao from '../components/docs/Modelagem/Lexico/TomoDeMissao'

const lexicos = {
  "Fóruns": {
    color: "pink",
    lexic: {
      "Guerreiro": null,
      "Bônus de atributo": null,
      "Mago": null,
      "Curador": null,
      "Ladino": null,
      "Força": null,
      "Inteligência": null,
      "Constituição": null,
      "Percepção": null,
      "Gema": null,
      "Moeda": null,
    }
  },
  
  "Loja": {
    color: "aqua",
    lexic: {
      "Cartões": null,
      "Loja Sazonal": null,
      "Viajantes do Tempo": null,
      "Ampulheta Mística": null,
      "Loja": null,
    }
  },

  "Grupos": {
    color: "SpringGreen",
    lexic: {
      "Grupo": null,
      "Chat": null,
      "Membros": null,
    }
  },

  "Gamificação": {
    color: "Turquoise",
    lexic: {
      "Mana": Mana,
      "Equipamento de Batalha": EquipamentoDeBatalha,
      "Fantasia": Fantasia,
      "Guilda": Guilda,
      "Diretriz da Comunidade": DiretrizDaComunidade,
      "Guilda Pública": GuildaPublica,
      "Guilda Privada": GuildaPrivada,
      "Experiência": Experiencia,
      "Chefão": Chefao,
      "Dar Dano": DarDano,
      "Convidar para Missão": ConvidarParaMissao,
      "Tomo de Missão": TomoDeMissao,
      "Missão de Coleta": MissaoDeColeta,
      "Missão de Mascote": MissaoDeMascote,
      "Batalha de Chefão": BatalhaDeChefao,
      "Dono de missão": DonoDeMissao,
      "Alvo da Habilidade": AlvoDeHabilidade,
    }
  },

  "Guia de Contribuição": {
    color: "Orchid",
    lexic: {
      "Projeto de Código Aberto": null,
      "Wiki": null,
      "Contribuir para o Habitica": null,
      "Ferreiros (Blacksmiths)": null,
      "API do Habitica": null,
      "Pixel Art": null,
      "Traduzir o Habitica": null,
      "Embaixadores": null,
      "Escribas": null,
      "Contadores de História": null,
      "Desafiantes": null,
      "Taverna": null,
    }
  },

  "Tarefas": {
    color: "Gold",
    lexic: {
      "Tarefa": Tarefa,
      "Tarefa Diária": TarefaDiaria,
      "Afazer": Afazer,
      "Hábito": Habito,
      "Lista de Tarefas": ListaDeTarefas,
      "Criar tarefa diária": CriarTarefaDiaria,
      "Editar tarefa diária": EditarTarefaDiaria,
      "Excluir tarefa diária": ExcluirTarefaDiaria,
      "Completar tarefa diária": CompletarTarefaDiaria,
      "Resetar tarefa diária": ResetarTarefaDiaria,
      "Criar hábito": CriarHabito,
      "Editar hábito": EditarHabito,
      "Excluir hábito": ExcluirHabito,
      "Decrementar hábito": DecrementarHabito,
      "Incrementar hábito": IncrementarHabito,
      "Criar afazer": CriarAfazer,
      "Editar afazer": EditarAfazer,
      "Excluir o afazer": ExcluirAfazer,
      "Concluir o afazer": ConcluirAfazer,
      "Receber recompensa": ReceberRecompensa,
    }
  },

  "Inventário": {
    color: "LightCoral",
    lexic: {
      "Chocar Ovo": ChocarOvo,
      "Ovo de Mascote": OvoDeMascote,
      "Poção de Eclosão": PocaoDeEclosao,
      "Mascote": Mascote,
      "Montaria": Montaria,
      "Armário Encantado": ArmarioEncantado,
      "Domado": Domado,
      "Comida": Comida,
      "Pergaminho de Missão": PergaminhoDeMissao,
      "Item de Mão": ItemDeMao,
      "Equipamento": Equipamento,
      "Estábulo": Estabulo,
    }
  },

  "Desafios": {
    color: "DeepPink",
    lexic: {
      "Desafio": DesafioV1,
      "Categoria": CategoriaV1,
      "Criar desafio": CriarDesafioV1,
      "Prêmio": PremioV1,
      "Se juntar ao desafio": SeJuntarAoDesafioV1,
      "Participante": ParticipanteV1,
      "Declarar vencedor do desafio": DeclararVencedorDoDesafioV1,
      "Deixar desafio": DeixarDesafioV1,
      "Adicionar tarefas de desafio": AdicionarTarefasDeDesafioV1,
    }
  }
}

export default lexicos
