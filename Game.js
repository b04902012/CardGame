function Game(){
    var game = this
    game.dom = document.createElement('div')
    game.board = new Board()
    game.promise = new Promise(function (res,rej){
        picture_url_list = randomPermutation(picture_url_list)
        for(let i=0;i<num_pairs;i++){
            console.log(picture_url_list[i])
            game.board.addCardPair([picture_url_list[i], '#F00'])
        }
        game.board.renderBoard()
        game.dom.appendChild(game.board.dom)
        document.body.appendChild(game.dom)
    })
}
