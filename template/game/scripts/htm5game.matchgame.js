/**
 * Created by mengdi on 2015/10/29.
 */

function randomPermutation(array){
    permutated_array = []
    while(array.length > 0){
        idx = Math.floor(Math.random()*array.length)
        permutated_array.push(array[idx])
        array.splice(idx,1)
    }
    return permutated_array
}

var neusoft={};
neusoft.matchingGame={};
neusoft.matchingGame.cardWidth=250;neusoft.matchingGame.cardHeight=250;
var score=0;
var cards=[];
for(var i=0;i<52;i++){
    cards.push(("0"+i.toString()).slice(-2));
}
neusoft.matchingGame.deck=[]
for(var i=0;i<15;i++){
    neusoft.matchingGame.deck.push('picture'+cards[i]);
    neusoft.matchingGame.deck.push('text'+cards[i]);
}
neusoft.matchingGame.deck=randomPermutation(neusoft.matchingGame.deck)
function shuffle(){
    return Math.random()>0.5 ? -1 : 1
}
function selectCard() {
    var $fcard=$(".card-flipped");
    if($fcard.length>1){
        return;
    }
    $(this).addClass("card-flipped");
    var $fcards=$(".card-flipped");
    if($fcards.length==2){
        setTimeout(function(){
            checkPattern($fcards);
        },700);
    }
}
function checkPattern(cards){
    var pattern1 = $(cards[0]).data("pattern");
    var pattern2 = $(cards[1]).data("pattern");
    $(cards).removeClass("card-flipped");
    if(pattern1.slice(-2)==pattern2.slice(-2)){
        $(cards).addClass("card-removed")
        .bind("webkitTransitionEnd",function(){
            $(this).remove();
            score++;
        });
    }
}
