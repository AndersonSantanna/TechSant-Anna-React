import React from 'react'

export default props =>(
    <ul className="pagination ml-auto mr-auto mt-5">
        <li className={` page-item ${props.disabledPrevious}`}>
            <a href={props.previous} className="page-link">Anterior</a>
        </li>
        <li className={` page-item ${props.activeOne}`}>
            <a className="page-link" href={props.previous}>1</a>
        </li>
        <li className={` page-item ${props.activeTwo}`}>
            <a href={props.next} className="page-link">2</a>
        </li>
        <li className={` page-item ${props.disabledNext}`}>
            <a href={props.next} className="page-link">Próximo</a>
        </li>
    </ul>
)