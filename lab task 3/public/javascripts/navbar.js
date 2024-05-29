var btn = document.querySelector('#menuBtn');
var active = false;

btn.addEventListener("click", function() {
    // alert("clicked");
  if(active == true) {
    // document.querySelector('.toggle span').classList.add('toggle');
    document.getElementById('sidebar').classList.remove('left-0');
    btn.style.color = "#1d2d44"
    active = false;
}else if(active == false) {
    document.getElementById('sidebar').classList.add('left-0');
    btn.style.color = "#fff"
    active = true;
  }
});