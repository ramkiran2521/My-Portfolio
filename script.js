const ovpg1 = document.querySelector(".ok");
const ovpg2 =document.querySelector(".page-2");
const ovpg3 = document.querySelector(".page-3");

const home = document.querySelector(".home");
const projects = document.querySelector(".projects");
const contact = document.querySelector(".contact");

home.addEventListener("click", function(){
    ovpg1.classList.remove("ov-pg-1");
    ovpg2.classList.add("ov-pg-2");
    ovpg3.classList.add("ov-pg-3");

});

projects.addEventListener("click", function(){
    ovpg1.classList.add("ov-pg-1")
    ovpg2.classList.remove("ov-pg-2");
    ovpg3.classList.add("ov-pg-3");
});


contact.addEventListener("click", function(){
    ovpg1.classList.add("ov-pg-1");
    ovpg2.classList.add("ov-pg-2");
    ovpg3.classList.remove("ov-pg-3");
});

