let person = document.querySelector('.person')
let sky = document.querySelector('.sky')
let mountain1 = document.querySelector('.mountain1')
let mountain2 = document.querySelector('.mountain2')
let discover = document.querySelector('.discover')
let bubble = document.querySelector('.bubble')
let menu = document.querySelector('.menu')
let bar1 = document.querySelector('.bar1')
let bar2 = document.querySelector('.bar2')
let bar3 = document.querySelector('.bar3')
let home = document.getElementById('home')
function scrolling_func(){
    person.style="    transform: translateY(-"+window.scrollY/5+"px);"
    mountain1.style="    transform: translateY(-"+window.scrollY/3+"px);"
    mountain2.style="    transform: translateY(-"+window.scrollY/9+"px);"
    sky.style="transform: translateY("+window.scrollY/4+"px);"
    discover.style="transform: translateY("+window.scrollY/3+"px);"
    var  transparent_value= window.scrollY/900
    // var float_trans_val = parseFloat(transparent_value.toFixed(1))
    // console.log( parseFloat(transparent_value.toFixed(1)))
    // root.style.setProperty('--mouse-x', e.clientX + "px");
}
// Menu toggel functions
var counter = 0
function buuble_popup(){
    if(counter==0){
    bubble.style="clip-path: circle(150% at 100% 0%);"
    menu.style="  opacity:1; transform: translateX(0%);"
    // hamburger transition
    bar1.style="transform: rotate(45deg) translateY(3.5px);"
    bar2.style="transform:translateX(-10px); opacity:0; "
    bar3.style="transform: rotate(-45deg) translateY(-4px);"
    counter=1
    }
    else{
    menu.style="  opacity:0; transform: translateX(10%); "
    bubble.style="clip-path: circle(0% at 100% 0%);";
    // hamburger transition
    bar1.style="transform: rotate(0deg) translateY(-7px);"
    bar2.style="transform:translateX(0px); opacity1; "
    bar3.style="transform: rotate(0deg) translateY(7px);"
    counter=0
    }
}

bubble.onmouseout = function(){
    bubble.style="clip-path: circle(0% at 100% 0%);";
    menu.style="opacity:0; transform: translateX(10%); "
    // hamburger transition
    bar1.style="transform: rotate(0deg) translateY(-7px);"
    bar2.style="transform:translateX(0px); opacity1; "
    bar3.style="transform: rotate(0deg) translateY(7px);"
    counter=0
}
bubble.onmouseover = function(){
    bubble.style="clip-path: circle(150% at 100% 0%);"
    menu.style="opacity:1; transform: translateX(0%);"
        // hamburger transition
        bar1.style="transform: rotate(45deg) translateY(3.5px);"
        bar2.style="transform:translateX(-10px); opacity:0; "
        bar3.style="transform: rotate(-45deg) translateY(-4px);"
    counter=1
}
menu.onmouseover = function(){
    bubble.style="clip-path: circle(150% at 100% 0%);"
    menu.style="opacity:1; transform: translateX(0%);"
     // hamburger transition
    bar1.style="transform: rotate(45deg) translateY(3.5px);"
    bar2.style="transform:translateX(-10px); opacity:0; "
    bar3.style="transform: rotate(-45deg) translateY(-4px);"
    counter=1
}

