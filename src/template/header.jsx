import React from 'react'

export default props =>(
    <header>
        <nav className='navbar navbar-expand-lg navbar-light fixed-top navbar-transparente'>
            <div className='container'>
                <a href="#/" className='navbar-brand'>
                    <img src="https://techsantanna.000webhostapp.com/imagens/Logo/emblema.png" alt="" id="tamanho"/>
                    <img src="https://techsantanna.000webhostapp.com/imagens/Logo/nome.png" alt="" id="tamanho2"/>
                </a>
                <button className='navbar-toggler' data-toggle='collapse' data-target='#menu'>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav ml-auto">
                        <li className="navbar-item"><a className="nav-link" id="text-personalizado" href="/"> Home</a></li>
                        <li className="navbar-item"><a className="nav-link" id="text-personalizado" href="#about"> Sobre</a></li>
                        <li className="navbar-item"><a className="nav-link " id="text-personalizado" href="../pages/Projects/1.html">Projetos</a></li>
                        <li className="navbar-item"><a className="nav-link" id="text-personalizado" href="../pages/Contats/contatos.html">Contato</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
)