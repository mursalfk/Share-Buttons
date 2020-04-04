var menu_icon = document.getElementById("menu_icon");
var side_nav = document.getElementById("side_nav");

side_nav.style.right = "-200px";
menu_icon.onclick = function(){
    if (side_nav.style.right == "-200px"){
        side_nav.style.right == "0";
    } else {
        side_nav.style.right == "-200px";
    }
};