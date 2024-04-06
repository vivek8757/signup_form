let pass=document.querySelector('#password');
let cnfpassword=document.querySelector('#confirmpassword');
let output=document.querySelector('.output');

cnfpassword.addEventListener('input',check);
function check(){
    let value1=cnfpassword.value;
    let value2=pass.value;
    if(value1!=value2){
        output.style.color="red";
        output.textContent="confirm password does not match";
    }else if(value1==value2){
        output.style.color="green";
        output.textContent="confirm password match";
    }

}

   

