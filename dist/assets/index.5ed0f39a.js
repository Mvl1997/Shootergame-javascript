(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();class l{constructor(){this.x=200,this.y=200,this.ref=this.init(),this.events()}init(){return document.body.insertAdjacentHTML("afterbegin",' <div class="crosshair"></div>'),document.querySelector(".crosshair")}events(){document.body.onmousemove=i=>{this.x=i.clientX,this.y=i.clientY,this.styling()},document.body.onclick=()=>{document.querySelector("#sound").currentTime=.7,document.querySelector("#sound").play()},window.addEventListener("kill",()=>{this.ref.style.filter="invert(100%)",setTimeout(()=>{this.ref.style.filter="invert(0%)"},100)})}styling(){this.ref.style.left=this.x+"px",this.ref.style.top=this.y+"px"}}class c{constructor(){this.ref=this.init(),this.styling(),this.events(),this.value=Math.floor(Math.random()*11),this.killEvent=new CustomEvent("kill",{detail:this})}init(){return document.body.insertAdjacentHTML("afterbegin","<div class='enemy'></div>"),document.querySelector(".enemy")}styling(){this.ref.style.left=Math.floor(Math.random()*(window.innerWidth-100+1))+"px",this.ref.style.top=Math.floor(Math.random()*(window.innerHeight-100+1))+"px"}events(){this.ref.onclick=i=>{this.ref.style.display="none",window.dispatchEvent(this.killEvent)}}}new l;setInterval(function(){new c},500);window.addEventListener("kill",function(){document.body.style.backgroundColor="red",setTimeout(function(){document.body.style.backgroundColor="black"},50)});
