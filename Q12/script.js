
function change(){
    let element=document.getElementById("Item");

    if(element && element.parentElement){
    element.parentElement.textContent="Update the text";
    }
}
change()