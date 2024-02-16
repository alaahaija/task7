let count=[0 , 0 , 0 , 0];
let btncount = document.querySelectorAll("button");
let para = document.querySelectorAll("p");
for(let i=0;i<btncount.length;i++){
    btncount[i].onclick=function (){
        count[i]++;
        para[i].textContent=count[i];
    }
}