import React from 'react'

export default props =>(
    <footer>
        <div className="container">
            <div className="row">
                <div className="navbar-brand col-lg-3 col-md-3 col-sm-5 col-10">
                    <a href="/">
                        <img className="img-fluid" src="https://techsantanna.000webhostapp.com/imagens/Logo/emblema.png" width="30%" alt=""/>
                        <img className="img-fluid" src="https://techsantanna.000webhostapp.com/imagens/Logo/nome.png" width="80%" alt=""/>
                    </a> 
                </div>
                <div className="col-4 col-sm-3 col-md-2 col-lg-2 offset-md-0 offset-lg-1 mt-3">
                    <h4>Company</h4>
                    <ul className="navbar-nav">
                        <li><a href="/pages/about/sobre.html">Sobre</a></li>
                        <li><a href="/pages/Contats/contatos.html">Contato</a></li>
                    </ul>
                </div>
                <div className="col-3 col-sm-3 col-md-2 col-lg-2 mt-3">
                    <h4>Projects</h4>
                    <ul className="navbar-nav">
                        <li><a href="/pages/Projects/1.html">Android</a></li>
                        <li><a href="/pages/Projects/1.html">Desktop</a></li>
                        <li><a href="/pages/Projects/1.html">Websites</a></li>
                    </ul>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-3">
                    <h4>Social Networks</h4>
                    <ul className="navbar-nav">
                        <li>
                            <a href="https://www.facebook.com/anderson.pereirasantanna" className="btn" target="_blank">
                                <i id="face-f" className="fab fa-facebook-f fa-2x"></i>
                            </a>
                            <a href="https://www.instagram.com/anderson.sant_anna/?hl=pt-br" className="btn btn-light" target="_blank" >
                                <i id="insta" className="fab fa-instagram fa-2x"></i>
                            </a>
                            <a href="https://github.com/AndersonSantanna" className="btn btn-light" target="_blank">
                                <i id="git" className="fab fa-github fa-2x"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/anderson-sant-anna/" className="btn btn-primary" target="_blank">
                                <i id="face-f" className="fab fa-linkedin fa-2x"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="center">
            &copy; Todos direitos autorais reservados por Anderson Sant'Anna
        </div>
    </footer>
)