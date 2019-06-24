import React from 'react'
import richpictures from '../../../utils/richpictures'
import CardsGridLayout from '../../UI/CardsGridLayout/CardsGridLayout'
import Modal from '../../HOC/Modal/Modal'
import './PreRastreabilidade.scss'

const RichPicture = () => {

  const [fullSizeImg, setFullSizeImg] = React.useState(null)

  const openArtefactFullSize = (img) => setFullSizeImg(img)
  const closeArtefactFullSize = () => setFullSizeImg(null)

  return (
    <div className="content artefact">
      <h1>Rich Pictures</h1>
      <h2 className='style-header'>Metodologia:</h2>
      <p>Os Rich Pictures são modelos que permitem a análise de problemas e a expressão de ideias.
        
        O modelo é para ser de fácil compreensão para qualquer pessoa, para que possa ser construído de maneira colaborativa.
      </p>
      <br></br>
      <p>A metodologia adotada pelo grupo para a construção dos Rich Pictures foi separada em três partes:
        <ol className='align-itens'>
          <li>Cada integrante montou o seu Rich Picture do funcionamento do Habitica no geral.</li>
          <li>Com os Rich Pictures feitos por cada integrante, o grupo se reuniu e sintetizou tudo em um Rich Picture só que abordava todos os aspectos gerais do Habitica</li>
          <li>Os integrantes montaram também Rich Pictures individuais de cada aspecto do Habitica, como a funcionalidades, as técnicas de gamificação e o guia de contribuição.</li>
        </ol>
        Seguem os Rich Pictures construídos:
      </p>
      { fullSizeImg ? <Modal onClose={closeArtefactFullSize}> <img src={fullSizeImg} style={{width: "auto", height: "85vh", border:".4rem solid #7300B5"}}/> </Modal> : null }
      <CardsGridLayout obj={ richpictures } onClick={ openArtefactFullSize }/>
    </div>
  )
}

export default RichPicture