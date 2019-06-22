import React from 'react'

import Card from '../../UI/Card/Card'
import HeadArtefact from '../../HOC/HeadArtefact/HeadArtefact'

import img1 from '../../docs/assets/QUEST/1.png'
import img21 from '../../docs/assets/QUEST/2.1.png'
import img22 from '../../docs/assets/QUEST/2.2.png'
import img31 from '../../docs/assets/QUEST/3.1.png'
import img32 from '../../docs/assets/QUEST/3.2.png'
import img33 from '../../docs/assets/QUEST/3.3.png'
import img41 from '../../docs/assets/QUEST/4.1.png'
import img42 from '../../docs/assets/QUEST/4.2.png'
import img43 from '../../docs/assets/QUEST/4.3.png'
import img51 from '../../docs/assets/QUEST/5.1.png'
import img52 from '../../docs/assets/QUEST/5.2.png'
import img53 from '../../docs/assets/QUEST/5.3.png'
import img61 from '../../docs/assets/QUEST/6.1.png'
import img62 from '../../docs/assets/QUEST/6.2.png'
import img71 from '../../docs/assets/QUEST/7.1.png'
import img72 from '../../docs/assets/QUEST/7.2.png'
import img81 from '../../docs/assets/QUEST/8.1.png'
import img82 from '../../docs/assets/QUEST/8.2.png'
import img91 from '../../docs/assets/QUEST/9.1.png'
import img92 from '../../docs/assets/QUEST/9.2.png'
import img101 from '../../docs/assets/QUEST/10.1.png'
import img102 from '../../docs/assets/QUEST/10.2.png'
import img111 from '../../docs/assets/QUEST/11.1.png'
import img112 from '../../docs/assets/QUEST/11.2.png'
import img121 from '../../docs/assets/QUEST/12.1.png'
import img122 from '../../docs/assets/QUEST/12.2.png'
import img131 from '../../docs/assets/QUEST/13.1.png'
import img132 from '../../docs/assets/QUEST/13.2.png'
import img141 from '../../docs/assets/QUEST/14.1.png'
import img142 from '../../docs/assets/QUEST/14.2.png'
import img151 from '../../docs/assets/QUEST/15.1.png'
import img152 from '../../docs/assets/QUEST/15.2.png'
import img161 from '../../docs/assets/QUEST/16.1.png'
import img162 from '../../docs/assets/QUEST/16.2.png'
import img17 from '../../docs/assets/QUEST/17.png'



const Questionario = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Questionário" author="Lucas Dutra"/>

    <Card>
      <h2>Questão 01</h2>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <img src = {img1} style={{height: '23rem'}}/>
      </div>
    </Card>

    <Card>
      <h2>Questão 02</h2>

      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <img src = {img21} style={{height: '23rem'}}/>
          <img src = {img22} style={{height: '23rem'}}/>
      </div>
    </Card>

    <Card>
      <h2>Questão 03</h2>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <img src = {img33} style={{height: '23rem'}}/>
      </div>
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p>* Entre 19 e 30 anos</p>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <img src = {img32} style={{height: '23rem'}}/>
      </div>
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p>* Acima de 30 anos</p>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <img src = {img31} style={{height: '23rem'}}/>
      </div>
    </Card>

    <Card>
      <h2>Questão 04</h2>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <img src = {img42} style={{height: '23rem'}}/>
      </div>
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p>* Entre 19 e 30 anos</p>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <img src = {img43} style={{height: '23rem'}}/>
      </div>
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p>* Acima de 30 anos</p>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <img src = {img41} style={{height: '23rem'}}/>
      </div>
    </Card>

    <Card>
      <h2>Questão 05</h2>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <img src = {img52} style={{height: '23rem'}}/>
      </div>
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p>* Entre 19 e 30 anos</p>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <img src = {img51} style={{height: '23rem'}}/>
      </div>
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p>* Acima de 30 anos</p>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <img src = {img53} style={{height: '23rem'}}/>
      </div>
    </Card>

    <Card>
      <h2>Questão 06</h2>

      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <img src = {img62} style={{height: '23rem'}}/>
          <img src = {img61} style={{height: '23rem'}}/>
      </div>
    </Card>

    <Card>
      <h2>Questão 07</h2>

      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <img src = {img71} style={{height: '23rem'}}/>
          <img src = {img72} style={{height: '23rem'}}/>
      </div>
    </Card>

    <Card>
      <h2>Questão 08</h2>

      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <img src = {img82} style={{height: '23rem'}}/>
          <img src = {img81} style={{height: '23rem'}}/>
      </div>
    </Card>

    <Card>
      <h2>Questão 09</h2>

      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <img src = {img92} style={{height: '23rem'}}/>
          <img src = {img91} style={{height: '23rem'}}/>
      </div>
    </Card>

    <Card>
      <h2>Questão 10</h2>

      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <img src = {img102} style={{height: '23rem'}}/>
          <img src = {img101} style={{height: '23rem'}}/>
      </div>
    </Card>

    <Card>
      <h2>Questão 11</h2>

      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <img src = {img112} style={{height: '23rem'}}/>
          <img src = {img111} style={{height: '23rem'}}/>
      </div>
    </Card>

    <Card>
      <h2>Questão 12</h2>

      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <img src = {img122} style={{height: '23rem'}}/>
          <img src = {img121} style={{height: '23rem'}}/>
      </div>
    </Card>

    <Card>
      <h2>Questão 13</h2>

      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <img src = {img132} style={{height: '23rem'}}/>
          <img src = {img131} style={{height: '23rem'}}/>
      </div>
    </Card>

    <Card>
      <h2>Questão 14</h2>

      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <img src = {img142} style={{height: '23rem'}}/>
          <img src = {img141} style={{height: '23rem'}}/>
      </div>
    </Card>

    <Card>
      <h2>Questão 15</h2>

      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <img src = {img152} style={{height: '23rem'}}/>
          <img src = {img151} style={{height: '23rem'}}/>
      </div>
    </Card>

    <Card>
      <h2>Questão 16</h2>

      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <img src = {img162} style={{height: '23rem'}}/>
          <img src = {img161} style={{height: '23rem'}}/>
      </div>
    </Card>

    <Card>
      <h2>Questão 17</h2>

      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <img src = {img17} style={{height: '23rem'}}/>
      </div>
    </Card>

  </div>
)

export default Questionario