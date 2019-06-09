import contributors from './contributors'

import RPAlbinoV1 from '../components/docs/assets/RP/RPAlbinoV1.png'
import RPAlbinoV2 from '../components/docs/assets/RP/RPAlbinoV2.png'
import RPDutraV1 from '../components/docs/assets/RP/RPDutraV1.jpg'
import RPEsioV1 from '../components/docs/assets/RP/RPEsioV1.jpg'
import RPPheoV1 from '../components/docs/assets/RP/RPPheoV1.jpg'
import RPRogerV1 from '../components/docs/assets/RP/RPRogerV1.jpg'
import RPSalehV1 from '../components/docs/assets/RP/RPSalehV1.jpg'
import RPYoussefV1 from '../components/docs/assets/RP/RPYoussefV1.jpg'
import RPYoussefV2 from '../components/docs/assets/RP/RPYoussefV2.png'

import RPContribuicaoV1 from '../components/docs/assets/RP/RPContribuicaoV1.jpg'
import RPDesafiosV1 from '../components/docs/assets/RP/RPDesafiosV1.jpeg'
import RPGamificacaoV1 from '../components/docs/assets/RP/RPGamificacaoV1.jpg'
import RPGeral1_2V1 from '../components/docs/assets/RP/RPGeral1-2V1.jpg'
import RPGeral2_2V1 from '../components/docs/assets/RP/RPGeral2-2V1.jpg'
import RPGeralV2 from '../components/docs/assets/RP/RPGeralV2.png'
import RPGruposV1 from '../components/docs/assets/RP/RPGruposV1.jpg'
import RPInventarioV1 from '../components/docs/assets/RP/RPInventarioV1.png'
import RPLojasV1 from '../components/docs/assets/RP/RPLojasV1.jpg'
import RPTarefasV1 from '../components/docs/assets/RP/RPTarefasV1.png'

const richpictures = {
    'Individuais': {
        [contributors[0].name]: [RPEsioV1],
        [contributors[1].name]: [RPDutraV1],
        [contributors[2].name]: [RPYoussefV1, RPYoussefV2],
        [contributors[3].name]: [RPPheoV1],
        [contributors[4].name]: [RPSalehV1],
        [contributors[5].name]: [RPAlbinoV1, RPAlbinoV2],
        [contributors[6].name]: [RPRogerV1],

    },
    'Grupo': {
        'Geral': [RPGeral1_2V1, RPGeral2_2V1, RPGeralV2],
        'Inventário': [RPInventarioV1],
        'Grupo': [RPGruposV1],
        'Lojas': [RPLojasV1],
        'Desafios': [RPDesafiosV1],
        'Tarefas': [RPTarefasV1],
        'Contribuindo': [RPContribuicaoV1],
        'Gamificação': [RPGamificacaoV1],
    }
}

export default richpictures