class Enemy {
  constructor() {
    this.ref = this.init();
    this.styling();
    this.events();
    this.value = Math.floor(Math.random()*11);
    this.killEvent = new CustomEvent("kill",{
        detail: this,
    });
  }
  init() {
    document.body.insertAdjacentHTML("afterbegin", "<div class='enemy'></div>");
    return document.querySelector(".enemy");
  }
  styling() {
    this.ref.style.left =
      Math.floor(Math.random() * (window.innerWidth - 100 + 1)) + "px";
    this.ref.style.top =
      Math.floor(Math.random() * (window.innerHeight - 100 + 1)) + "px";
  }
  events() {
    this.ref.onclick = (e) => {
      this.ref.style.display = "none";
      window.dispatchEvent(this.killEvent)
    };
  }
}

export default Enemy;
