import React from 'react'
import './reference.scss'
import { Link } from 'react-router-dom'


const reference = props => {
    let re = [
        {
            content: 'http://localhost:3001/Disciplina',
            link: 'http://localhost:3001/Disciplina'
        }, {
            content: 'http://localhost:3001/Disciplina',
            link: 'http://localhost:3001/Disciplina '
        }
    ]

    return (
        <div className="references-conteiner">
            <h1>Referências</h1>
            <ul>
                {
                    re.map(ref => (
                        <li>
                            <Link to={ref['link']} >
                                {ref['content']}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default reference;