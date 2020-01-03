function Card(fg_url){
    console.log(fg_url)
    var card = this

    card.bdom = document.createElement('div')
    card.fdom = document.createElement('div')
    card.getDom = function(){
        return [card.bdom, card.fdom]
    }
    card.domPromise = new Promise(function (res,rej){
        card.bdom.classList.add('cardback')
        card.fdom.classList.add('cardfore')
        console.log(card.bdom)
        card.bdom.style.width  = `${card_width}px`
        card.fdom.style.width  = `${card_width}px`
        card.bdom.style.height = `${card_height}px`
        card.fdom.style.height = `${card_height}px`
        card.fdom.style.positon= `absolute`
        card.bdom.style.positon= `absolute`
        card.fdom.style.background = fg_url
        res()
    })

    card.flipFore = async function (){
        await card.domPromise
        card.bdom.style.display = 'none'
        card.fdom.style.display = 'inline-block'
    }
    card.flipBack = async function (){
        await card.domPromise
        card.bdom.style.display = 'inline-block'
        card.fdom.style.display = 'none'
    }
}
