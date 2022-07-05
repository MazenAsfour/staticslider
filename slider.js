const items=document.querySelectorAll(".item");
const span=document.querySelectorAll(".spans");
var index1=1;
function show(a){
    index1=a;
    for (var i=0;i<items.length;i++){
        items[i].style.display="none";
        span[i].style.background="none";
    }
    items[a-1].style.display="block";
    span[a-1].style.background="white";
}
function next(b){
    index1=index1+b;
    console.log(index1);
if(index1>items.length){
    index1=1;
}
console.log(index1,b,items.length);
show(index1);
};

function pres(d){
    console.log(index1,d);
     index1=index1+d;
    if(index1<1){
        index1=items.length;
    };
    console.log(index1);
    show(index1);
}
