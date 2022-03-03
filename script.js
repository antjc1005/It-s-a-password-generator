const empty="";
const Ucase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const iCase="abcdefghijklmnopqrstuvwxyz";
const number="01234567890";
const symbol="!@#$%^&*-_+=";
const plength=document.getElementById("p-length");
const upperCase=document.getElementById("p-uppercase");
const lowerCase=document.getElementById("p-lowerercase");
const pNumber=document.getElementById("p-number");
const pSymbol=document.getElementById("p-symbol");
const sumbit=document.getElementById("submit");
const password=document.getElementById("password");

sumbit.addEventListener("click",()=>{
    let initialPassword=empty;
    (upperCase.checked)?initialPassword+=Ucase:"";
    (lowerCase.checked)?initialPassword+=icase:"";
    (pNumber.checked)?initialPassword+=number:"";
    (pSymbol.checked)?initialPassword+=symbol:"";

    password.value=generatePassword(plength.value,initialPassword)

});
function generatePassword(I,initialPassword){
    let pass="";
    for(let i=0;i<I;i++){
        pass+=initialPassword.charAt(Math.floor(Math.random()*initialPassword.length));
    
    }
    return pass;
}