import React from 'react'

export default props =>(
    <div className="card ">
        <a href={props.link}><img src={props.img} width="100%" alt=""/></a>
        <div className="card-body">
            <h4 className="card-title"><a href={props.link} className="text-dark">{props.title}</a></h4>
            <h6 className="card-subtitle">{props.subtitle}</h6>
            <p className="card-text">{props.text}</p>
            <a className="btn btn-outline-primary" href={props.link}>Leia mais</a>
        </div>
    </div>
)