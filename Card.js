function Card(fg_url){
    var card = this

    card.bdom = document.createElement('div')
    card.fdom = document.createElement('div')
    card.getDom = function(){
        return [card.bdom, card.fdom]
    }
    card.domPromise = new Promise(function (res,rej){
        card.bdom.classList.add('cardback')
        card.fdom.classList.add('cardfore')
        card.bdom.style.width  = `{card_width}px`
        card.fdom.style.width  = `{card_width}px`
        card.bdom.style.height = `{card_height}px`
        card.fdom.style.height = `{card_height}px`
        card.fdom.style.background = `#000`
        res()
    })

    card.flipFore = function (){
        await card.domPromise
        card.bdom.style.display = 'none'
        card.fdom.style.display = 'block'
    }
    card.flipBack = function (){
        await card.domPromise
        card.bdom.style.display = 'block'
        card.fdom.style.display = 'none'
    }
}
