import React from 'react'
import { Link } from 'react-router-dom'
import './reference.scss'
import References from '../../../utils/references'


const reference = props => {
    return (
        <div className="references-conteiner">
            <h1>Referências</h1>
            <ul>
                {
                    References[props.reference].map(ref => (
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