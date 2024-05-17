let start=document.querySelector('.start')
let stop=document.querySelector('.stop')
let reset=document.querySelector('.reset')
let lotos=document.querySelector('.lotos')

let arr=[]
let startBtnClick=false;

start.onclick=function () {
    if (startBtnClick==false) {
        console.log(startBtnClick);
        var a=  setInterval(() => {
            var index=Math.floor(Math.random()*40)
            if (arr.includes(index)==false) {
                arr.push(index)
                let div=  document.createElement('div')
                div.setAttribute('class','loto')
                lotos.append(div)
                div.innerText=index
                console.log(startBtnClick);
            }
        }, 1000);
        
        startBtnClick=true

    stop.onclick=function () {
        if (startBtnClick==true) {
            startBtnClick=false
        }
        clearInterval(a)
    }

reset.onclick=function () {
    lotos.innerText=''
    clearInterval(a)
    startBtnClick=false
    arr=[]
}
    }
}


