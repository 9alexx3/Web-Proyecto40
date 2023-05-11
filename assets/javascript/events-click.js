// CAMBIAR DE TEMA - MODO CLARO & MODO OSCURO
const theme = localStorage.getItem("theme");
if(theme === 'dark'){
    document.body.classList.toggle('dark');
    localStorage.removeItem("theme", 'light');
    localStorage.setItem("theme", 'dark');
}else{
    if(document.body.classList.contains('dark')) document.body.classList.toggle('dark');
    localStorage.removeItem("theme", 'dark');
    localStorage.setItem("theme", 'light');
}

const icon_theme = document.getElementById("change-theme");
icon_theme.addEventListener("click", () => {
    if(theme === 'light'){
        document.body.classList.toggle('dark');
        localStorage.removeItem("theme", 'light');
        localStorage.setItem("theme", 'dark');
    }else{
        document.body.classList.toggle('dark');
        localStorage.removeItem("theme", 'dark');
        localStorage.setItem("theme", 'light');
    }
})


// COPIAR LA IP DEL SERVIDOR + GENERAR LA VENTANA INFORMATIVA
const element = document.getElementById("CopyIP");
element.addEventListener("click", () => {

    if(navigator.userAgent.toLocaleLowerCase().match(/ipad|ipod|iphone|android/i)){
        alert(`Las IP de nuestro servidor son:\r\n\r\n→     server.proyecto40.es\r\n→     server.proyecto40.net\r\n\r\nSolamente se puede entrar con Java Edition 1.8 - 1.19`);
    }

    navigator.clipboard.writeText("server.proyecto40.es")
    .then( () => {
        Swal.fire(
            'IP COPIADA!',
            'Esperamos verte pronto!',
            'success'
        );
    })
    .catch( (e) => {
        alert('Hubo un error al copiar la IP automáticamente.\r\nIP → server.proyecto40.es');
        console.log(e);
    })

    
})


// DESPLEGAR MENÚ DE MÓVIL
const menu_movil = document.getElementById("menu--movil");
const desplegable_movil = document.getElementById('mobile-topbar--ul');
const fondo_movil = document.getElementById('modal-backdrop');
menu_movil.addEventListener("click", () => {
    desplegable_movil.classList.add("shown");
    fondo_movil.classList.add('modal-backdrop');

    // QUITAR MENÚ MÓVIL AL HACER CLICK FUERA
    document.addEventListener("click", (event) => {
        const isClickInside = fondo_movil.contains(event.target);
    
        if (isClickInside) {
            fondo_movil.classList.remove('modal-backdrop');
            desplegable_movil.classList.remove("shown");
        }
    });

});
