window.onload = function(){
    var dirt=document.getElementsByClassName("dirt");
    var sound=document.getElementById("sound");
    var grid=document.getElementById("dirt-box");
console.log(dirt.innerHtml);
    dirt.addEventListener("click", function(){
       if (dirt.innerHtml=undefined) {
           console.log("nothing in here")
       } else {
           sound.play();
           
       }
    })
 
    function setMole(){
var mole=document.getElementById("mole");
var randomnum= math.random(0, dirt.length);
console.log(randomnum);

    }
}