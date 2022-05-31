'use strict';
// button name show
// this div name is hiddendiv
//tab close name close
// bottom div is cover

const shows =document.querySelectorAll('.show')
const hiddendiv=document.querySelector('.hiddendiv')
const btnclos=document.querySelector('.close')
const bottomdiv=document.querySelector('.cover')


// const opentab=function(){
//     hiddendiv.classList.remove('hidden')
//     bottomdiv.classList.remove('hidden')
// }
const whenclose=function(){
    hiddendiv.classList.add('hidden')
    bottomdiv.classList.add('hidden')
}
const opendiv=function(){
    hiddendiv.classList.remove('hidden')
    bottomdiv.classList.remove('hidden')
    // document.querySelector(".text").innerHTML = "New text!";
}
for(let i = 0; i < shows.length; i++ )
shows[i].addEventListener('click',opendiv)
// document.querySelector(".text").innerHTML = "New text!";

// for(let i = 0; i < shows.length; i++ )
// shows[i].addEventListener('click',opendiv)
// შეგვეძლო გაგვეკეთებინა ფუნქციაშო 
// btnclos.addEventListener('click',function(){
//     hiddendiv.classList.add('hidden')
//     bottomdiv.classList.add('hidden')
// })

btnclos.addEventListener('click',whenclose)
bottomdiv.addEventListener('click',whenclose)

document.addEventListener('keydown',function(eve){
    console.log(eve.key)

    if(eve.key==='Escape'&& !hiddendiv.classList.contains('hidden')){
        // if(!hiddendiv.classList.contains('hidden')) //შეგვეძლო ასეც
        whenclose()
    }
})









