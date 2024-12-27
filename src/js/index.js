let imagem_menu = document.querySelector('header > nav >  img');
let nav_links = document.querySelectorAll('nav a');


let visibilidadeMenu = evento => {
    evento.target.nextElementSibling.classList.toggle('mostrar_menu');
}

for (let link of nav_links){
    link.addEventListener('click', evento => {
        evento.target.parentElement.parentElement.classList.remove('mostrar_menu');
    })
}
imagem_menu.addEventListener('click', visibilidadeMenu);