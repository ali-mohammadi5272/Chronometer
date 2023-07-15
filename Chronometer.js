let myButtons = document.getElementsByTagName('button');
let STARTbtn = myButtons[0];
let RESETbtn = myButtons[1];
let STOPbtn = myButtons[2];
let myPs = document.getElementsByTagName('p');
let STUNDE = myPs[0];
let muinute = myPs[1];
let sekunde = myPs[2];

let a = '00';
sekunde.innerHTML = a;
let b = '00';
muinute.innerHTML = b;
let c = '00';
STUNDE.innerHTML = c;

let timer;

STARTbtn.addEventListener('click', STARThand);
RESETbtn.addEventListener('click', RESEThand);
STOPbtn.addEventListener('click', STOPhand);




function STARThand(){
    STOPhand();
    timer = window.setInterval(clock, 1000);
}
function clock(){
    a++;
    if (a == 60){
        a = 0;
        b++;
        if (b == 60){
            b = 0;
            c++;
            if (c == 24){
                c = 0;
            }
            if (c < 10){
                c = '0' + c;
            }
            STUNDE.innerHTML = c;
        }
        if (b < 10){
            b = '0' + b;
        }
        muinute.innerHTML = b;
    }
    if (a < 10){
        a = '0' + a;
    }
    sekunde.innerHTML = a;
}




function RESEThand(){
    a = '00';
    sekunde.innerHTML = a;
    b = '00';
    muinute.innerHTML = b;
    c = '00';
    STUNDE.innerHTML = c;
}

function STOPhand(){
    clearInterval(timer);
}