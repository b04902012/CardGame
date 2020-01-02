function Board(){
    var board = this
    board.card_pair_list = []
    board.num_pairs = 0
    board.putCard = function(fg_url){
        card_pair = [new Card(fg_url[0]), new Card(fg_url[1])]
        card_pair[0].card_id = card_pair[1].card_id = board_num_pairs
        board_num_pairs++
    }
    board.renderBoard = function(){
        var num_cards = board.card_pair_list.length
        var position_list = []
        for(var i=0; i<board.num_pairs; i++){
            position_list.push([i/4,i%4])
        }
        
    }
}
