import React from 'react'

export default props =>(
    <article class="container margin">
        <section>
            <h1><i class="fas fa-angle-right"></i> Contatos</h1>
            <h5>Para entrar em contato comigo, pode me mandar uma mensagem por email, basta preencher os campos e clicar em enviar, que entrarei em contato o mais rapido.</h5>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdaZMeTzhgeyzFLfBI_r3s0tz6gr-DQcZmoFuRhi5DlA19Vlg/viewform?embedded=true" width="100%" height="891" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
            <h1>
                <i class="fas fa-angle-right"></i> Redes Sociais
            </h1>
            <div class="ml-4">
                <a href="" class="btn mb-4"><i id="face" class="fab fa-facebook display-4"></i> Facebook</a>
                <a href="https://www.instagram.com/anderson.sant_anna/?hl=pt-br" target="_blank" class="btn mb-4"><i id="insta" class="fab fa-instagram display-4"></i> Instagram</a>
                <a href="https://github.com/AndersonSantanna " class="btn mb-4" target="_blank"><i id="git" class="fab fa-github display-4"></i> GitHub</a>
                <a href="https://www.linkedin.com/in/anderson-sant-anna/" class="btn mb-4" target="_blank"><i class="fab fa-linkedin display-4"></i>LinkedIn</a>
            </div>
            
            <h1>
                <i class="fas fa-angle-right"></i> Telefone e E-mail
            </h1>
            <h4 class="ml-3">
                <i class="fas fa-phone"></i><a href="tel:+5511945563680">+55 (11) 94556-3680</a><br/>
            </h4>
            <h4 class="ml-3">
                <i class="far fa-envelope"></i> anderson.santanna14@gmail.com
            </h4>
        </section>
    </article>
)