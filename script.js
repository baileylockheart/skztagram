
function sendMsg(){
    let t = document.getElementById("input").value;
    document.getElementById("outputmessage").innerHTML=t;

    let output = document.getElementById("output");

    document.getElementById("outputmessage").style.display = "flex"

    document.getElementById("input").value="";
    
}