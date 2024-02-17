console.log("added js file")


document.getElementById('generate').addEventListener('click', function (){

    const pin=getPin();
    console.log("pin generated")
    document.getElementById('pin-box').value=pin
})

function getPin(){

    const pin=generatePin();
    const pinString= pin+"";
    if(pinString.length===4){
        return pin;
    }
    else{
        return getPin();
    }
}
function generatePin(){

   const random= Math.round(Math.random()*10000);
   return random;

//     console.log(random)
//    if(random.length===4){
//     console.log(random.length)
//     return random
    
//    }
//    else{
//     generatePin()
//    }
   
}