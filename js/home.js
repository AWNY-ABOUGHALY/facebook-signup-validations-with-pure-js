let pssWordqInpt = document.querySelector('.paasswd');
let chekInnput = document.querySelector('.chekinnpt') 
chekInnput.addEventListener('click',()=>{
    if(pssWordqInpt.type === "password") {
        pssWordqInpt.type = "text"
    } else {
        pssWordqInpt.type = "password"
    }
})


