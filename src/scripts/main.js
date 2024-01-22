document.addEventListener('DOMContentLoaded', ()=>{
    const botoes = [...document.querySelectorAll('[data-tab-button]')];

    const heroSelection = document.querySelector('.hero')
    const alturaHero = heroSelection.clientHeight

    window.addEventListener('scroll', ()=>{
        const posicaoAtual = window.scrollY

        if(posicaoAtual < alturaHero){
            ocultaHeader()
        }else{
            exibeHeader()
        }
    })
    
    botoes.map((elemento)=>{
        elemento.addEventListener('click', (botao)=>{
            const abaAlvo = botao.target.dataset.tabButton;
            const abaSelecionada = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            const botaoSelecionado = document.querySelector(`[data-tab-button=${abaAlvo}]`)

            removeBotaoAtivo()
            escondeAbas();

            botaoSelecionado.classList.add('products__tabs__button--is-active')
            abaSelecionada.classList.add('products__list--is-active')
        })
    })
})

function ocultaHeader(){
    const header = document.querySelector('.header')
    header.classList.add('header--is-hidden')
}

function exibeHeader(){
    const header = document.querySelector('.header')
    header.classList.remove('header--is-hidden')
}

function removeBotaoAtivo(){
    const botoes = [...document.querySelectorAll('[data-tab-button]')];

    botoes.map((botao)=>{
        botao.classList.remove('products__tabs__button--is-active')
    })
}

function escondeAbas(){
    const abas = [...document.querySelectorAll('[data-tab-id]')]

    abas.map((aba)=>{
        aba.classList.remove('products__list--is-active')
    })
}