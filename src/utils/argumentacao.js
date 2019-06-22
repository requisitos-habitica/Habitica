import ARGEscolhaAppV1 from '../components/docs/assets/ARG/ARGEscolhaAppV1.jpg'
import ARGEscolhaAppV2 from '../components/docs/assets/ARG/ARGEscolhaAppV2.jpg'
import ARGFuncionalidadeV1 from '../components/docs/assets/ARG/ARGFuncionalidadeV1.jpg'
import ARGMudancaAppV1 from '../components/docs/assets/ARG/ARGMudancaAppV1.jpg'
import ARGNaoEscopo from '../components/docs/assets/ARG/v1-naoescolo-albino.png'
import members from './members'

const argumentacao = {
    'Discussões sobre o tema e o escopo': [
        {
            id: 'ARG01V1',
            img: ARGEscolhaAppV1,
            autor: 'Grupo',
            versao: 1,
            descricao: 'Escolha do app a ser utilizado durante a disciplina',
            data: '10/10/2019',
            fontes: [{nome: 'Google', link:'https://www.google.com/'}]
        },
        {
            id: 'ARG01',
            img: ARGEscolhaAppV2,
            autor: members.Esio,
            versao: 2,
            descricao: 'Escolha do app a ser utilizado durante a disciplina',
            data: '10/10/2019',
            fontes: [{nome: 'Google', link:'https://www.google.com/'}]
        },
        {
            id: 'ARG02',
            img: ARGFuncionalidadeV1,
            autor: members.Rogerio,
            versao: 1,
            descricao: 'Argumentação para definir o escopo a ser abordado durante a disciplina',
            data: '10/10/2019',
            fontes: [{nome: 'Google', link:'https://www.google.com/'}]
        },
        {
            id: 'ARG03',
            img: ARGMudancaAppV1,
            autor: members.Esio,
            versao: 1,
            descricao: 'Argumentação descrevendo a possível mudança de escolha do app',
            data: '10/10/2019',
            fontes: [{nome: 'Google', link:'https://www.google.com/'}]
        },
        {
            id: 'ARG04',
            img: ARGNaoEscopo,
            autor: members.Gabriel,
            versao: 1,
            descricao: 'Argumentação para definir o escopo a ser abordado durante a disciplina',
            data: '10/10/2019',
            fontes: [{nome: 'Google', link:'https://www.google.com/'}]
        },
    ],
}

export default argumentacao