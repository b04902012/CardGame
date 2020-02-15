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
var cards=[];
for(var i=0;i<52;i++){
    cards.push(("0"+i.toString()).slice(-2));
}
cards=randomPermutation(cards)
neusoft.matchingGame.deck=[]
for(var i=0;i<(number_cards[0]*number_cards[1])/2;i++){
    neusoft.matchingGame.deck.push('picture'+cards[i]);
    neusoft.matchingGame.deck.push('text'+cards[i]);
}
neusoft.matchingGame.deck=randomPermutation(neusoft.matchingGame.deck)
var timeLeft;
var paused;
var displayTimeLeft;
var prevTimestamp;
function shuffle(){
    return Math.random()>0.5 ? -1 : 1
}
function selectCard() {
    if(paused)
        return;
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
        });
    }
}
function initializeTimer(){
    timeLeft=timeLimit * 1e3;
    paused=false;
    displayTimeLeft=Math.ceil(timeLeft/1e3);
    prevTimestamp=performance.now();
    $("#time").text(displayTimeLeft);
    $("#gameover").hide();
}
function renderTimer(timestamp){
    if(!paused){
        timeLeft -= timestamp - prevTimestamp;
        $("#control").addClass('pause')
        $("#control").removeClass('resume')
    }
    else{
        $("#control").removeClass('pause')
        $("#control").addClass('resume')
    }
    prevTimestamp = timestamp
        
    if(Math.ceil(timeLeft/1e3) != displayTimeLeft){
        displayTimeLeft = Math.max(Math.ceil(timeLeft/1e3),0);
        $("#time").text(displayTimeLeft);
    }
    if(timeLeft >= 0 && $(".card").length > 0){
        window.requestAnimationFrame(renderTimer);
    }
    else{
        $("#gameover").show();
        $("#score_content").text(Math.max(Math.ceil(timeLeft/1e3),0))
        $("#restart").click(function(){
            location.reload(false)
        })
    }
}
function toggleControl(){
    paused = !paused;
}
