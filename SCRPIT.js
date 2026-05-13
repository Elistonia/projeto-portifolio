let ins =document.querySelector("#ins");
let novo= document.getElementById("novo");
ins.addEventListener( "mouseover",  () => {
novo.innerText="Hablidades que tenho";
novo.style.color="blue";

});
ins.addEventListener( "click", () => {
novo.innerText="Hablidades que tenho";
novo.style.color="pink";
}
);

