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
            
            <div className="card-deck  mt-1" >
                
                <Card link='#anna%bela' img='https://techsantanna.000webhostapp.com/imagens/Projetos/AnnaBella/AnnaBella.png'
                title='Anna Bella' subtitle='WebSite' text='Anna Bella é uma modelo fictícia, esse site é um template para quem quiser fazer um web site proprio para modelos(as)...'/>
                
                <Card link='#finans' img='https://techsantanna.000webhostapp.com/imagens/Projetos/finans/finans.png'
                title='Finans' subtitle='WebSite' text='O Finans é um website que bem parecido com o site do Organizze, o qual eu fiz um clone do app para Android...'/>
                
                <Card link='#chale%hotel' img='https://techsantanna.000webhostapp.com/imagens/Projetos/chale/Chale.png'
                title='Chalé Hotel' subtitle='WebSite' text='O Chalé Hotel é um hotel fictício para seus clientes possam entrar em contato, vertificar o que o hotel oferece e verificar ...'/>
					
            </div>

            <div class="card-deck mt-2">
                
                <Card link='#mata%mosquito' img='https://techsantanna.000webhostapp.com/imagens/Projetos/Mata-Mosquito/game.png'
                title='Mata Mosquito' subtitle='WebSite' text='Matar mosquito virou um jogo, tente matar o maximo de mosquito que conseguir...'/>
                
                <Card link='#meio%ambiente%em%jogo%desktop' img='https://techsantanna.000webhostapp.com/imagens/Projetos/Meio%20Ambiente%20em%20jogo%20-%20Desktop/meio-Ambiente-em-jogo.png'
                title='Meio Ambiente em Jogo - Desktop' subtitle='Desktop' text='A primeira versão do jogo, Meio Ambiente Em Jogo, foi feita em desktop utilizando JavaFX. O jogo foi criado durante...'/>
                
                <Card link='#jokenpo' img='https://techsantanna.000webhostapp.com/imagens/Projetos/JoKenPo/jokenpo.png'
                title='JoKenPo' subtitle='Android' text='Quem nunca jogou jokenpo ? um dos jogos mais famosos quando se é criança, favorito para escolher qual decisao tomar entre duas pessoas...'/>
            </div>
            <div class="card-deck mt-2">

                <Card link='#spotify' img='https://techsantanna.000webhostapp.com/imagens/Projetos/spotify/spotify.png'
                title='Spotify' subtitle='WebSite' text='O maior serviço de stream de musica, conhecido como spotify, fiz um clone site dele durante o curso de web na udemy...'/>
                
                <Card link='#card%View' img='https://techsantanna.000webhostapp.com/imagens/Projetos/Card%20View/card-view.jpg'
                title='Card View' subtitle='Android' text='Card view é uma API do Java que faz cards no Android achei legal colocalo  aqui pois tem é bem parecedo com o Instagram pois...'/>
                
                <Card link='#lista%de%tarefas' img='https://techsantanna.000webhostapp.com/imagens/Projetos/Lista%20de%20tarfas/lista-de-tarefa.jpg'
                title='Lista de Tarefas' subtitle='Android' text='Quem nunca utilizou uma lista de tarefas para nao se esquecer das atividade do dia a dia? por isso durante o curso de android fiz esse ...'/>

            </div>
            
            <Pagination disabledNext='disabled' previous='#projects' activeTwo='active' next='#projects/2' />
            
            <ol class="breadcrumb mt-2 col-12 bg-light">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item active">Projetos</li>
            </ol>
        </section>
    </article>
)