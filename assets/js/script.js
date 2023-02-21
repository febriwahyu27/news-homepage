const btnMenu = document.querySelector(".btn-menu");
const btnClose = document.querySelector("#btn-close");
const sidebar = document.querySelector(".sidebar");
const dark = document.querySelector(".dark")
btnMenu.addEventListener('click', function(){
    sidebar.style.display = "block";
    dark.style.display = "block";
})
btnClose.addEventListener('click', function(){
    sidebar.style.display = "none";
    dark.style.display = "none";
})