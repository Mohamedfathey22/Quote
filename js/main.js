var test = [
    {
    qu1: "“Be yourself; everyone else is already taken.”", 
    qu2: "― Oscar Wilde"
},
{
    qu1: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”", 
    qu2: "― Albert Einstein"
},
{
    qu1: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”", 
    qu2: "― Bernard M. Baruch"
},
{
    qu1: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”", 
    qu2: "― Dr. Seuss"
},
{
    qu1: "“Be the change that you wish to see in the world.”", 
    qu2: "― Mahatma Gandhi"
}
];

var end ;
function getqout(){
    var start ;
    var start = Math.floor(Math.random() * (test.length));

    if(start == end){
        start++
    }
    end = start ;
    document.getElementById("qou1").innerHTML= test [start].qu1;
    document.getElementById("qou2").innerHTML= test [start].qu2;
    console.log(start);
}





