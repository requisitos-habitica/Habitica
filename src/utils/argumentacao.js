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
            name: 'Argumentação de escolha da Aplicação',
            img: ARGEscolhaAppV1,
            autor: 'Grupo',
            versao: 1,
            descricao: 'Escolha do app a ser utilizado durante a disciplina'
        },
        {
            id: 'ARG01',
            name: 'Argumentação de escolha da Aplicação',
            img: ARGEscolhaAppV2,
            autor: members.Esio,
            versao: 2,
            descricao: 'Escolha do app a ser utilizado durante a disciplina'
        },
        {
            id: 'ARG02',
            name: 'Argumentação de Definição do Escopo',
            img: ARGFuncionalidadeV1,
            autor: members.Rogerio,
            versao: 1,
            descricao: 'Argumentação para definir o escopo a ser abordado durante a disciplina'
        },
        {
            id: 'ARG03',
            name: 'Argumentação de Mudança da Aplicação',
            img: ARGMudancaAppV1,
            autor: members.Esio,
            versao: 1,
            descricao: 'Argumentação descrevendo a possível mudança de escolha do app'
        },
        {
            id: 'ARG04',
            name: 'Argumentação de Definição do Não Escopo',
            img: ARGNaoEscopo,
            autor: members.Gabriel,
            versao: 1,
            descricao: 'Argumentação para definir o não escopo a ser abordado durante a disciplina'
        },
    ],
}

export default argumentacao