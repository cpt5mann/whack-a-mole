window.onload = function() {
        var dirt = document.getElementsByClassName("dirt");
        var sound = document.getElementById("sound");
        var grid = document.getElementById("dirt-box");
        var score=document.getElementById("score");
        var whacks=document.getElementById("whacks");
    
        
        for(let i = 0; i < dirt.length; i++){
            dirt[i].addEventListener("click", function(){
                if(dirt[i].innerHTML){
                sound.play();
                dirt[i].innerHTML = "";
                } else {
                    console.log("Nothing is in there!");

                }
            })
        }
        var num=10;

        function setMole(){
            var random = Math.floor((Math.random() * Math.floor(dirt.length)));
            var mole = document.createElement("div");
            
            mole.setAttribute("class", "mole");
            if(dirt[random].innerHTML === ""){
                dirt[random].appendChild(mole);
            } else {
                console.log("There are too many moles");
                num=num-1;
                score.innerHTML=num;
}
        }        
function checkloss(){
if(score.innerHTML <= "0"){
    alert("You lose. Refresh to play again.")
}else{
    console.log("still alive");
}
}
checkloss();


        
        
        setInterval(setMole, 1000);
        
}