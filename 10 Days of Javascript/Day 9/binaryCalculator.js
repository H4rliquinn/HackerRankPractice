// function add(a){
//     let face=document.getElementById("res");
//     face.innerText+=a;
// }

// function clearRes(){
//     let face=document.getElementById("res");
//     face.innerText='';
// };

// function calculate(){
//     let face=document.getElementById("res");
//     let argList=face.innerText.split(/[^01]/);
//     let stuff=face.innerText.match(/\D/);
//     let answer=eval(parseInt(argList[0],2)+face.innerText.match(/\D/)+parseInt(argList[1],2));
//     answer=Math.floor(answer);
//     face.innerText=answer.toString(2);
// }
document.getElementById('btn0').onclick = action;
document.getElementById('btn1').onclick = action;
document.getElementById('btnClr').onclick = action;
document.getElementById('btnEql').onclick = action;
document.getElementById('btnSum').onclick = action;
document.getElementById('btnSub').onclick = action;
document.getElementById('btnMul').onclick = action;
document.getElementById('btnDiv').onclick = action;

function action(e){
    var btn = e.target || e.srcElement;
    alert("BING");
    // alert(document.getElementById(btn.id).innerHTML);
}