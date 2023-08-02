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

    // Form  

const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');
const expresiones = {

    nombre: /^[az-zA-ñ- ]{1,40}$/,
    correo: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

}


const validarForm = (e) => {

    switch (e.target.name) {
        case 'user_name':
            if (expresiones.nombre.test(e.target.value)) {
                document.getElementById('name').classList.remove('form__error');
                document.getElementById('name').classList.add('nick');
            }else {
                document.getElementById('name').classList.add('form__error');
            }
            break;
        case 'user_mail':
            if (expresiones.correo.test(e.target.value)) {
                document.getElementById('mail').classList.remove('form__error');
                document.getElementById('mail').classList.add('email');
            }else {
                document.getElementById('mail').classList.add('form__error');
            }
            break;
    
    } 
};

inputs.forEach((input) => {

    input.addEventListener('keyup', validarForm);
    input.addEventListener('blur', validarForm);

});



    /* Extraer datos del form */

const procesarTodo = (event) => {

    const datos = new FormData(formulario);
    const datosCompletos = Object.fromEntries(datos.entries()); 
    formulario.reset();
    return datosCompletos;
}

const postData = async () => {

    const newUser = procesarTodo();

    try {
        const response = await fetch ('http://localhost:3000/users', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newUser)
        })
        if (response.ok) {
            const jsonResponse = await response.json();
            const {mail, name} = jsonResponse;
        }
    } catch (error) {
        console.log(error);
    }
}



const boton = document.getElementById('btn');
const name0 = document.getElementById('name');
const msg0 = document.getElementById('msg');
const mail0 = document.getElementById('mail');


boton.addEventListener('click', (event) => {

    event.preventDefault();
    postData();

})

