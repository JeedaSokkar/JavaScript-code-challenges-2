let element =document.getElementById("List");

function add(){
    let element =document.getElementById("List");
let li1=document.createElement("li");
li1.textContent="Item 1";

let li2=document.createElement("li");
li2.textContent="Item 2";

element.appendChild(li1);
element.appendChild(li2);
}
 add()