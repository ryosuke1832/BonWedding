document.addEventListener('DOMContentLoaded', function() {
    var messageBlock = document.querySelector('.message-block');

    window.addEventListener('scroll', function() {
        var rect = messageBlock.getBoundingClientRect();

        if (rect.top <= window.innerHeight) {
            messageBlock.classList.add('slideDown');
        }
    });
});


var menuIcon = document.querySelector('.menu-icon');
var sidenav = document.getElementById("mySidenav");

menuIcon.addEventListener('click', openNav);
sidenav.querySelector('.closebtn').addEventListener('click', closeNav);

function openNav() {
    sidenav.style.width = "25%";
}

function closeNav() {
    sidenav.style.width = "0";
}


var overlay = document.getElementById("overlay");

menuIcon.addEventListener('click', openNav);
sidenav.querySelector('.closebtn').addEventListener('click', closeNav);
overlay.addEventListener('click', closeNav);

function openNav() {
    sidenav.style.width = "25%";
    overlay.style.display = "block";
}

function closeNav() {
    sidenav.style.width = "0";
    overlay.style.display = "none";
}

