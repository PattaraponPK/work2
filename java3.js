let x=0;
function add(){
    if(x>=0&x<10){
        x=x+1;
    }
    console.log(x);
}
const button11 =document.querySelector('#button11');
button11.addEventListener('click',add);
function minus(){
    if(x<=10&x>0){
        x=x-1;
    }
    console.log(x);
}
const button22 =document.querySelector('#button22');
button22.addEventListener('click',minus);