const sections=document.querySelectorAll("section");
const navLi=document.querySelectorAll('.navbar-nav li');
// console.log(document.body.scrollHeight)
// console.log(document.body.offsetHeight)
// console.log(document.body.clientHeight)
// console.log(document.documentElement.scrollHeight)
// console.log(document.documentElement.offsetHeight)
// console.log("---------")
window.addEventListener('scroll',()=>{

let current='';
sections.forEach(section =>{
    const sectionTop = section.offsetTop;
    // console.log(sectionTop)
    const sectionHeight=section.offsetTop;
    if(scrollY+100>sectionTop)
    {
        current=section.getAttribute("id");

    }
});
    // console.log(scrollY)

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
          li.classList.add("active");
        }
      });

});

