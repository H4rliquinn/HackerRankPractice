function rotate(){
    let circuit=[2,3,6,9,8,7,4,1]

    let btn=document.getElementById('btn1').innerText;
    for (let x in circuit){
        document.getElementById(`btn${circuit[x]}`).innerText="X";
    }

}