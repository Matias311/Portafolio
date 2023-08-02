const nav = document.querySelector('#lista__nav');
const hambur = document.querySelector('#menuHamburgesa');
const cerrar = document.querySelector('#salir')

hambur.addEventListener('click', () =>{

    nav.classList.add('header__lista-active');
    hambur.classList.add('responsive-menu-activo')
    cerrar.classList.add('responsive-menu-exit-activo')

})

cerrar.addEventListener('click', () => {

    nav.classList.remove('header__lista-active')
    cerrar.classList.remove('responsive-menu-exit-activo')
    hambur.classList.remove('responsive-menu-activo')
    
})
