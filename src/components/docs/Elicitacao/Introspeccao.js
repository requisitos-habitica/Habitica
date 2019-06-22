import React from 'react'
import ReactMarkdown from 'react-markdown'
import Card from '../../UI/Card/Card'
import HeadArtefact from '../../HOC/HeadArtefact/HeadArtefact'
import { Link } from 'react-router-dom'


const Introspeccao = () => {

  return (
    <div className='content artefact'>
      <HeadArtefact versions={ null } rastreability={ null }
                    title="Perspectiva do Usuário" author="Youssef Muhamad"/>

    <Card>
        <h2>Primeiro acesso ao aplicativo:</h2>
        <p>Deve aparecer uma mensagem de bem vindo juntamente com um sumário e tutorial com as principais funcionalidade do app.</p>
        <p>Devo ser apresentado com a opção de Registro ou Login.</p>
    </Card>

    <Card>
        <h2>Com o Registro selecionado:</h2>
        <p>Deve aparecer um formulário para que eu preencha os dados como: nome, email e senha.</p>
        <p>Deve dar a opção para me registrar pelo Facebook ou pelo Google.</p>
        <p>Deve ser possível que eu escolha um nome próprio para ser identificado no app.</p>
        <p>Deve aparecer um menu de customização para meu avatar.</p>
        <p>Deve ser possível escolher qual a camisa padrão do avatar.</p>
        <p>Deve ser possível escolher qual a cor da pele do avatar.</p>
        <p>Deve ser possível escolher o penteado e a cor do cabelo do avatar.</p>
        <p>Deve ser possível escolher um óculos para o avatar.</p>
        <p>Deve ser possível escolher uma cadeira de rodas para o avatar.</p>
        <p>Após customizar o avatar, eu devo selecionar qual/quais meu(s) interesse(s) com o app(Trabalho, Exercícios, Saúde, Estudos, Times, Criatividade, Outros).</p>
    </Card>

    <Card>
        <h2>Com o Login selecionado:</h2>
        <p>Deve pedir os email e senha para me logar.</p>
        <p>Deve dar a opção de logar pelo Facebook ou pelo Google.</p>
    </Card>

    <Card>
        <h2>Tela principal:</h2>
        <p>Deve ser possível navegar com facilidade entre Hábitos, Diárias, Afazeres e Recompensas na tela inicial.</p>
        <p>Deve ser possível adicionar um novo hábito com o nome, descrição, dificuldade e a frequência.</p>
        <p>Deve ser possível adicionar uma nova diária com o nome, descrição, dificuldade, checklist, frequência de horas, dias da semana e uma notificação de lembrete em um horário configurado.</p>
        <p>Deve ser possível adicionar um novo afazer com o nome, descrição, dificuldade, checklist, deadline e notificações de lembrete com um horário configurado.</p>
        <p>Deve ser possível comprar um item apropriado para meu avatar ao navegar até as Recompensas.</p>
        <p>Deve ser possível adicionar um ponto positivo em um hábito que completei.</p>
        <p>Deve ser possível adicionar um ponto negativo em um hábito que não completei.</p>
        <p>Deve ser possível marcar uma diária quando eu a completo.</p>
        <p>Deve ser possível desmarcar uma diária.</p>
        <p>Deve ser possível completar um afazer.</p>
    </Card>

    <Card>
        <h2>Hábitos:</h2>
        <p>Ao adicionar um ponto positivo em algum hábito devo ganhar experiência, moeda, mana e causar dano, caso esteja participando de uma missão.</p>
        <p>Ao adicionar um ponto positivo em algum hábito posso ganhar um item aleatório.</p>
        <p>Ao adicionar um ponto negativo em algum hábito, o meu avatar perde pontos em sua barra de vida.</p>
    </Card>
    
    <Card>
        <h2>Diárias:</h2>
        <p>Ao marcar uma diária o devo receber experiência, moedas, mana e causar dano, caso esteja em uma missão.</p>
        <p>Ao desmarcar uma diária devo perder moedas.</p>
    </Card>

    <Card>
        <h2>Afazeres:</h2>
        <p>Ao completar um afazer devo receber experiência, moedas, mana e causar dano, caso esteja em uma missão.</p>
        <p>Ao completar um afazer ele deve desaparecer da lista.</p>
    </Card>

    <Card>
        <h2>Menu Lateral:</h2>
        <p>No menu lateral deve ter vários itens, sendo eles: Tarefas, Habilidades, Pontos, Taverna, Grupo, Guildas, Desafios, Loja, Avatar, Equipamento, Itens, Pets, Gemas e assinatura, Novidades, Ajuda e FAQ, Sobre.</p>
    </Card>
    
    <Card>
        <h2>Grupo:</h2>
        <p>Deve ser possível criar um grupo</p>
        <p>Deve ser possível adicionar outras pessoas ao grupo</p>
        <p>Deve ser possível conversar com o grupo via chat</p>
        <p>Deve ser possível começar uma missão em grupo</p>
    </Card>

    </div>
  )
}

export default Introspeccao