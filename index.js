const icon = document.getElementById("icon");
const menu = document.getElementById("menu");

icon.addEventListener("click", () => {
if (menu.className ==="hidden"){
    menu.classList.remove("hidden")
}else{
    menu.classList.add("hidden")
}
})
