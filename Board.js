function Board(){
    var board = this
    board.card_list = []
    board.num_pairs = 0
    board.addCardPair = function(fg_url_list){
        card_pair = [new Card(fg_url_list[0]), new Card(fg_url_list[1])]
        card_pair[0].card_id = card_pair[1].card_id = board_num_pairs
        card_list.append(card_pair[0])
        card_list.append(card_pair[1])
        board_num_pairs++
    }
    board.dom = document.createElement('div')
    board.domPromise = new Promise(function(res,rej){
        board.dom.classList.add('board')
    })
    board.renderBoard = function(){
        await board.domPromise
        var num_cards = board.card_pair_list.length
        var position_list = []
        for(var i=0; i<board.num_pairs; i++){
            position_list.push([i/4,i%4])
        }
        position_list = randomPermutation(position_list)
        for(var i=0; i<board.num_pairs; i++){
            card_doms = board.card_list[i].getDom()
            fdom = card_doms[0]
            bdom = card_doms[1]
            fdom.style.left = position_list[i][0]
            fdom.style.top = position_list[i][1]
            bdom.style.left = position_list[i][0]
            bdom.style.top = position_list[i][1]

            bdom.addEventListener('click',board.card_list[i].flipFore)
            fdom.addEventListener('click',board.card_list[i].flipBore)
        }
    }
}
