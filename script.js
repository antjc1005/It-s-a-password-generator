const empty="";
const uCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lCase="abcdefghijklmnopqrstuvwxyz";
const number="01234567890";
const symbol="!@#$%^&*-_+=";
const plength=document.getElementById("p-length");
const upperCase=document.getElementById("p-uppercase");
const lowerCase=document.getElementById("p-lowercase");
const pNumber=document.getElementById("p-number");
const pSymbol=document.getElementById("p-symbol");
const sumbit=document.getElementById("submit");
const password=document.getElementById("password");
//generate password click that runs function
sumbit.addEventListener("click",()=>{
    debugger;
    let initialPassword=empty;
    (upperCase.checked)?initialPassword+=uCase:"";
    (lowerCase.checked)?initialPassword+=lCase:"";
    (pNumber.checked)?initialPassword+=number:"";
    (pSymbol.checked)?initialPassword+=symbol:"";

    password.value=generatePassword(plength.value,initialPassword)

});
//function to run password generator
function generatePassword(I,initialPassword){
    let pass="";
    for(let i=0;i<I;i++){
        pass+=initialPassword.charAt(Math.floor(Math.random()*initialPassword.length));
    
    }
    return pass;
}
//copy
const copy=document.getElementById("copybtn");
copy.addEventListener("click", ()=>{
    if(password.value == "") {
        alert("Please generate a password")
    }else {
        password.select();
        document.execCommand("copybtn");
        alert("Password has been copied to clipboard");
    }
});