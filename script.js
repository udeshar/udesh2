let a=document.getElementById("tot-cases").innerHTML;
var myvar1=setInterval(() => {
    a++;
    document.getElementById("tot-cases").innerHTML=a;
    if(a>=18000){
        clearInterval(myvar1);
    }
}, 1);

let b=document.getElementById("tot-died").innerHTML;
var myvar2=setInterval(() => {
    b++;
    document.getElementById("tot-died").innerHTML=b;
    if(b>=500){
        clearInterval(myvar2);
    }
}, 1);

let c=document.getElementById("tot-cured").innerHTML;
var myvar3=setInterval(() => {
    c++;
    document.getElementById("tot-cured").innerHTML=c;
    if(c>=5000){
        clearInterval(myvar3);
    }
}, 1);

let d=document.getElementById("pen-cases").innerHTML;
var myvar4=setInterval(() => {
    d++;
    document.getElementById("pen-cases").innerHTML=d;
    if(d>=25000){
        clearInterval(myvar4);
    }
}, 1);

let e=document.getElementById("remaining").innerHTML;
var myvar5=setInterval(() => {
    e++;
    document.getElementById("remaining").innerHTML=e;
    if(e>=16000){
        clearInterval(myvar5);
    }
}, 1);