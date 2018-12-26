import React from 'react'

import Card from '../template/card'
import Pagination from '../template/pagination'

export default props =>(
    <article className="container margin">
        <section className="row">
            <ol className="breadcrumb ">
                <li className="breadcrumb-item"><a href="/index.html">Home</a></li>
                <li className="breadcrumb-item active">Projeto</li>
            </ol>
            <h1 className="display-3  border-bottom col-12">Projetos</h1>
            
            <div className="card-deck mt-2" >
                <Card link='#Se%Organize' img='https://techsantanna.000webhostapp.com/imagens/Projetos/Se%20Organize/Se-Organizze.png'
                 title='Se Organizze' subtitle='App Android' text='O se organizze é um app android que foi desenvolvido em Java, que é um clone do app Se organizze ajuda qualquer pessoa com seu controle financeiro...'/>
                
                <Card link='#whatsapp' img='https://techsantanna.000webhostapp.com/imagens/Projetos/WhatsApp/whatsapp.png'
                title='Whatsapp' subtitle='App Android' text='O whatsapp despensa apresentações, hoje é um dos apps mais baixado do mundo e o app de mensagem mais conhecido na atualidade...' />
                
                <Card link='#meio-ambiente-em-jogo' img='https://techsantanna.000webhostapp.com/imagens/Projetos/Meio%20Ambiente%20em%20jogo/meio-Ambiente-em-jogo.png'
                title='Meio Ambiente em Jogo' subtitle='App Android' text='Esse app é um adaptação do app Meio ambiente em Jogo versão <strong>Desktop</strong>,  desenvolvido por eu mesmo, e o <a href="https://github.com/Alves-gu">Gustavo Alves</a>, meu colega da faculdade...'/>
            </div>

            <div className="card-deck mt-2" >
                <Card link='#Rick%and%Morty' img='https://techsantanna.000webhostapp.com/imagens/Projetos/Rick%20and%20Morty/rick-and-morty-season-3.jpg'
                 title='Rick and Morty' subtitle='App Android' text='Um dos desenhos americanos mais famosos da atualidade é Rick and Morty, esse app surge como se fosse da netflix junto com...'/>
                
                <Card link='#Aprenda%Inglês<' img='https://techsantanna.000webhostapp.com/imagens/Projetos/Aprenda%20ingles/ingles.jpg'
                 title='Aprenda Inglês<' subtitle='App Android' text='Esse app foi desenvolvido para o usúario aprender englês, pouco parecido com DuoLingo, só que mais infantil ...'/>
                
                <Card link='#ATM-Consultoria' img='https://techsantanna.000webhostapp.com/imagens/Projetos/ATM%20Consultoria/atm-consultoria.png'
                 title='ATM-Consultoria' subtitle='App Android' text='ATM-Consultoria é baseado em uma empresa de Consultoria fictícia no qual uso meus conhecimento com o basic activity e algumas APIs de about...'/>
            </div>
            <div className="card-deck mt-2 " >
               
                <Card link='#tecblog' img='https://techsantanna.000webhostapp.com/imagens/Projetos/TecBlog/TecBlog.png'
                title='TecBlog' subtitle='WebSite' text='O TecBlog é website de um blog de tecnologia criado durante as aulas de desenvolvimento web...'/>

                <Card link='#museu%nacional' img='https://techsantanna.000webhostapp.com/imagens/Projetos/museu-nacional/museu.jpeg'
                title='Museu Nacional' subtitle='WebSite' text='O famoso Museu Nacional que infelizmente e recentemente foi incendiado e mas fiz esse website no ...'/>

                <div className="card ">
                    <div id="noticia">
                        <a href="WebSite/noticia-cidade.html"><img src="https://techsantanna.000webhostapp.com/imagens/Projetos/noticias/noticia-logo.png" className="" width="70%"  width="100%" alt=""/></a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title"><a href="WebSite/noticia-cidade.html" className="text-dark">Noticias na Cidade</a></h4>
                        <h6 className="card-subtitle">WebSite</h6>
                        <p className="card-text ">Este website de noticia de uma cidade qualquer, pode ser considerado um template para projetos que requerem...</p>
                        <a className="btn btn-outline-primary" href="WebSite/noticia-cidade.html">Leia mais</a>
                    </div>
                </div>
            </div>
            
            <Pagination disabledPrevious='disabled' previous='#projects' activeOne='active' next='#projects/2' />
            <ol class="breadcrumb mt-2 col-12 bg-light">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item active">Projetos</li>
            </ol>
        </section>
    </article>
)