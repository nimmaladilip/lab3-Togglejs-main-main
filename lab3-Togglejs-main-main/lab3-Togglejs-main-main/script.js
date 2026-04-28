const button = document.getElementById("toggleDark");
let bo = true; 
button.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    
    bo = !bo;
    if (bo) {
        button.innerText = "Dark";
    } else {
        button.innerText = "Light";
    }
});

