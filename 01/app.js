const panels = document.querySelectorAll('.panel')

for (let i = 0; i < panels.length; i++) {
    panels[i].addEventListener('click', (e) =>{
        removeActiveClass()
        panels[i].classList.add('active')
    })
}

function removeActiveClass (){
    for (let i = 0; i < panels.length; i++) {
        panels[i].classList.remove('active')
    }    
}