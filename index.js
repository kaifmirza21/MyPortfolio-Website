
var elem2=document.getElementById('slider-btn1');
var elem3=document.getElementById('slider-btn2');

var item1=document.getElementById('proj-item1');
var item2=document.getElementById('proj-item2');
var item3=document.getElementById('proj-item3');
var item4=document.getElementById('proj-item4');

elem2.addEventListener('click',ChangeDisplayL);
elem3.addEventListener('click',ChangeDisplayR);

var proj_no=1;
function ChangeDisplayR() {
    switch (proj_no) {
        case 1:
            item2.style.display="block";
            item1.style.display="none";
            proj_no=2;
            break;
        case 2:
            item1.style.display="block";
            item2.style.display="none";
            proj_no=1;
            break;

            // when you will add more project then change the logic here in case item 3 will block and item 2 will none and comment out case 3 and 
            // case 4

        // case 3:
        //     item4.style.display="block";
        //     item3.style.display="none";
        //     proj_no=4;
        //     break;
        // case 4:
        //     item1.style.display="block";
        //     item4.style.display="none";
        //     proj_no=1;
        //     break;
        default:
            proj_no=1;
            break;
    }

}

function ChangeDisplayL() {
    switch (proj_no) {
        case 1:
            item2.style.display="block";
            item1.style.display="none";
            proj_no=2;
            break;
        case 2:
            item1.style.display="block";
            item2.style.display="none";
            proj_no=1;
            break;
        // case 3:
        //     item2.style.display="block";
        //     item3.style.display="none";
        //     proj_no=2;
        //     break;
        // case 4:
        //     item3.style.display="block";
        //     item4.style.display="none";
        //     proj_no=3;
        //     break;
        default:
            proj_no=1;
            break;
    }
}

var hamburger_icon=document.getElementById('hamburger-icon');
var menu_box = document.getElementById('menu-box');

hamburger_icon.addEventListener('click',HamburgDisplay);

function HamburgDisplay() {
    if(menu_box.style.display=='none'){
        menu_box.style.display='block';
    }
    else{
        menu_box.style.display='none';
    }
}