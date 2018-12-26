import React from 'react'

import Slide from '../template/slide'

export default props =>(
    <div>
        <Slide/>
        <article className="container">
            <section className="row">
                <div className="col-12" >
                    <h1 className="display-3 text-center">Seja Bem-Vindo </h1>
                    <p className=" text-center">
                        Este site foi desenvolvido afim de monstrar meus projetos feito por mim, e mostrar 
                        todos meus conhecimentos adiquerido com os curso feito 
                        na udemy e na faculdade de ciência da computação. 
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 text-center faixa">
                    <div className="col-4 offset-4 offset-sm-2 offset-lg-4 offset-md-1 mb-4">
                        <i className="fas fa-code fa-5x"></i>
                    </div>
                    Nossos desenvolvedores são os melhores do mercado,
                    testamos todos antes de fazer parte da nossa equipe.
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4  text-center faixa">
                    <div className="col-4 offset-4 offset-sm-2 offset-lg-4 offset-md-2 mb-4">
                        <i className="fab fa-android fa-6x"></i>
                    </div>
                    Nossos desenvolvedores são os melhores do mercado,
                    testamos todos antes de fazer parte da nossa equipe.
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4  text-center faixa">
                    <div className="col-4 offset-4 offset-sm-5 offset-lg-4 offset-md-2 mb-4">
                        <i className="far fa-clock fa-5x"></i>
                    </div>
                    Nossos desenvolvedores são os melhores do mercado,
                    testamos todos antes de fazer parte da nossa equipe.
                </div>

                
                <h1><i className="fas fa-angle-right mt-5"></i> Objetivos e Metas</h1>
                <p className="mr-sm-4 mr-lg-5 ml-sm-4 ml-lg-5 lead">
                    Temos como objetivo ser conhecida nacionalmente por diversas empresas pelo nosso trabalho, entregando ótimos software
                    para nossos cliente e no prazo. Revolucionar o mercado é a nossa meta, com a ajuda de inteligencia artificial consiguiremos 
                    atingir essa meta. Nossos desenvolvedores estuda e se empenha em aprender cada vez mais sobre essa área que está sendo 
                    explorada hoje por qualquer empresa de tecnologia e a TechSant'Anna não poderia ficar fora dessa. 
                    estudamos novos metodos. Para mais informações clique no botão abaixo
                </p>
                <a href="pages/Contats/contatos.html" className="btn btn-custom btn-azul">Fale conosco</a>

            </section>
        </article>
    </div>
)