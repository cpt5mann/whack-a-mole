window.onload = function() {
        var dirt = document.getElementsByClassName("dirt");
        var sound = document.getElementById("sound");
        var grid = document.getElementById("dirt-box");
        var score=document.getElementById("score");
        var whacks=document.getElementById("whacko");
    
        var numwhacks=1;

        for(let i = 0; i < dirt.length; i++){
            dirt[i].addEventListener("click", function(){
                if(dirt[i].innerHTML){
                sound.play();
                dirt[i].innerHTML = "";
                numwhacks++;
                whacks.innerHTML=numwhacks;
                } else {
                    console.log("Nothing is in there!");

                }
            })
        }
        var num=100;

        function setMole(){
            var random = Math.floor((Math.random() * Math.floor(dirt.length)));
           var random2=Math.floor((Math.random() * 20 +1));
            var mole = document.createElement("div");
            
            mole.setAttribute("class", "mole");
            if(dirt[random].innerHTML === ""){
                dirt[random].appendChild(mole);
            } else {
                console.log("There are too many moles");
                num=num-random2;
                score.innerHTML=num;
}
                
function checkloss(){
if(score.innerHTML <= "0"){
    score.innerHTML="0";
    alert("You lose. Your score was " + numwhacks + " points. Refresh to try again?")

}else{
    console.log("still alive");
}
}
checkloss();

        }
        
        
        setInterval(setMole, 500);
        
}