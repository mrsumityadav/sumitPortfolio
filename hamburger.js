document.addEventListener("DOMContentLoaded", function() {
    const hamburgerElements = document.querySelectorAll('.humburger-icon');
    hamburgerElements.forEach(hamburger => {
        hamburger.addEventListener('click', function(){
            document.querySelector('.humburger-icon').style.visibility = "hidden"
            document.querySelector('.menuBg').style.display = "block"
        });
    });

    const closeBtn = document.querySelectorAll('.close_menu');
    closeBtn.forEach(item => {
        item.addEventListener('click', function(){
            document.querySelector('.humburger-icon').style.visibility = "visible"
            document.querySelector('.menuBg').style.display = "none"
        });
    });
});