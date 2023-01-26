class Crosshair {
  constructor() {
    this.x = 200;
    this.y = 200;
    this.ref = this.init();
    this.events();
  }
  init() {
    document.body.insertAdjacentHTML(
      "afterbegin",
      ` <div class="crosshair"></div>`
    );
    return document.querySelector(".crosshair");
  }
  events() {
    document.body.onmousemove = (e) => {
      this.x = e.clientX;
      this.y = e.clientY;
      this.styling();
    };
    document.body.onclick = () =>{
      document.querySelector("#sound").currentTime = 0.7;
      document.querySelector("#sound").play();
    };
    window.addEventListener("kill", ()=>{
      this.ref.style.filter ="invert(100%)";
      setTimeout(()=> { 
        this.ref.style.filter ="invert(0%)";
      },100)
    })
  }


  styling() {
    this.ref.style.left = this.x + "px";
    this.ref.style.top = this.y + "px";
  }
}

export default Crosshair;
