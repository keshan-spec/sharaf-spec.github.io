const btn = document.getElementById("ham")
const navLinks = document.getElementById("links")


btn.addEventListener("click", (e) => {
    e.preventDefault()
    navLinks.classList.toggle("active")
})