const ham = document.querySelector("#ham");
const ulist = document.querySelector(".head2");
ham.addEventListener("click", () => {
    ulist.classList.toggle("show");
});

const lists = document.querySelectorAll("ul li");
lists.forEach(function(list){
    list.addEventListener("click", () =>{
        ulist.classList.toggle("show")
    })
})