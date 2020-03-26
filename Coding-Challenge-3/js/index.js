let name = "";
let comment ="";
function mainFunction(event){
  event.preventDefault();
  name = document.getElementsByClassName("userName")[0].value;
  comment = document.getElementsById("userComment").value;

}

document.getElementById("submit").addEventListener("click", (event) =>{
  event.preventDefault();
  mainFunction(event);
});