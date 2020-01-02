function Game(){
    var game = this
    game.dom = document.createElement('div')
    game.board = new Board()
    game.promise = new Promise(function (res,rej){
        for(let i=0;i<picture_url_list.length){
            game.board.pushCardPair(picture_url_list[i], '#F00')
        }
        game.board.renderBoard()
    })
}
