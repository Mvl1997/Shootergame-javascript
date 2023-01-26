import Crosshair from "./crosshair.js";
import Enemy from "./enemy.js";

new Crosshair();

setInterval(function () {
  new Enemy();
}, 500);

window.addEventListener("kill",function () {
    document.body.style.backgroundColor = "red";
    setTimeout(function(){
        document.body.style.backgroundColor = "black";
    },50)
})
