const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll('.navbar-nav li');

document.querySelector(".home").classList.add("active")

window.addEventListener('scroll', () => {
    document.querySelector(".home").classList.remove("active")
    let current = '';
    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        if (scrollY + 100 > sectionTop) {
            current = section.getAttribute("id");

        }
    });
    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active");
        }
    });

});