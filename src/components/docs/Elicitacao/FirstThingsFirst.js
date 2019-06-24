import React from 'react'
import Card from '../../UI/Card/Card'
import HeadArtefact from '../../HOC/HeadArtefact/HeadArtefact'
import { HashLink as Link } from 'react-router-hash-link'

const FirstThingsFirst = () => {

  return (
    <div className='content artefact'>
      <HeadArtefact versions={ null } rastreability={ null }
                    title="First Things First" author="Gabriel Albino"/>
    

    <Card>
        <h2>Rastreabilidade</h2>
        <ul>
            <li><Link smooth to='/Questionario'>Questionario</Link></li>
        </ul>
    </Card>

      <Card style = { {padding: "1rem"} }>
        <table class="table table-bordered table-hover table-condensed">
            <thead><tr><th title="Field #1">Funcionalidade</th>
            <th title="Field #2">Beneficio Relativo</th>
            <th title="Field #3">Penalidade Relativa</th>
            <th title="Field #4">Valor Total</th>
            <th title="Field #5">Valor %</th>
            <th title="Field #6">Custo Relativo</th>
            <th title="Field #7">Custo %</th>
            <th title="Field #8">Risco Relativo</th>
            <th title="Field #9">Risco %</th>
            <th title="Field #10">Prioridade</th>
            </tr></thead>
            <tbody><tr>
            <td>RF03</td>
            <td align="right">7</td>
            <td align="right">2</td>
            <td align="right">16</td>
            <td>26%</td>
            <td align="right">4</td>
            <td>17%</td>
            <td align="right">2</td>
            <td>14%</td>
            <td>0,27083333300</td>
            </tr>
            <tr>
            <td>RF01</td>
            <td align="right">5</td>
            <td align="right">5</td>
            <td align="right">15</td>
            <td>25%</td>
            <td align="right">5</td>
            <td>21%</td>
            <td align="right">2</td>
            <td>14%</td>
            <td>0,18796992500</td>
            </tr>
            <tr>
            <td>RF04</td>
            <td align="right">5</td>
            <td align="right">8</td>
            <td align="right">18</td>
            <td>29%</td>
            <td align="right">8</td>
            <td>33%</td>
            <td align="right">5</td>
            <td>36%</td>
            <td>0,06531531530</td>
            </tr>
            <tr>
            <td>RF02</td>
            <td align="right">4</td>
            <td align="right">4</td>
            <td align="right">12</td>
            <td>20%</td>
            <td align="right">7</td>
            <td>29%</td>
            <td align="right">5</td>
            <td>36%</td>
            <td>0,05221932110</td>
            </tr>
            <tr>
            <td>Total</td>
            <td align="right">21</td>
            <td align="right">19</td>
            <td align="right">61</td>
            <td>100%</td>
            <td align="right">24</td>
            <td>100%</td>
            <td align="right">14</td>
            <td>100%</td>
            <td>-</td>
            </tr>
        </tbody></table>
      </Card>

    </div>
  )
}

export default FirstThingsFirst