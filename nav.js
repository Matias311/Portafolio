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


formulario.addEventListener('submit', (e) => {

    e.preventDefault();

});

const boton = document.getElementById('btn');
const name0 = document.getElementById('name');
const msg0 = document.getElementById('msg');
const mail0 = document.getElementById('mail');


boton.addEventListener('click', () => {

    if (name0.value.length == 0) {
        
        Swal.fire({

            position: 'center',
            icon: 'error',
            title: 'Complete el campo',
            showConfirmButton: false,
            timer: 1500
        })        

    } else {
        Swal.fire({

            position: 'center',
            icon: 'success',
            title: 'Formulario enviado correctamente',
            showConfirmButton: false,
            timer: 1500
        })
    }
       if (mail0.value.length == 0) {
        
        Swal.fire({

            position: 'center',
            icon: 'error',
            title: 'Complete el campo',
            showConfirmButton: false,
            timer: 1500
        })        

    } else {
        Swal.fire({

            position: 'center',
            icon: 'success',
            title: 'Formulario enviado correctamente',
            showConfirmButton: false,
            timer: 1500
        })
    }
       if (msg0.value.length == 0) {
        
        Swal.fire({

            position: 'center',
            icon: 'error',
            title: 'Complete el campo',
            showConfirmButton: false,
            timer: 1500
        })        

    } else {
        Swal.fire({

            position: 'center',
            icon: 'success',
            title: 'Formulario enviado correctamente',
            showConfirmButton: false,
            timer: 1500
        })
    }
})

    