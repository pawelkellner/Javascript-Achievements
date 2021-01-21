
window.onload=function(){
    let button = document.getElementById("knop");
    button.addEventListener('click', ()=>{rollingForStats()});
  }

let random1 = Math.floor(Math.random() * 6 + 1);
let random2 = Math.floor(Math.random() * 6 + 1); 
let random3 = Math.floor(Math.random() * 6 + 1); 
let random4 = Math.floor(Math.random() * 6 + 1);
let array = [random1, random2, random3, random4];
let arrayLow = Math.min.apply(null, array,);
let arrayIndex = array.indexOf(Math.min.apply(null, array,));
let arrayTotal = array.reduce((a, b) => a + b, 0);

function arrayLowest(){
    arrayLow = Math.min.apply(null, array,)
}

function ranNumber(){
    random1 = Math.floor(Math.random() * 6 + 1);
    random2 = Math.floor(Math.random() * 6 + 1); 
    random3 = Math.floor(Math.random() * 6 + 1); 
    random4 = Math.floor(Math.random() * 6 + 1);
    array = [random1, random2, random3, random4]
}

function rollingForStats(){
    ranNumber();
    arrayLowest();
    array.splice(arrayIndex, 1);
    arrayTotal = array.reduce((a, b) => a + b, 0);

    document.getElementById("rand").innerHTML = "Random numbers: " + array;
    document.getElementById("demo").innerHTML = "Totaal " + arrayTotal;

}

