let buttonel=document.getElementById("button1");
let button2el= document.getElementById("button2");
let title=document.getElementById("0");
let headercolor=document.querySelector("#header");
let sidebar= document.querySelector("#sidebar");
console.log(headercolor)

buttonel.addEventListener("click", function () {
    title.innerText="1";
    headercolor.classList.toggle("header")
});
button2el.addEventListener("click", function () {
    sidebar.innerText="2";
    sidebar.classList.toggle("sidebar")
});