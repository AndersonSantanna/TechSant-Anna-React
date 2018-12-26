import React from 'react'

export default props =>(
    <div id="carousel-controles"  className="carousel slide"  data-ride="carousel">
        <ol className="carousel-indicators">
            <li className="active" data-target="#carousel-indicadores" data-slide-to="0"></li>
            <li data-target="#carousel-indicadores" data-slide-to="1"></li>
            <li data-target="#carousel-indicadores" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active col-12 " >
                <img  width="100%" src="https://techsantanna.000webhostapp.com/imagens/slide/Tenha%20Sites%20Responsivos.png"  alt=""/> 
            </div>
            <div class="carousel-item col-12 ">
                <img class="img-fluid" src="https://techsantanna.000webhostapp.com/imagens/slide/Solu%C3%A7%C3%B5es%20Inteligente%20para%20Sua%20Empresa.png" alt=""/>
            </div>		
            <div class="carousel-item col-12 ">
                <a href="pages/Contats/contatos.html">
                    <img class="img-fluid" src="https://techsantanna.000webhostapp.com/imagens/slide/contato.png" alt=""/>
                </a>
            </div>				
            </div>
            <a href="#carousel-controles" class="carousel-control-prev" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a href="#carousel-controles" class="carousel-control-next" data-slide="next">
                <span class="carousel-control-next-icon"></span>
            </a>
        </div>	
)